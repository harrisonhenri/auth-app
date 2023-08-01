import { Autocomplete } from '@components/Autocomplete/autocomplete'
import { ContactSuggestionCard } from '@components/ContactSuggestionCard/contact-suggestions-card'
import { IContact } from '@models/contact/contact'
import { addContact } from '@slices/contacts-list/contacts-list.slice'
import { useAppDispatch } from '@store/store'
import { Contacts } from './components/Contacts/contacts'
import { SnackBar } from '@components/Snackbar/snack-bar'
import { parseErrorMessage } from '@utils/http/parse-error-message/parse-error-message'
import { useSearchContacts } from '@hooks/use-search-contacts/use-search-contacts'

export const ContactsList = () => {
  const dispatch = useAppDispatch()

  const {
    name: inputValue,
    contacts,
    handleUserNameChange,
    loading,
    clearInput,
    isReponseEmpty,
    error: searchingContactError,
  } = useSearchContacts()

  function handleClickItem(newContact: IContact) {
    dispatch(addContact({ newContact }))
  }

  return (
    <>
      <h4>Contatos</h4>
      <Autocomplete
        handleInputChange={handleUserNameChange}
        ItemComponent={ContactSuggestionCard}
        handleClickItem={handleClickItem}
        inputValue={inputValue}
        suggestions={contacts!}
        loading={loading}
        clearInput={clearInput}
        isSuggestionsEmpty={isReponseEmpty}
        name="search-user"
      />
      <Contacts />
      {searchingContactError && (
        <SnackBar
          type="error"
          text={parseErrorMessage(searchingContactError)}
          open={Boolean(searchingContactError)}
        />
      )}
    </>
  )
}
