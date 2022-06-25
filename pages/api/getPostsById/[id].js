import axios from "axios";

const handler = async (req, res) => {
  const { id } = req.query;

  const { data } = await axios(`http://localhost:3005/posts?userId=${id}`);

  res.status(200).json({ code: 200, posts: data });
};

export default handler;
