import request from "../../utils/request";

const toId = 2;

const handler = async (req, res) => {
  const { data: commentsData } = await request({
    url: `/com?toId=${toId}`,
  });

  const usersId = commentsData.map((comment) => comment.fromId);
  const usersIdWithoutLoops = [...new Set(usersId)];

  const generateQuery = () => {
    return usersIdWithoutLoops.map((id, idx) => {
      if (idx === 0) {
        return `?id=${id}`;
      }

      return `&id=${id}`;
    });
  };
  const query = generateQuery();

  const { data: usersData } = await request({
    url: `/users${query}`,
  });

  const comments = commentsData.map((comment) => {
    const cuurentUser = usersData.find((user) => user.id === comment.fromId);

    return {
      ...comment,
      user: {
        username: cuurentUser.username,
        avatar: cuurentUser.avatar,
      },
    };
  });

  res.status(200).json({ comments });
};

export default handler;
