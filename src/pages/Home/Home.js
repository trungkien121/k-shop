import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import ProductItem from '@/component/ProductItem';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <h2>Sang Thu Ưu Đãi -44%</h2>
            <span>Xem thêm</span>
            <div className={cx('product-list')}>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
            </div>
        </div>
    );
}

export default Home;
