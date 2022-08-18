import request from "../../../utils/request";

const handler = async (req, res) => {
  const { id } = req.query;

  const { data: post } = await request(`/getById/${id}`);

  if (post.code != 200) {
    return res.status(200).json({ code: 400, message: "post not found" });
  }

  res.status(200).json(post);
};

export default handler;
