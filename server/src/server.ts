import "dotenv/config";

import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import { authRoutes } from "./routes/auth";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

// app.register(cors, {
//   origin: ["http://localhost:3000"],
// });

app.register(cors);
app.register(fastifyJwt, {
  secret: "HM9C83F2PXFH93HP41CHX928HPY9C2Y89CYÇyyrç893br7PBT9O9PBB7PTT69OF",
});

app.register(memoriesRoutes);
app.register(authRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀 HTTP server running on http://localhost:3333");
  });
