import { NextApiRequest, NextApiResponse } from "next";

type ServerLessFunction = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void> | void;

const applyCors =
  (func: ServerLessFunction) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );

    /**
     * Handles OPTIONS requests for CORS preflight requests.
     */
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    return await func(req, res);
  };

export default applyCors;
