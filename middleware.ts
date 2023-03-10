import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

type User = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  adminNo: string;
  lastName: string;
  emailVerified: boolean;
  photo: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export default withAuth(
  function middleware(req) {
    let user: User = req.nextauth.token?.user as any;

    if (!user.emailVerified) {
        if (req.nextUrl.pathname.match('/register')){
            return NextResponse.rewrite(new URL("/register", req.url));
        } else {
            return NextResponse.rewrite(new URL("/login", req.url));
        }
    } else if (user.emailVerified) {
        if (req.nextUrl.pathname.startsWith('/register') || req.nextUrl.pathname.startsWith('/login')){
            return NextResponse.rewrite(new URL("/", req.url));
        } 
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/:path*"],
};
