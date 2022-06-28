import request from "../../../utils/request";

const handler = async (req, res) => {
  const { id, amount, num } = req.query;

  const { data: postsData } = await request({
    url: `/posts?userId=${id}&_sort=id&_order=desc&_limit=${amount}&_page=${num}`,
  });

  // Get user puplisher
  const getQuery = () => {
    const query = postsData.map((post, idx) => {
      if (idx === 0) {
        return `?id=${post.userId}`;
      }

      return `&id=${post.userId}`;
    });

    return query?.join("") || "";
  };

  const { data: usersData } = await request({
    url: `/users${getQuery()}`,
  });

  if (!usersData?.length) {
    return res.status(404).json({ code: 404, message: "user not found" });
  }

  const posts = postsData.map((post, idx) => {
    const cuurentUser = usersData.find((user) => user.id === post.userId);

    return {
      ...post,

      user: {
        username: cuurentUser.username,
        avatar: cuurentUser.avatar,
      },
    };
  });

  res.status(200).json({ code: 200, posts });
};

export default handler;
