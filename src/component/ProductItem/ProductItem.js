import classNames from 'classnames/bind';

import styles from './ProductItem.module.scss';
import { EvaluateIcon } from '../Icons';

const cx = classNames.bind(styles);
function ProductItem() {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('image-product')} href="/">
                <img
                    src="https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_hobro_a_7b1869f24bec470d9e3479f708a470a7_large.jpg"
                    alt="image_product"
                />
            </a>

            <div className={cx('content')}>
                <a className={cx('link-product')} href="/">
                    Giường Ngủ Gỗ Tràm MOHO HOBRO 301
                </a>
                <p className={cx('price-product')}>
                    <span>8,992,500₫</span>
                    <del className={cx('price-product-del')}>11,990,000₫</del>
                </p>
                <div className={cx('evaluate-product')}>
                    <EvaluateIcon />
                    <EvaluateIcon />
                    <EvaluateIcon />
                    <EvaluateIcon />
                    <EvaluateIcon />
                </div>
                <div className={cx('sold-product')}>Đã bán 227</div>
            </div>
        </div>
    );
}

export default ProductItem;
