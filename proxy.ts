import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Định nghĩa các route cần bảo vệ (Dashboard và trang chủ nếu muốn)
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  // '/', // Bỏ comment dòng này nếu bạn muốn bắt buộc login ngay từ trang chủ
]);

export default clerkMiddleware(async (auth, req) => {
  // Nếu route nằm trong danh sách cần bảo vệ, gọi hàm protect()
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Bỏ qua các file tĩnh của Next.js và các file hình ảnh/font...
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Luôn chạy middleware cho các API route
    '/(api|trpc)(.*)',
  ],
};