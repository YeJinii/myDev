
import { useState } from 'react'

function SignupForm({ onClose }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [message, setMessage] = useState('')

    function handleSignupSubmit(event) {
        event.preventDefault()

        if (username.trim() === '') {
            setMessage('아이디를 입력해 주세요.')
            return
        }

        if (password === '') {
            setMessage('비밀번호를 입력해 주세요.')
            return
        }

        if (passwordConfirm === '') {
            setMessage('비밀번호 확인을 입력해 주세요.')
            return
        }

        if (password !== passwordConfirm) {
            setMessage('비밀번호가 일치하지 않습니다.')
            return
        }


        setMessage(`${username}님의 입력 검사가 완료됐습니다.`)
    }

    return (

        <section className="signup-card">
            <h2>회원가입</h2>

            <form className="signup-form" onSubmit={handleSignupSubmit}>
                {/* id */}
                <div>
                    <label htmlFor="username">아이디</label>
                    <input
                        id="username"
                        type="text"
                        autoComplete="username"
                        placeholder="아이디를 입력하세요"
                        value={username}
                        onChange={(event) => {
                            setUsername(event.target.value)
                            setMessage('')
                        }}
                    />
                </div>

                {/* password */}
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        id="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                            setMessage('')
                        }} />
                </div>

                {/* confirm password */}
                <div>
                    <label htmlFor="passwordConfirm">비밀번호 확인</label>
                    <input
                        id="passwordConfirm"
                        type="password"
                        autoComplete="new-password"
                        placeholder="비밀번호를 다시 입력하세요"
                        value={passwordConfirm}
                        onChange={(event) => {
                            setPasswordConfirm(event.target.value)
                            setMessage('')
                        }}
                    />
                </div>

                <button type="submit" className="primary-button">가입하기</button>

                <button
                    type="button"
                    className="secondary-button"
                    onClick={onClose}>
                    닫기
                </button>

                <p className="form-message" role="status">
                    {message}
                </p>
            </form>
        </section>

    )
}

export default SignupForm