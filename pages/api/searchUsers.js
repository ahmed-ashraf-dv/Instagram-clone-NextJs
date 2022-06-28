import request from "../../utils/request";

const handler = async (req, res) => {
  const { num, amount, query } = req.query;

  const { data } = await request({
    url: `/users?q=${query}&_limit=${amount}&_page=${num}&_sort=id&_order=desc`,
  });

  if (!data?.length) {
    return res.status(200).json({ code: 200, users: [] });
  }

  const users = data.map((user) => ({
    username: user.username,
    avatar: user.avatar,
  }));

  res.status(200).json({ code: 200, users: users });
};

export default handler;
