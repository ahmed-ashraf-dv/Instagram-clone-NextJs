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

const getRandomAvatar = () => {
  const NUM_OF_DEFAULT_AVATARS = 5;

  const avatarName = "default_avatar";
  const randomNum = Math.ceil(Math.random() * NUM_OF_DEFAULT_AVATARS);

  return `/avatars/${avatarName + randomNum}.webp`;
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

  const user = {
    id: null,
    username,
    name,
    password,
    token,
    email,
    bio: "",
    avatar: getRandomAvatar(),
  };

  await request.post("/users", user);

  res.status(200).json({ code: 200 });
};

export default handler;
