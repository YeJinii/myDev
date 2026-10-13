import { useState } from 'react'

function PostForm({ onAddPost }) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        if (title.trim() === '' || author.trim() === '') {
            setMessage('제목과 작성자를 모두 입력해 주세요.')
            return
        }

        onAddPost({
            id: crypto.randomUUID(),
            title: title.trim(),
            author: author.trim(),
        })

        setTitle('')
        setAuthor('')
        setMessage('게시글을 목록에 추가했습니다.')
    }

    return (
        <section className="post-card">
            <h2>글 작성</h2>

            <form className="signup-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="post-title">제목</label>
                    <input
                        id="post-title"
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value)
                            setMessage('')
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="post-author">작성자</label>
                    <input
                        id="post-author"
                        type="text"
                        placeholder="작성자를 입력하세요"
                        value={author}
                        onChange={(event) => {
                            setAuthor(event.target.value)
                            setMessage('')
                        }}
                    />
                </div>

                <button type="submit" className="primary-button">
                    글 등록
                </button>

                <p className="form-message" role="status">
                    {message}
                </p>
            </form>
        </section>
    )
}

export default PostForm