import request from "../../utils/request";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ code: 400, message: "this Page not found" });
  }

  const { username, password } = req.body;

  const { data } = await request.post("/login", { username, password });

  res.status(200).json(data);
};

export default handler;
