import React from 'react';
import useUser from '../../../hooks/useUser';
import useUsers from '../../../hooks/useUsers';

const Home = () => {
    const users = useUsers();
    const { user, posts } = useUser(1);

    console.log("users",users);
    console.log("user",user);
    console.log("posts",posts);
    return (
        <div className='bg-base-200 lg:px-16'>
            <h1>Home</h1>
        </div>
    );
};

export default Home;