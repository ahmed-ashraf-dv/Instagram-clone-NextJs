import request from "../../utils/request";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ code: 400, message: "this Page not found" });
  }

  const { token, img, caption } = req.body;

  const user = await request({
    url: `/users?token=${token}`,
  });

  if (!user?.data?.[0])
    return res.status(404).json({ code: 400, message: "unknown error" });

  const { id, username, avatar } = user.data[0];

  const data = {
    id: null,
    userId: id,
    img,
    caption,
    comments: [],
    user: {
      username,
      avatar: avatar || "/default_avatar.webp",
    },
    createdAt: new Date(),
  };

  await request.post("/posts", data);

  res.status(200).json({ code: 200 });
};

export default handler;
