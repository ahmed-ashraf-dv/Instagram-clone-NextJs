import request from "../../utils/request";

const handler = async (req, res) => {
  const { num, amount } = req.query;

  const { data: postsData } = await request(
    `/explore?amount=${amount}&page=${num}`
  );

  res.status(200).json(postsData);
};

export default handler;
