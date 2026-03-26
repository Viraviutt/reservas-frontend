import { NextFetchEvent, NextProxy, NextRequest } from "next/server";
import { ProxyFactory } from "./chainProxy";

export const logProxy: ProxyFactory = (next: NextProxy) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const { pathname } = request.nextUrl;
        const method = request.method;

        console.log(`[${new Date().toISOString()}] ${method} ${pathname}`);
        
        return next(request, _next);
    }
}