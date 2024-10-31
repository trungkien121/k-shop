import classNames from 'classnames/bind';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ProductCartItem.module.scss';

const cx = classNames.bind(styles);

function ProductCartItem() {
    return (
        <div className={cx('wrapper')}>
            <a href="/" className={cx('content')}>
                <div className={cx('content-img')}>
                    <img
                        src="https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_combo___1__3445468b49484455a4e5f983d4c81f28_small.jpg"
                        alt="image_Product"
                    />
                </div>
                <div className={cx('content-info')}>
                    <div className={cx('content-title')}>Combo Phòng Ăn MOHO HOBRO (4 hoặc 6 ghế)</div>
                    <p>Nâu / Combo 6 Ghế</p>
                    <div className={cx('product-price-and-count')}>
                        <div className={cx('product-count')}>2</div>
                        <p>
                            <b>13,604,500₫</b>&nbsp; &nbsp;
                            <del> 20,930,000₫</del>
                        </p>
                    </div>
                </div>
            </a>
            <div className={cx('x-icon')}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
    );
}

export default ProductCartItem;
