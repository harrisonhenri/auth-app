import { useCallback, useEffect, useState } from 'react'

import { COMMON } from '@config/common'
import { useLazySearchContactQuery } from '@slices/contacts-list/contacts-list.api'
import { IContact } from '@models/contact/contact'
import { useDebounce } from '@hooks/use-debounce/use-debounce'

const { SEARCH_DEBOUNCE_IN_SECONDS, SEARCH_MINIMUM_CHARACTERS } = COMMON

export const useSearchContacts = () => {
  const [name, setName] = useState('')
  const [isReponseEmpty, setIsReponseEmpty] = useState(false)
  const [contacts, setContacts] = useState<IContact[]>([])
  const nameStartsWith = useDebounce(name, SEARCH_DEBOUNCE_IN_SECONDS)
  const [searchContact, { isFetching, isLoading, error }] =
    useLazySearchContactQuery()

  const handleUserNameChange = useCallback((value: string) => {
    setName(value)
  }, [])

  const handleSearch = useCallback(
    async (search: string) => {
      setIsReponseEmpty(false)
      const result = await searchContact({ name: search }).unwrap()

      const newUsers = result?.contactsList ?? []

      setContacts(newUsers)
      setIsReponseEmpty(newUsers.length <= 0)
    },
    [searchContact],
  )

  const clearInput = useCallback(() => {
    setName('')
    setContacts([])
  }, [])

  useEffect(() => {
    if (nameStartsWith && nameStartsWith.length > SEARCH_MINIMUM_CHARACTERS) {
      handleSearch(nameStartsWith)
    }
  }, [nameStartsWith, handleSearch])

  return {
    handleUserNameChange,
    loading: isLoading || isFetching,
    contacts,
    name,
    error,
    clearInput,
    isReponseEmpty,
  }
}
