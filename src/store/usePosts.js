import { create } from "zustand";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLOUDINARY_UPLOAD_PRESET = "jsyrtf9g";
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/dfvxqb4my/image/upload`;
const usePosts = create((set, get) => ({
  posts: [],
  postsOne: [],

  fetchPosts: async () => {
    const response = await axios.get(`${API_URL}/posts`);
    set({ posts: response.data });
  },
  fetchPostsOne: async ({ id }) => {
    const response = await axios.get(`${API_URL}/users/${id}/posts`);
    set({ postsOne: response.data });
  },

  addPosts: async ({ data, id }) => {
    const response = await axios.post(`${API_URL}/users/${id}/posts`, data);

    set({ posts: [...get().posts, response.data] });
    set({ postsOne: [...get().postsOne, response.data] });
    return response;
  },

  upImageCloudinary: async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_UPLOAD_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  },

  uploadLikes: async ({ data, id }) => {
    const response = await axios.put(
      `${API_URL}/users/${id}/posts/${data.id}`,
      {
        likes: data.likes,
      }
    );

    set({
      posts: get().posts.map((post) =>
        post.id === response.data.id ? response.data : post
      ),
    });

    return response;
  },
}));

export default usePosts;
