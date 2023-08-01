import { faker } from '@faker-js/faker'
import { IContact } from '@models/contact/contact'
import { configureStore } from '@reduxjs/toolkit'
import {
  addContact,
  contactsListSlice,
  removeContact,
} from '@slices/contacts-list/contacts-list.slice'

import { RootState } from '@store/store'

describe('contactsListSlice', () => {
  let store = configureStore({
    reducer: { contactsListSlice: contactsListSlice.reducer },
  })

  const mockState = {
    contactsListSlice: { contactsList: [] as IContact[] },
  } as RootState

  const newContact = {
    id: faker.number.int(100),
    fullName: faker.person.fullName(),
    image: faker.image.avatar(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    companyName: faker.company.name(),
  }

  beforeEach(() => {
    store = configureStore({
      reducer: { contactsListSlice: contactsListSlice.reducer },
      preloadedState: mockState,
    })
  })

  it('should initialize the slice successfully', () => {
    expect(
      Object.keys(store.getState().contactsListSlice.contactsList).length,
    ).toBe(0)
  })

  it('should add a contact successfully once', () => {
    store.dispatch(addContact({ newContact }))
    store.dispatch(addContact({ newContact }))
    store.dispatch(addContact({ newContact }))

    expect(
      Object.keys(store.getState().contactsListSlice.contactsList).length,
    ).toBe(1)
    expect(store.getState().contactsListSlice.contactsList[0]).toBe(newContact)
  })

  it('should remove a contact successfully', () => {
    store.dispatch(removeContact({ contactId: newContact.id }))

    expect(
      Object.keys(store.getState().contactsListSlice.contactsList).length,
    ).toBe(0)
  })
})
