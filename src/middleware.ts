import {withAuth, NextRequestWithAuth} from 'next-auth/middleware';
import {NextResponse} from 'next/server';


export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log(request.nextUrl.pathname);
    console.log("dari token", request.nextauth.token);

    if (request.nextUrl.pathname.startsWith('/admin') 
        && request.nextauth.token?.role_id !== 1) {
      return NextResponse.redirect(new URL('/dashboard', request.url));} 
  },
  {
    callbacks: {
      authorized: ({token}) => !!token
    }
  }
)

export const config = {
  matcher: ['/admin/:path*', '/dashboard', '/description' ],
}