import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);

        if (data.error || data.message) {
          setConversations([]);
          if (data.error) {
            throw new Error(data.error);
          } else {
            throw new Error(data.message);
          }
        } else {
          setConversations(data);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
