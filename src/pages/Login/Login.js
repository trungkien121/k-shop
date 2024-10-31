import classNames from 'classnames/bind';

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook để điều hướng

    const handleLogin = async (event) => {
        event.preventDefault(); // Ngăn hành vi gửi biểu mẫu mặc định
        try {
            const response = await axios.post('http://localhost:6868/kshop/login', {
                username: username,
                passwordHash: password,
            });

            const userData = response.data;
            console.log(userData);

            // Xử lý phản hồi từ server
            if (userData.data.passwordHash === password) {
                // alert('Đăng nhập thành công');
                navigate('/home'); // Điều hướng đến trang chính
            } else {
                setError('Đăng nhập thất bại.');
            }
        } catch (error) {
            // Xử lý lỗi
            if (error.response) {
                // Lỗi trả về từ server
                setError(error.response.data.message || 'Có lỗi xảy ra');
            } else if (error.request) {
                // Lỗi khi không nhận được phản hồi từ server
                setError('Không nhận được phản hồi từ server');
            } else {
                // Lỗi trong cấu hình yêu cầu
                setError('Có lỗi xảy ra');
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box')}>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                    <button type="submit">Login</button>
                    <div className={cx('register')}>
                        <p>Bạn chưa có tài khoản?</p>
                        <a href="/login">Register</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
