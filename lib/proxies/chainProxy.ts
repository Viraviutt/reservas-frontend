import { NextProxy, NextResponse } from "next/server";

export type ProxyFactory = (proxy: NextProxy) => NextProxy;

export function chain(functions:ProxyFactory[], index = 0): NextProxy {
    const current = functions[index];
    if (current) {
        const next = chain(functions, index + 1);
        return current(next);
    }
    return () => NextResponse.next();
    
}