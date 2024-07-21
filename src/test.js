const { z } = require("zod");

const data = { name: "srs" };

const schema = z
  .object({})
  .passthrough()
  .refine((obj) => ["name", "family"].some((key) => obj.hasOwnProperty(key)));

console.log(schema.safeParse(data));
