import { defineMiddleware } from "astro:middleware";
import { ACCESS_COOKIE, isValidSession } from "./lib/access";

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname.replace(/\/+$/, "") || "/";

  // Let guests reach the login page and submit the code.
  if (pathname === "/access" || pathname === "/api/access") {
    return next();
  }

  // Allow built assets, stylesheets, fonts and public images
  // to load normally.
  const isStaticAsset =
    pathname.startsWith("/_astro/") ||
    /\.(?:avif|css|gif|ico|jpe?g|js|map|pdf|png|svg|webp|woff2?|ttf|otf)$/i.test(
      pathname
    );

  if (isStaticAsset) {
    return next();
  }

  const token = context.cookies.get(ACCESS_COOKIE)?.value;

  if (isValidSession(token)) {
    return next();
  }

  // Preserve the requested route, including its query string.
  const returnTo = `${context.url.pathname}${context.url.search}`;
  const loginUrl = new URL("/access", context.url.origin);

  loginUrl.searchParams.set("returnTo", returnTo);

  return context.redirect(loginUrl.toString(), 303);
});
