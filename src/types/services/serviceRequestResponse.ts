export type ServiceRequestResponse<T> = {
  data?: T
  meta?: {
    pagination: {
      total: number
      pageCount: number
      page: number
      pageSize: number
    }
  }
  error?: string
}
