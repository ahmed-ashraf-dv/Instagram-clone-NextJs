import request from "../../../utils/request";

const handler = async (req, res) => {
  const { id } = req.query;

  const { data } = await request({
    url: `/posts?id=${id}`,
  });

  res.status(200).json({ code: 200, post: data || null });
};

export default handler;
