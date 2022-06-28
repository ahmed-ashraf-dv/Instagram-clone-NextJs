import request from "../../../utils/request";

const handler = async (req, res) => {
  const { postId, token } = req.query;

  if (req.method !== "DELETE") {
    return res.status(200).json({
      code: 201,
      message: "You do not have the access",
    });
  }

  const { data: postData } = await request(`/posts?id=${postId}`);
  const { data: userData } = await request(`/users?token=${token}`);

  if (!userData?.length) {
    return res
      .status(200)
      .json({ code: 201, message: "You do not have the access" });
  }

  const userId = userData[0].id;

  if (postData?.[0]?.userId !== userId) {
    return res
      .status(200)
      .json({ code: 201, message: "You do not have the access" });
  }

  await request.delete(`/posts/${postId}`);

  res.status(200).json({ code: 200 });
};

export default handler;
