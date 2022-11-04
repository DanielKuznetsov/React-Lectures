import React from 'react';
import Post from './Post.js';

function PostList({posts = []}) {
    return (
        <div>
            {posts.map((post, i) => (
                <React.Fragment key={'post-' + i} >
                    <Post {...post} />
                    <hr />
                </React.Fragment>
            ))}
        </div>
    )
}

export default PostList;