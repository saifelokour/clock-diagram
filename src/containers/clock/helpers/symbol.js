
export const symbol = (number) => {
  switch (number) {
    case 10:
      return "T"
    case 11:
      return "E"
    case 12:
      return "C"
    default:
      return number
  }
}