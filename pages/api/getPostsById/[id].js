import request from "../../../utils/request";

const handler = async (req, res) => {
  const { id, amount, num } = req.query;

  const { data } = await request({
    url: `/posts?userId=${id}&_sort=id&_order=desc&_limit=${amount}&_page=${num}`,
  });

  res.status(200).json({ code: 200, posts: data });
};

export default handler;
