import classNames from 'classnames/bind';

import styles from './Product.module.scss';
import { EvaluateIcon } from '@/component/Icons';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <a>Trang chủ </a>
                &nbsp;
                <a>/ Tất cả sản phẩm MOHO </a>
                &nbsp;
                <a>/ Combo Basic Phòng Ngủ 4 Món MOHO HOBRO</a>
            </div>

            <div className={cx('content')}>
                <div className={cx('hearder-content')}>
                    <img
                        className={cx('product-image')}
                        src="https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_combo___4__9006c9e805ed4342854cdf54d203ef86_master.jpg"
                        alt="product-image"
                    />
                    <div className={cx('product-info')}>
                        <div className={cx('title')}>
                            <h2>Combo Basic Phòng Ngủ 4 Món MOHO HOBRO</h2>
                            <div className={cx('evaluate-product')}>
                                <EvaluateIcon />
                                <EvaluateIcon />
                                <EvaluateIcon />
                                <EvaluateIcon />
                                <EvaluateIcon />
                            </div>
                        </div>
                        <div className={cx('price')}>
                            <span className={cx('sale-product')}>35%</span>
                            <p className={cx('price-product')}>
                                <span>8,992,500₫</span>
                                <del className={cx('price-product-del')}>11,990,000₫</del>
                            </p>
                        </div>
                        <div className={cx('introduction')}>
                            <strong>Combo 1:</strong> Giường ngủ: Rộng 1710 x Dài 2110 x Cao 900 Tủ đầu giường: Rộng 600
                            x Dài 400 x Cao 500 Tủ quần áo 2 cánh: Rộng 1000 x Dài 600 x Cao 2100 Tủ quần áo ngăn kệ:
                            Rộng 500 x Dài 600 x Cao 900
                            <br />
                            <strong>Combo 2:</strong> Giường ngủ: Rộng 1710 x Dài 2110 x Cao 900 Tủ đầu giường: Rộng 600
                            x Dài 400 x Cao 500 Tủ quần áo 2 cánh: Rộng 1000 x Dài 600 x Cao 2100 Tủ quần áo thanh treo:
                            Rộng 500 x Dài 600 x Cao 900
                            <br />
                            <strong>Combo 3:</strong> Giường ngủ: Rộng 1910 x Dài 2110 x Cao 900 Tủ đầu giường: Rộng 600
                            x Dài 400 x Cao 500 Tủ quần áo 2 cánh: Rộng 1000 x Dài 600 x Cao 2100 Tủ quần áo ngăn kệ:
                            Rộng 500 x Dài 600 x Cao 900
                            <br />
                            <strong>Combo 14</strong> Giường ngủ: Rộng 1910 x Dài 2110 x Cao 900 Tủ đầu giường: Rộng 600
                            x Dài 400 x Cao 500 Tủ quần áo 2 cánh: Rộng 1000 x Dài 600 x Cao 2100 Tủ quần áo thanh treo:
                            Rộng 500 x Dài 600 x Cao 900
                            <br />
                            <strong>Chất liệu chính:</strong> Gỗ tràm, MDF veneer tràm chuẩn CARB P2 (*)
                            <br />
                            (*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an
                            toàn cho sức khỏe.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
