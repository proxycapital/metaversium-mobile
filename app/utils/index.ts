export const formatSolAddress = (address: string): string => {
  if (!address) return ""
  return `${address.slice(0, 7)}...${address.slice(address.length - 7, address.length)}`
}

export const formatAmount = (amount: number): string => {
  if (amount > 1000) return `${amount / 1000}K`
  return String(amount)
}
