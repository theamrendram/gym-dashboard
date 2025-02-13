export type Member = {
  id: string
  name: string
  contactNo: string
  startDate: string
  endDate: string
  fee: number
  membershipType: "2 Month" | "3 Month" | "6 Month"
  pending: boolean
  status: "active" | "expired" | "pending"
}

export type SortDirection = "asc" | "desc"

