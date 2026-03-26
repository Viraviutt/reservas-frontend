import { NextFetchEvent, NextProxy, NextRequest, NextResponse } from "next/server";
import { ProxyFactory } from "./chainProxy";

export const authProxy: ProxyFactory = (next: NextProxy) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const { pathname } = request.nextUrl;
        const token = request.cookies.get("token")?.value;
        
        if (pathname.startsWith("/")) {
            return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
        }

        if (pathname.startsWith("/dashboard") && !token) {
            return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
        }

        if (pathname.startsWith("/auth/login") && token) {
            return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
        }

        return next(request, _next);
    }
}
