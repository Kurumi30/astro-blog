export function formatDateToYYYYMMDD(date: Date): string {
  return date.toISOString().substring(0, 10)
}

export function formatDateToDDMMYYYY(date: Date): string {
  return (
    `${date.toISOString().substring(8, 10)}-${date.toISOString().substring(5, 7)}-${date.toISOString().substring(0, 4)}`
  )
}
