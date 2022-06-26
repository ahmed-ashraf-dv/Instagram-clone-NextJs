import request from "../../utils/request";

const handler = async (req, res) => {
  const { username, token } = req.query;

  // Get His Id, followers, following

  const getId = await request({
    url: `/users?username=${username}`,
  });
  const { id: userId, followers, following } = getId.data[0];

  // get Posts
  const { data: posts } = await request({
    url: `/posts?userId=${userId}`,
  });

  // Get My username
  const getClientData = await request({
    url: `/users?token=${token}`,
  });

  const clientUsername = getClientData.data?.[0].username;

  // Check If Follow him
  const isFollowed = () => {
    const result = followers.filter(
      (follow) => follow?.username === clientUsername
    );

    if (result.length) return true;

    return false;
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
