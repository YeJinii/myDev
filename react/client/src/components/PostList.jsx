function PostList({ posts }) {
    return (
        <section className="post-card">
            <h2>게시글 목록</h2>

            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.id} className="post-item">
                        <h3>{post.title}</h3>
                        <p>작성자: {post.author}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default PostList