import request from "../../../utils/request";

const handler = async (req, res) => {
  const { username, amount, num } = req.query;

  const { data: curentUser } = await request(`/users?username=${username}`);

  if (!curentUser?.length) {
    return res.status(200).json({ code: 200, users: [] });
  }

  const userId = curentUser[0].id;

  // get Followers
  const { data: followersData } = await request(
    `/follow?toUserId=${userId}&_limit=${amount}&_page=${num}&_sort=id&_order=desc`
  );

  if (!followersData?.length) {
    return res.status(200).json({ code: 200, users: [] });
  }

  // Create Query To Get Followes Data
  const getQuery = () => {
    const query = followersData.map((user, idx) => {
      if (idx === 0) {
        return `?id=${user.fromUserId}`;
      }

      return `&id=${user.fromUserId}`;
    });

    return query?.join("") || "";
  };

  // Get Users data
  const { data: usersData } = await request(`/users${getQuery()}`);

  const users = usersData.map((user) => ({
    username: user.username,
    avatar: user.avatar,
    bio: user.bio,
  }));

  res.status(200).json({ code: 200, users: users || [] });
};

export default handler;
