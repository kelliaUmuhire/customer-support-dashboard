import axios from "axios";
import { Inquiry } from "../util/api";

const TOKEN = import.meta.env.VITE_TOKEN;

export const getInquiries = async () =>
  axios.get<Inquiry[]>("https://hastebin.com/raw/nahuxafigu", {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
