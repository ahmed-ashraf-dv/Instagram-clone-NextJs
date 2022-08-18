import request from "../../utils/request";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ code: 400, message: "this Page not found" });
  }

  const { token, data: newData } = req.body;

  // Check if username is available
  if (newData.username) {
    try {
      const { data } = await request(`/users?username=${newData.username}`);

      if (data?.length) {
        return res
          .status(200)
          .json({ code: 400, message: "username not available" });
      }
    } catch (err) {
      //
      return res.status(200).json({ code: 400, message: err.message });
    }
  }

  // get userId
  const { data: userData } = await request(`/users?token=${token}`);

  if (!userData?.length) {
    return res.status(200).json({ code: 404, message: "user not found" });
  }

  const { id } = userData?.[0];

  await request.patch(`/users/${id}`, newData);

  res.status(200).json({ code: 200 });
};

export default handler;
