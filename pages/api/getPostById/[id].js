import request from "../../../utils/request";

const handler = async (req, res) => {
  const { id } = req.query;

  const { data: post } = await request({
    url: `/posts?id=${id}`,
  });

  if (!post?.length) {
    return res.status(404).json({ code: 404, message: "post not found" });
  }

  const { userId } = post[0];

  // Get user puplisher
  const { data: userData } = await request({
    url: `/users?id=${userId}`,
  });

  if (!userData?.length) {
    return res.status(404).json({ code: 404, message: "user not found" });
  }

  const { username, avatar } = userData[0];

  const postData = {
    ...post[0],

    user: {
      username,
      avatar,
    },
  };

  res.status(200).json({ code: 200, post: postData || null });
};

export default handler;
