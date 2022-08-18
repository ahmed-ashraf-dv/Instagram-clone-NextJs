import request from "../../../utils/request";

const handler = async (req, res) => {
  const { id, amount, num } = req.query;

  const { data: posts } = await request({
    url: `/getPosts/${id}?amount=${amount}&page=${num}`,
  });

  res.status(200).json(posts);
};

export default handler;
