export const getStyle = (type: 'success' | 'error', open?: boolean) => {
  const openClass = open ? 'open' : ''
  const variantClass = type === 'success' ? 'success' : 'error'

  return { openClass, variantClass }
}
