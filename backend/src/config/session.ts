import MongoStore from "connect-mongo";
import session from "express-session";

const mongoConnectionUrl = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}?authSource=${process.env.MONGODB_AUTH_SOURCE}`;

export const configSession = session({
  name: "session_id",
  secret: process.env.SESSION_SECRET!,
  saveUninitialized:false,
  resave:false,
  store: MongoStore.create({
    mongoUrl: mongoConnectionUrl,
    collectionName: "sessions",
  }),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
});
