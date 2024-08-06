import { create } from "zustand";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const useUsers = create((set, get) => ({
  users: [],
  usersOne: null,

  fetchUsers: async () => {
    const response = await axios.get(`${API_URL}/users`);
    set({ users: response.data });
  },

  fetchUsersOne: async ({ id }) => {
    const response = await axios.get(`${API_URL}/users/${id}`);
    set({ usersOne: response.data });
  },

  updateUser: async ({ data, id }) => {
    const response = await axios.put(`${API_URL}/users/${id}`, data);
    set({ usersOne: response.data });
    set({
      users: get().users.map((user) => (user.id === id ? response.data : user)),
    });
    return response;
  },
}));

export default useUsers;
