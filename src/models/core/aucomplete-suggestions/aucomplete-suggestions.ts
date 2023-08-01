export type AutocompleteSuggestionsComponent<T extends object> = React.FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key: any
  handleClickItem(item: T): void
  data: T
}>

export type IAutocompleteSuggestionItem = {
  id: number | string
}
