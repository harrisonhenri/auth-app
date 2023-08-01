import { useAppDispatch, useAppSelector } from '@store/store'
import styles from './contacts.module.scss'
import {
  contactsListSelector,
  removeContact,
} from '@slices/contacts-list/contacts-list.slice'
import {
  FaUser,
  FaTimes,
  FaCreditCard,
  FaNetworkWired,
  FaPhone,
} from 'react-icons/fa'

export const Contacts = () => {
  const contactsList = useAppSelector(contactsListSelector)

  const dispatch = useAppDispatch()

  function handleClickItem(contactId: number) {
    dispatch(removeContact({ contactId }))
  }

  return (
    <div className={styles.container}>
      <h6>Minha agenda:</h6>
      <ul data-testid="contacts-list" className={styles.content__container}>
        {contactsList.map(item => (
          <li key={item.id} className={styles.item}>
            <button
              data-testid={`remove-${item.id}`}
              onClick={() => handleClickItem(item.id)}
            >
              <FaTimes />
            </button>
            <img src={item.image} alt="Avatar" />
            <div className={styles['item__content']}>
              <div>
                <FaUser />
                <p>{item.fullName}</p>
              </div>
              <div>
                <FaPhone />
                <p>{item.phone}</p>
              </div>
              <div>
                <FaCreditCard />
                <p>{item.email}</p>
              </div>
              <div>
                <FaNetworkWired />
                <p>lore</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
