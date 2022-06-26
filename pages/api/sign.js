import request from "../../utils/request";

const generateToken = (num) => {
  // Init result
  let result = "";

  // Push the random chr
  while (result.length < num) {
    const randomChr = Math.random().toString(36).substr(2);

    result += randomChr;
  }

  // Slice result to get same num in argument
  result = result.slice(0, num);

  // return result after gnerate it
  return result;
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ code: 400, message: "this Page not found" });
  }

  const { email, name, username, password } = req.body;

  const { data } = await request({
    url: `/users?username=${username}`,
  });

  if (data.length) {
    return res
      .status(200)
      .json({ code: 400, message: "username is alredy exist" });
  }

  const token = generateToken(16);

  await request.post("/users", {
    id: null,
    username,
    name,
    password,
    token,
    email,
    bio: "",
    avatar: null,
    followers: [],
    following: [],
    posts: [],
  });

  res.status(200).json({ code: 200, token });
};

export default handler;
