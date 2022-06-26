import request from "../../utils/request";

const handler = async (req, res) => {
  const { num, amount } = req.query;

  const { data } = await request({
    url: `/posts?_limit=${amount}&_page=${num}&_sort=id&_order=desc`,
  });

  res.status(200).json({ code: 200, posts: data.reverse() });
};

export default handler;
