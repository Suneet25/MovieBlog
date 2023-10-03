import { NextResponse } from "next/server";

export async function middleware(req) {
 
  let cookie = req.cookies.get("sb-vhleaockfvrghnjscbzk-auth-token");
  console.log("COOKIES", cookie);
  if (!cookie) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/animes", "/animes/:path*","/movies", "/movies/:path*"],
};
