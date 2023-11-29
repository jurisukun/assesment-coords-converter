import Fastify from "fastify";
import fastifyMysql from "@fastify/mysql";
import "dotenv/config";

import cors from "@fastify/cors";

import coordsController from "./controllers/coordsController.js";

const fastify = Fastify({ logger: false });
fastify.register(fastifyMysql, {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.MYSQL_DB_PASSWORd,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  promise: true,
});
fastify.register(cors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

fastify.register(coordsController, { prefix: "/api" });

fastify.listen({ port: 3010 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server listening at " + address);
});
