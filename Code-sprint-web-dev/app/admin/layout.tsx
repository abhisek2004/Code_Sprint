import { AdminSidebar } from '@/components/admin-sidebar'

export const metadata = {
  title: 'Admin Dashboard - CodeSprint',
  description: 'Project and contributor management dashboard',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 md:ml-0">
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
