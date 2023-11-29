const coordsSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          data: { type: "string" },
          message: { type: "string" },
        },
        required: ["data", "message"],
      },
    },
  },
};

const coordsController = (fastify, option, done) => {
  fastify.post("/savecoords", coordsSchema, async (request, reply) => {
    const { latitude, longitude } = request.body;
    console.log(request.body);
    try {
      await fastify.mysql.execute(
        "INSERT INTO coords_data (lat, lng) VALUES (?, ?)",
        [Number(latitude), Number(longitude)]
      );
    } catch (err) {
      reply.send({ data: "Error", message: "Error saving coordinates" });
    }
    reply.send({ data: "Success", message: "Coors saved" });
  });
  done();
};

export default coordsController;
