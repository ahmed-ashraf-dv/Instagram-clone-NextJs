import axios from "axios";

const handler = async (req, res) => {
  const { username } = req.query;

  //   const { data } = await axios(
  //     `http://localhost:3005/posts?_limit=${amount}&_page=${num}&_sort=id&_order=desc`
  //   );

  res.status(200).json({
    code: 200,
    posts: 10,
    followers: 10,
    following: 10,
    isFollowed: true,
  });
};

export default handler;
