export const COMMON = {
  ENV: import.meta.env.VITE_ENV,
  SEARCH_DEBOUNCE_IN_SECONDS: Number(
    import.meta.env.VITE_SEARCH_DEBOUNCE_IN_SECONDS,
  ),
  SEARCH_MINIMUM_CHARACTERS: Number(
    import.meta.env.VITE_SEARCH_MINIMUM_CHARACTERS,
  ),
}

console.log(import.meta.env)
