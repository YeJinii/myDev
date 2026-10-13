import { useState } from 'react'
import SignupForm from './components/SignupForm'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import './App.css'

const initialPosts = [
    {
        id: 1,
        title: '첫 번째 게시글입니다',
        author: '홍길동',
    },
    {
        id: 2,
        title: 'React 공부를 시작했어요',
        author: '김리액트',
    },
    {
        id: 3,
        title: '게시판 만들기 도전!',
        author: '이자바',
    },
    {
        id: 4,
        title: '내가 추가한 게시글',
        author: '내 이름',
    },
]

function App() {
    const [showSignup, setShowSignup] = useState(false)
    const [posts, setPosts] = useState(initialPosts)

    function handleAddPost(newPost) {
        setPosts((prevPosts) => [ ...prevPosts , newPost])
    }

    return (
        <main className="app">
            <h1>React 게시판</h1>
            <p>React + Node.js + MariaDB 스터디</p>

            <button onClick={() => setShowSignup(true)}>
                회원가입
            </button>

            {showSignup && (
                <SignupForm onClose={() => setShowSignup(false)} />
            )}

            <PostForm onAddPost={handleAddPost} />
            <PostList posts={posts} />
        </main>
    )
}

export default App