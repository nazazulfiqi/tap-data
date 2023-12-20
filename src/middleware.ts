import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function (req) {
    return;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        console.log("dari middleware", token);
        
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    '/dashboard',
    '/data',
  ],
};
