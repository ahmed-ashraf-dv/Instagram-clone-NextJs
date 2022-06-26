import axios from "axios";

const handler = async (req, res) => {
  const { id, amount, num } = req.query;

  const { data } = await axios(
    `http://localhost:3005/posts?userId=${id}&_sort=id&_order=desc&_limit=${amount}&_page=${num}`
  );

  res.status(200).json({ code: 200, posts: data });
};

export default handler;
