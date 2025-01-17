export const getTimeAgo = (date: string | Date): string => {
  const now = new Date()
  const createdAt = new Date(date)
  const difference = now.getTime() - createdAt.getTime()

  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const month = 30 * day
  const year = 12 * month

  if (difference < minute) {
    return 'Criado a menos de 1 minuto atrás'
  } else if (difference < hour) {
    const minutes = Math.floor(difference / minute)
    return `Criado a ${minutes} minuto${minutes > 1 ? 's' : ''} atrás`
  } else if (difference < day) {
    const hours = Math.floor(difference / hour)
    return `Criado a ${hours} hora${hours > 1 ? 's' : ''} atrás`
  } else if (difference < month) {
    const days = Math.floor(difference / day)
    return `Criado a ${days} dia${days > 1 ? 's' : ''} atrás`
  } else if (difference < year) {
    const months = Math.floor(difference / month)
    return `Criado a ${months} mês${months > 1 ? 'es' : ''} atrás`
  } else {
    const years = Math.floor(difference / year)
    return `Criado a ${years} ano${years > 1 ? 's' : ''} atrás`
  }
}
