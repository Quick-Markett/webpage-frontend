export const fullNameValidation = ({ value }: { value: string }): boolean => {
  return value.trim().split(' ').length > 1
}
