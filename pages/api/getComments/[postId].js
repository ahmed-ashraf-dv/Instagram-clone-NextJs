import request from "../../../utils/request";

const handler = async (req, res) => {
  res.status(200).json({ code: 200, posts: [] });
};

export default handler;
