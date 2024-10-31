import classNames from 'classnames/bind';

import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';

import facebookImg from '@/assets/images/facebook.png';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <div className={cx('banner-item')}>
                    <img src="https://theme.hstatic.net/200000065946/1001264503/14/vice_item_1_thumb.png?v=329" />
                    <h3 className={cx('banner-title')}>Giao Hàng & Lắp Đặt</h3>
                    <p>Miễn Phí</p>
                </div>
                <div className={cx('banner-item')}>
                    <img src="https://theme.hstatic.net/200000065946/1001264503/14/vice_item_2_thumb.png?v=329" />
                    <h3 className={cx('banner-title')}>Đổi Trả 1 - 1</h3>
                    <p>Miễn Phí</p>
                </div>
                <div className={cx('banner-item')}>
                    <img src="https://theme.hstatic.net/200000065946/1001264503/14/vice_item_3_thumb.png?v=329" />
                    <h3 className={cx('banner-title')}>Bảo Hành 2 Năm</h3>
                    <p>Miễn Phí</p>
                </div>
                <div className={cx('banner-item')}>
                    <img src="https://theme.hstatic.net/200000065946/1001264503/14/vice_item_4_thumb.png?v=329" />
                    <h3 className={cx('banner-title')}>Tư Vấn Thiết Kế</h3>
                    <p>Miễn Phí</p>
                </div>
            </div>
            <footer className={cx('footer')}>
                <div className={cx('content')}>
                    <div className={cx('content-item')}>
                        <h4 className={cx('content-title')}>Nội Thất MOHO</h4>
                        <div className={cx('content-info')}>
                            <p>
                                Nội Thất MOHO là thương hiệu đến từ Savimex với gần 40 năm kinh nghiệm trong việc sản
                                xuất và xuất khẩu nội thất đạt chuẩn quốc tế.
                            </p>
                        </div>
                    </div>
                    <div className={cx('content-item')}>
                        <h4 className={cx('content-title')}>Dịch Vụ</h4>
                        <div className={cx('content-info')}>
                            <p>
                                Chính Sách Bán Hàng Chính Sách Giao Hàng & Lắp Đặt Chính Sách Đổi Trả Chính Sách Bảo
                                Hành & Bảo Trì Khách Hàng Thân Thiết – MOHOmie Chính Sách Đối Tác Bán Hàng Chính Sách
                                MOHO Home Planner
                            </p>
                        </div>
                    </div>
                    <div className={cx('content-item')}>
                        <h4 className={cx('content-title')}>Thông tin liên hệ</h4>
                        <div className={cx('content-info')}>
                            <div className={cx('content-info-item')}>
                                <FontAwesomeIcon className={cx('content-info-icon')} icon={faLocationDot} />
                                <p>
                                    Showroom: 162 HT17, P. Hiệp Thành, Q. 12, TP. HCM (Nằm trong khuôn viên công ty
                                    SAVIMEX phía sau bến xe buýt Hiệp Thành) | Hotline: 0971 141 140
                                    <br />
                                    <br />
                                    Experience Store 1: S05.03-S18 phân khu The Rainbow | Vinhomes Grand Park, TP. Thủ
                                    Đức | Hotline: 0931 880 424
                                    <br />
                                    <br />
                                    Experience Store 2: S3.03-Sh15 phân khu Sapphire | Vinhomes Smart City, Hà Nội |
                                    Hotline: 0909 665 728
                                    <br />
                                    <br />
                                    Experience Store 3: S2.09-Sh19 phân khu Sapphire | Vinhomes Ocean Park, Hà Nội |
                                    Hotline: 0938 108 772
                                    <br />
                                    <br />
                                </p>
                            </div>
                            <div className={cx('content-info-item')}>
                                <FontAwesomeIcon className={cx('content-info-icon')} icon={faPhone} />
                                <p>
                                    097 114 1140 (Hotline/Zalo)
                                    <br />
                                    <br />
                                    0902 415 359 (Đội Giao Hàng)
                                    <br />
                                    <br />
                                </p>
                            </div>
                            <div className={cx('content-info-item')}>
                                <FontAwesomeIcon className={cx('content-info-icon')} icon={faMessage} />
                                <p>
                                    cskh@moho.com.vn
                                    <br />
                                    <br />
                                    Công Ty Cổ Phần Hợp Tác Kinh Tế Và Xuất Nhập Khẩu Savimex - STK: 0071001303667 -
                                    Vietcombank CN HCM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-item')}>
                        <h4 className={cx('content-title')}>Fanpage</h4>
                        <div className={cx('content-info')}>
                            <a href="/">
                                <img src={facebookImg} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-nav')}>
                    <div>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className={cx('nav-icon')} icon={faFacebook} />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon style={{ color: 'red' }} className={cx('nav-icon')} icon={faYoutube} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon style={{ color: 'red' }} className={cx('nav-icon')} icon={faInstagram} />
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon style={{ color: 'black' }} className={cx('nav-icon')} icon={faTiktok} />
                        </a>
                    </div>
                    <p>Chỉ đường đến showroom trên Google Maps</p>
                </div>
            </footer>
            <div className={cx('footer-bottom')}>
                <p className={cx('footer-bottom-title')}>Copyright © 2024 Nội Thất MOHO.</p>
            </div>
        </div>
    );
}

export default Footer;
