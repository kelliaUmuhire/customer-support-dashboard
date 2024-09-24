import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Inquiry } from "../util/api";

const TOKEN = import.meta.env.VITE_TOKEN;

const useInquiries = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Inquiry[]>([]);
  const [error, setError] = useState<unknown>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<Inquiry[]>(
        "https://hastebin.com/raw/eyowabidus",
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data, error, setData };
};

export default useInquiries;
