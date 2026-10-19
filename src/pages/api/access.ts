import type { APIRoute } from "astro";
import {
  ACCESS_COOKIE,
  SESSION_MAX_AGE,
  createSessionToken,
  isCorrectAccessCode,
  safeReturnTo,
} from "../../lib/access";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, url }) => {
  // Prevent cross-origin form submissions.
  const origin = request.headers.get("origin");

  if (origin && origin !== url.origin) {
    return new Response("Forbidden", { status: 403 });
  }

  const formData = await request.formData();
  const codeValue = formData.get("code");
  const returnTo = safeReturnTo(formData.get("returnTo"));

  if (typeof codeValue !== "string" || !codeValue) {
    return new Response("Access code required", { status: 400 });
  }

  let valid = false;

  try {
    valid = isCorrectAccessCode(codeValue);
  } catch (error) {
    console.error("Wedding access configuration error:", error);

    return new Response("Access is not configured", {
      status: 500,
    });
  }

  if (!valid) {
    const target = new URL("/access", url.origin);
    target.searchParams.set("error", "1");
    target.searchParams.set("returnTo", returnTo);

    return new Response(null, {
      status: 303,
      headers: {
        Location: target.toString(),
        "Cache-Control": "no-store",
      },
    });
  }

  let token: string;

  try {
    token = createSessionToken();
  } catch (error) {
    console.error("Wedding session configuration error:", error);

    return new Response("Access is not configured", {
      status: 500,
    });
  }

  cookies.set(ACCESS_COOKIE, token, {
    httpOnly: true,
    secure: url.protocol === "https:",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  return new Response(null, {
    status: 303,
    headers: {
      Location: new URL(returnTo, url.origin).toString(),
      "Cache-Control": "no-store",
    },
  });
};
