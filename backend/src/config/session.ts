import MongoStore from "connect-mongo";
import session from "express-session";


export const configSession = session({
  name: "session_id",
  secret: process.env.SESSION_SECRET!,
  saveUninitialized:false,
  resave:false,
  store: MongoStore.create({
    mongoUrl:  process.env.MONGODB_URI!,
    collectionName: "sessions",
  }),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
});
