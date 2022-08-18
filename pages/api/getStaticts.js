import request from "../../utils/request";

const handler = async (req, res) => {
  const { username, token } = req.query;

  if (!username || !token) {
    return res.status(200).json({ code: 400, Message: "not found" });
  }

  const { data } = await request({
    url: `/getStaticts/${username}?clientToken=${token}`,
  });

  res.status(200).json(data);
};

export default handler;
