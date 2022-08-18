import request from "../../../utils/request";

const handler = async (req, res) => {
  const { postId, token } = req.query;

  if (req.method !== "DELETE") {
    return res.status(200).json({
      code: 201,
      message: "You do not have the access",
    });
  }

  const { data } = await request.post(`/del/${postId}`, { token });

  res.status(200).json(data);
};

export default handler;
