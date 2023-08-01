import { useState, useEffect } from 'react'

export const useDebounce = <T>(value: T, timeInSeconds = 1) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  const milliSeconds = timeInSeconds * 1000

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, milliSeconds)

    return () => {
      clearTimeout(handler)
    }
  }, [value, milliSeconds])

  return debouncedValue
}
