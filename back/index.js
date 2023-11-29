import Fastify from "fastify";

const fastify = Fastify({ logger: false });

fastify.listen({ port: 3010 }, (err, address) => {
  if (err) {
    process.exit(1);
  }
  console.log("Server listening at " + address);
});
