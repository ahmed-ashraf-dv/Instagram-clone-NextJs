import request from "../../../utils/request";

const handler = async (req, res) => {
  const { username, amount, num } = req.query;

  const { data: curentUser } = await request(
    `/getFollowing/${username}?amount=${amount}&page=${num}`
  );

  res.status(200).json(curentUser);
};

export default handler;
