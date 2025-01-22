export const verifyPhoneMinLength = ({ value }: { value: string }): boolean => {
  return value.length >= 10
}
