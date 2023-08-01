import { IContact } from '@models/contact/contact'
import styles from './contact-suggestions-card.module.scss'
import { IoIosAddCircle } from 'react-icons/io'

interface Props {
  handleClickItem(item: IContact): void
  data: IContact
}

export const ContactSuggestionCard = ({ handleClickItem, data }: Props) => {
  return (
    <li data-testid="contact-suggestion-card" className={styles.container}>
      <div className={styles.content__container}>
        <img data-testid="avatar" src={data.image} alt="Avatar" />
        <div>
          <p>
            <strong>Nome:</strong> {data.fullName}
          </p>
          <p>
            <strong>Telefone:</strong> {data.phone}
          </p>
        </div>
      </div>
      <button
        data-testid={`add-${data.id}`}
        onClick={() => handleClickItem(data)}
      >
        <IoIosAddCircle />
      </button>
    </li>
  )
}
