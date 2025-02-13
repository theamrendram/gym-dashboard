import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MembersTable } from "@/components/members-table"
import { AddMemberForm } from "@/components/add-member-form"
import { calculateStatus } from "@/lib/utils"

// Sample data - replace with your actual data fetching logic
const members = [
  {
    id: "1",
    name: "Raman",
    contactNo: "8595590509",
    startDate: "2025-01-01",
    endDate: "2025-02-01",
    fee: 800,
    membershipType: "2 Month" as const,
    pending: false,
    status: calculateStatus("2025-02-01"),
  },
  // Add more sample data here
]

export default function DashboardPage() {
  const activeMembers = members.filter((m) => m.status === "active").length
  const expiredMembers = members.filter((m) => m.status === "expired").length
  const pendingPayments = members.filter((m) => m.pending).length

  return (
    <div className="hidden flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="add">Add Member</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{activeMembers}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Expired Memberships</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{expiredMembers}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{pendingPayments}</div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-1">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Members</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <MembersTable data={members} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="members">
            <Card>
              <CardHeader>
                <CardTitle>All Members</CardTitle>
              </CardHeader>
              <CardContent>
                <MembersTable data={members} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="add">
            <Card>
              <CardHeader>
                <CardTitle>Add New Member</CardTitle>
              </CardHeader>
              <CardContent>
                <AddMemberForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

