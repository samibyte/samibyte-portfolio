import { SessionOptions } from "iron-session";

export interface AdminSession {
  isLoggedIn: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.ADMIN_SESSION_PASSWORD || "complex_password_at_least_32_characters_long",
  cookieName: "samibyte_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
