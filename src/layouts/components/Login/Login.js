import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Button from '@/component/Button';
import { UserIcon } from '@/component/Icons';
import { Wrapper as PopperWrapper } from '@/component/Popper';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
function Login() {
    return (
        <HeadlessTippy
            trigger="click"
            hideOnClick={true}
            offset={[12, 8]}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <form>
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('menu-body')}>
                                <h2>Đăng nhập tài khoản</h2>
                                <p>Nhập email và mật khẩu của bạn:</p>
                                <input placeholder="Nhập email hoặc số điện thoại" required />
                                <input type="password" placeholder="Mật khẩu" required />
                                <div>
                                    Website được bảo vệ bởi reCAPTCHA và <a href="/">Chính sách bảo mật</a> và{' '}
                                    <a href="/">Điều khoản dịch vụ</a> của Google.
                                </div>

                                <Button>Đăng Nhập</Button>
                                <p>
                                    Khách hàng mới?
                                    <Link to="/login">Tạo tài khoản</Link>
                                </p>
                                <p>
                                    Quên mật khẩu? <a href="/">Khôi phục mật khẩu</a>
                                </p>
                            </div>
                        </PopperWrapper>
                    </div>
                </form>
            )}
        >
            <div className={cx('login')}>
                <UserIcon className={cx('icon')} />
                <span className={cx('title')}>
                    <span>Đăng nhập / Đăng ký</span>
                    <span>
                        Tài khoản của tôi
                        <FontAwesomeIcon icon={faAngleDown} className={cx('icon')} />
                    </span>
                </span>
            </div>
        </HeadlessTippy>
    );
}

export default Login;
