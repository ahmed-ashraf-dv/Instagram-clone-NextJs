import request from "../../utils/request";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ code: 400, message: "this Page not found" });
  }

  const { token, targetUsername, type } = req.body;

  // Get current user data
  const getClientData = await request({
    url: `/users?token=${token}`,
  });
  const cuurentUser = getClientData.data?.[0];

  // Get target user data
  const getTargetUserData = await request({
    url: `/users?username=${targetUsername}`,
  });
  const targetUser = getTargetUserData.data?.[0];

  if (!cuurentUser || !targetUser) {
    return res.status(400).json({ code: 400, message: "this Page not found" });
  }

  const { id: clientUserId } = cuurentUser;
  const { id: targetUserId } = targetUser;

  if (type === "unfollow") {
    const { data } = await request(
      `/follow?fromUserId=${clientUserId}&toUserId=${targetUserId}`
    );

    const { id: followId } = data?.[0];

    await request.delete(`/follow/${followId}`);

    return res.status(200).json({ code: 200 });
  }

  const follow = {
    id: null,
    fromUserId: clientUserId,
    toUserId: targetUserId,
  };

  await request.post("/follow", follow);

  res.status(200).json({ code: 200 });
};

export default handler;
