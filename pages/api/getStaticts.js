import request from "../../utils/request";

const handler = async (req, res) => {
  const { username, token } = req.query;

  if (!username || !token) {
    return res.status(404).json({ code: 404, Message: "not found" });
  }

  // Get taeget user Id
  const getId = await request({
    url: `/users?username=${username}`,
  });

  if (!getId?.data?.length)
    return res.status(404).json({ code: 404, Message: "not found" });

  const { id: userId } = getId?.data?.[0];

  // get Posts
  const { data: posts } = await request({
    url: `/posts?userId=${userId}`,
  });

  // Get My username & id
  const getClientData = await request({
    url: `/users?token=${token}`,
  });
  const clientUsername = getClientData.data?.[0].username;
  const clientId = getClientData.data?.[0].id;

  // Get Followers
  const { data: followers } = await request({
    url: `/follow?toUserId=${userId}`,
  });

  // Get Following
  const { data: following } = await request({
    url: `/follow?fromUserId=${userId}`,
  });

  // Check If Follow him
  const isFollowed = () => {
    if (clientUsername === username) return false;

    const result = followers.find(
      (follower) => follower.fromUserId === clientId
    );

    return result ? true : false;
  };

  res.status(200).json({
    code: 200,
    posts: posts.length || 0,
    followers: followers.length || 0,
    following: following.length || 0,
    isFollowed: isFollowed(),
  });
};

export default handler;
