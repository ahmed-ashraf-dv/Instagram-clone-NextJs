import request from "../../utils/request";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ code: 400, message: "this Page not found" });
  }

  const { email, name, username, password } = req.body;

  if (!email || !name || !username || !password) {
    return res.status(400).json({ code: 400, message: "type all data" });
  }

  const { data } = await request.post("sign-user", req.body);

  res.status(200).json(data);
};

export default handler;
