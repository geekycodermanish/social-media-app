import axios from "axios";

axios.interceptors.request.use(
  async (config) => {
    const authToken = localStorage.getItem("token");

    config.headers.setAuthorization(authToken, true);
    config.headers.set("ngrok-skip-browser-warning", "69420");
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export const LoginService = async (payload) => {
  return await axios.post("auth/login", payload);
};

export const Registerservice = async (payload) => {
  return await axios.post("auth/register", payload);
};

export const GetAllPosts = async () => {
  return await axios.get("posts");
};

export const AddNewPost = async (payload) => {
  return await axios.post("posts", payload);
};

export const PostLike = async (id) => {
  return await axios.get(`posts/like/${id}`);
};

export const FollowUser = async (id) => {
  return await axios.post(`users/follow/${id}`);
};

export const FollowingList = async (id) => {
  return await axios.get(`users/follow/followerLIst`);
};
