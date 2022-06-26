import request from "../../utils/request";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ code: 400, message: "this Page not found" });
  }

  const { username, password } = req.body;

  const { data } = await request({
    url: `/users?username=${username}&password=${password}`,
  });

  if (!data.length) {
    return res
      .status(200)
      .json({ code: 400, message: "username or password is wrong" });
  }

  res.status(200).json({ code: 200, token: data[0].token });
};

export default handler;
