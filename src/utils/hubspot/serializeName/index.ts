export const serializeName = (fullname: string) => {
  try {
    const name = fullname.split(' ')
    const firstName = name[0]
    let lastName = ''
    if (name[1]) lastName = fullname.substring(fullname.indexOf(' ') + 1)

    return { firstName, lastName }
  } catch (errorSerializeName) {
    return { firstName: '', lastName: '' }
  }
}
