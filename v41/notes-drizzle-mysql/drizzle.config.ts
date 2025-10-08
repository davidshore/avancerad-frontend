import { defineConfig } from "drizzle-kit";
// export default defineConfig({
//   out: "./drizzle",
//   schema: "./src/db/schema.ts",
//   dialect: "sqlite",
//   dbCredentials: {
//     url: "sqlite.db",
//   },
// });

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    //url: process.env.DATABASE_URL!,
    host: "localhost",
    user: "david",
    password: "test",
    port: 8889,
    database: "notes",
  },
});
