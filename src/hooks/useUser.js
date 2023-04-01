import { useState, useEffect } from 'react';

const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      const userData = await response.json();
      setUser(userData);

      const postResponse = await fetch(`https://dummyjson.com/users/${userId}/posts`);
      const postData = await postResponse.json();
      setPosts(postData);
    };

    fetchUser();
  }, [userId]);

  return { user, posts };
};

export default useUser;
