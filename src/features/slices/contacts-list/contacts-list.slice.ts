import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '@store/store'
import { IContactsList } from './contacts-list.model'
import { IContact } from '@models/contact/contact'

const initialState = { contactsList: [] } as IContactsList.State

export const contactsListSlice = createSlice({
  name: 'contactsListSlice',
  initialState,
  reducers: {
    addContact(
      state,
      {
        payload,
      }: PayloadAction<{
        newContact: IContact
      }>,
    ) {
      const index = state.contactsList.findIndex(
        item => item.id === payload.newContact.id,
      )

      if (index >= 0) return

      state.contactsList.push(payload.newContact)
    },
    removeContact(state, { payload }: PayloadAction<{ contactId: number }>) {
      const index = state.contactsList.findIndex(
        item => item.id === payload.contactId,
      )

      state.contactsList.splice(index, 1)
    },
  },
})

export const { addContact, removeContact } = contactsListSlice.actions

export const contactsListSelector = (state: RootState) =>
  state.contactsListSlice.contactsList
