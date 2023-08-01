import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '@store/store'
import { IContact } from '@models/contact/contact'
import { COMMON } from '@config/common'
import { IContactsList } from './contacts-list.model'

const { ENV } = COMMON

// This chunk is only for presentations
const mockedContactsList = {
  contactsList: [
    {
      id: 1,
      fullName: 'Terry Medhurst',
      phone: '+63 791 675 8914',
      image: 'https://robohash.org/hicveldicta.png',
      companyName: "Blanda-O'Keefe",
      email: 'atuny0@sohu.com',
    },
    {
      id: 2,
      fullName: 'Sheldon Quigley',
      phone: '+7 813 117 7139',
      image: 'https://robohash.org/doloremquesintcorrupti.png',
      companyName: 'Aufderhar-Cronin',
      email: 'hbingley1@plala.or.jp',
    },
    {
      id: 50,
      fullName: 'Johnathon Predovic',
      phone: '+351 572 534 5789',
      image: 'https://robohash.org/nisietqui.png',
      companyName: 'Borer and Sons',
      email: 'xlinster1d@bravesites.com',
    },
  ],
}

const initialState: IContactsList.FormattedResponse =
  ENV !== 'DEVELOPMENT' ? { contactsList: [] } : mockedContactsList

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
