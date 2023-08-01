import styles from './autocomplete.module.scss'
import { FaTimes } from 'react-icons/fa'
import {
  AutocompleteSuggestionsComponent,
  IAutocompleteSuggestionItem,
} from '@models/core/aucomplete-suggestions/aucomplete-suggestions'
import { Spinner } from '@components/Spinner/spinner'

interface Props<T extends object> {
  suggestions?: T[]
  handleInputChange(newValue: string): void
  handleClickItem(item: T): void
  ItemComponent: AutocompleteSuggestionsComponent<T>
  inputValue: string
  loading?: boolean
  clearInput(): void
  isSuggestionsEmpty?: boolean
  suggestionsEmptyText?: string
  name: string
}

export const Autocomplete = <T extends object>({
  suggestions,
  handleInputChange: handleChange,
  handleClickItem,
  ItemComponent,
  inputValue,
  loading,
  clearInput,
  isSuggestionsEmpty,
  suggestionsEmptyText = 'Não encontramos nenhum usuário com esse nome :(. Tente novamente.',
  name,
}: Props<T>) => {
  function handleClick(item: T) {
    handleClickItem(item)
    clearInput()
  }

  return (
    <div className={styles.container}>
      <input
        data-testid={`${name}-text`}
        type="text"
        placeholder="Busque aqui o seu novo contato"
        onChange={e => handleChange(e.target.value)}
        value={inputValue}
      />
      {loading && (
        <button className={styles['container__button']}>
          <Spinner variation="secondary" />
        </button>
      )}
      {inputValue && !loading && (
        <button
          data-testid="clear-input"
          className={styles['container__button']}
          onClick={clearInput}
        >
          <FaTimes />
        </button>
      )}
      {isSuggestionsEmpty && (
        <ul data-testid="empty-suggestions" className={styles.suggestions}>
          <div className={styles['suggestions--empty']}>
            <p>{suggestionsEmptyText}</p>
          </div>
        </ul>
      )}
      {suggestions && suggestions.length > 0 && (
        <ul data-testid="suggestions" className={styles.suggestions}>
          {suggestions.map(suggestion => (
            <ItemComponent
              key={(suggestion as IAutocompleteSuggestionItem).id}
              handleClickItem={handleClick}
              data={suggestion}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
