import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

const PostList = ({ onSelectPost }) => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <div>Loading posts...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} onClick={() => onSelectPost(post.id)}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;