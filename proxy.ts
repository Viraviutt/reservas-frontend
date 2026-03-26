import { chain } from "./lib/proxies/chainProxy";
import { authProxy } from "./lib/proxies/authProxy";
import { logProxy } from "./lib/proxies/logProxy";

export default chain([logProxy, authProxy]);

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};