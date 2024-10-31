import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '@/assets/images';
import config from '@/config';
import Cart from '../Cart';
import Login from '../Login';
import Search from '../Search';
import { Menu } from '@/component/Popper';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    console.log(images.logo);

    const listNav = [
        {
            title: 'Sản Phẩm',
            icon: faAngleDown,
            data: [
                {
                    title: 'Bộ Sưu Tập',
                    data: [
                        {
                            title: 'VLINE Collection',
                            data: [],
                        },
                        {
                            title: 'HOBRO Collection',
                            data: [],
                        },
                        {
                            title: 'VIENNA Collection',
                            data: [],
                        },
                        {
                            title: 'NARVIK COLLECTION',
                            data: [],
                        },
                        {
                            title: 'KOSTER Collection',
                            data: [],
                        },
                        {
                            title: 'UBEDA Collection',
                            data: [],
                        },
                        {
                            title: 'MOHO WORKS',
                            data: [],
                        },
                        {
                            title: 'OSLO Collection',
                            data: [],
                        },
                        {
                            title: 'LANGO Collection',
                            data: [],
                        },
                    ],
                },
                {
                    title: 'Phòng Ngủ',
                    data: [
                        {
                            title: 'Tủ Quần Áo',
                            data: [],
                        },
                        {
                            title: 'Tủ Quần Áo',
                            data: [],
                        },
                        {
                            title: 'Tủ Đầu Giường',
                            data: [],
                        },
                        {
                            title: 'Bàn Trang Điểm',
                            data: [],
                        },
                    ],
                },
                {
                    title: 'Phòng Khách',
                    data: [
                        {
                            title: 'Ghế Sofa',
                            data: [],
                        },
                        {
                            title: 'Bàn Sofa – Bàn Cafe – Bàn Trà',
                            data: [],
                        },
                        {
                            title: 'Tủ Kệ Tivi',
                            data: [],
                        },
                        {
                            title: 'Tủ Giày - Tủ Trang Trí',
                            data: [],
                        },
                    ],
                },
                {
                    title: 'Tủ Bếp',
                    data: [],
                },
                {
                    title: 'Phòng Ăn',
                    data: [
                        {
                            title: 'Bàn Ăn',
                            data: [],
                        },
                        {
                            title: 'Ghế Ăn',
                            data: [],
                        },
                        {
                            title: 'Bộ Bàn Ăn',
                            data: [],
                        },
                    ],
                },
                {
                    title: 'Phòng Làm Việc',
                    data: [
                        {
                            title: 'Bàn Làm Việc',
                            data: [],
                        },
                        {
                            title: 'Ghế Văn Phòng',
                            data: [],
                        },
                        {
                            title: 'Tủ & Kệ',
                            data: [],
                        },
                    ],
                },
                {
                    title: 'Nệm',
                    data: [
                        {
                            title: 'Nệm Foam',
                            data: [],
                        },
                        {
                            title: 'Nệm Lò Xo',
                            data: [],
                        },
                        {
                            title: 'Nệm Cao Su',
                            data: [],
                        },
                    ],
                },
            ],
        },
        {
            title: 'Bộ Sưu Tập Bắc Âu',
            icon: faAngleDown,
            data: [
                {
                    title: 'NARVIK COLLECTION',
                    data: [],
                },
                {
                    title: 'UBEDA COLLECTION',
                    data: [],
                },
                {
                    title: 'GRENAA COLLECTION',
                    data: [],
                },
                {
                    title: 'LANGO COLLECTION',
                    data: [],
                },
                {
                    title: 'KOSTER COLLECTION',
                    data: [],
                },
            ],
        },
        {
            title: 'Tủ Bếp',
            icon: faAngleDown,
            data: [
                {
                    title: 'MOHO KITCHEN',
                    data: [],
                },
            ],
        },
        {
            title: 'Khuyễn Mãi',
            icon: faAngleDown,
            data: [
                {
                    title: '[-49%] Ưu Đãi Mùa Thu',
                    data: [],
                },
                {
                    title: 'MOHO Outlet - Hàng thanh lý',
                    data: [
                        {
                            title: 'HỒ CHÍ MINH OUTLET',
                            data: [],
                        },
                        {
                            title: 'HÀ NỘI OUTLET',
                            data: [],
                        },
                    ],
                },
                {
                    title: '[-48%] COMBO SCANDINAVIAN',
                    data: [],
                },
                {
                    title: '[New] Tủ Bếp MOHO 2024',
                    data: [],
                },
            ],
        },
        {
            title: 'Dịch Vụ',
            icon: faAngleDown,
            data: [
                {
                    title: 'Chính Sách Bán Hàng',
                    data: [],
                },
                {
                    title: 'Chính Sách Giao Hàng & Lắp Đặt',
                    data: [],
                },
                {
                    title: 'Chính Sách Đổi Trả',
                    data: [],
                },
                {
                    title: 'Chính Sách Bảo Hành & Bảo Trì',
                    data: [],
                },
                {
                    title: 'Khách Hàng Thân Thiết – MOHOmie',
                    data: [],
                },
                {
                    title: 'Chính Sách Đối Tác Bán Hàng',
                    data: [],
                },
                {
                    title: 'Chính Sách MOHO Home Planner',
                    data: [],
                },
            ],
        },
        {
            title: 'Tin Tức',
            icon: faAngleDown,
            data: [
                {
                    title: 'Media',
                    data: [],
                },
                {
                    title: 'News',
                    data: [],
                },
                {
                    title: 'People',
                    data: [],
                },
                {
                    title: 'Inspiration',
                    data: [],
                },
                {
                    title: 'Tips',
                    data: [],
                },
                {
                    title: 'Kitchen',
                    data: [],
                },
            ],
        },
        {
            title: 'About Us',
        },
        {
            title: 'Showroom',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('topbar')}>
                Nội Thất MOHO miễn phí giao hàng & lắp đặt tại TP.HCM, Hà Nội, Biên Hòa và một số khu vực tại Bình Dương
            </div>
            <div className={cx('inner')}>
                <div className={cx('middle')}>
                    <div className={cx('logo')}>
                        <Link to={config.routes.home}>
                            <img src="https://theme.hstatic.net/200000065946/1001264503/14/logo.png?v=298" alt="Logo" />
                        </Link>
                    </div>

                    <Search />

                    <div className={cx('acction')}>
                        <button className={cx('d3-btn')}>3D HOUSE</button>

                        <Login></Login>

                        <Cart></Cart>

                        <button className={cx('like-btn')}>
                            <img
                                src="https://theme.hstatic.net/200000065946/1001264503/14/favorite2.png?v=303"
                                alt=""
                            />
                        </button>
                    </div>
                </div>

                <div className={cx('menu')}>
                    {listNav.map((nav, index) => {
                        return (
                            <div key={index} className={cx('menu-title')}>
                                <Menu data={nav.data}>
                                    {nav.title}
                                    {nav.icon && <FontAwesomeIcon icon={nav.icon} className={cx('icon-nar')} />}
                                </Menu>
                            </div>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}

export default Header;
