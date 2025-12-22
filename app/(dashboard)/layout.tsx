import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* 1. Nếu đã đăng nhập: Cho phép hiển thị các trang bên trong (Dashboard, etc.) */}
      <SignedIn>
        {children}
      </SignedIn>

      {/* 2. Nếu chưa đăng nhập: Lập tức đá về trang Sign-in */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}