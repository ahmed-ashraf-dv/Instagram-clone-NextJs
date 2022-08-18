import request from "../../utils/request";

const handler = async (req, res) => {
  const { num, amount, query } = req.query;

  const { data } = await request({
    url: `/search-users?query=${query}&amount=${amount}&page=${num}`,
  });

  if (data.code != 200) {
    return res.status(200).json(data);
  }

  res.status(200).json({ code: 200, users: data.result });
};

export default handler;
