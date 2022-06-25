import axios from "axios";

const handler = async (req, res) => {
  const { data } = await axios(`http://localhost:3005/posts`);

  data.sort(() => Math.random() - 0.5);

  res.status(200).json({ code: 200, posts: data });
};

export default handler;
