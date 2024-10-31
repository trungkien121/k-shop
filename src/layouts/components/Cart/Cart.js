import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Button from '@/component/Button';
import { CartIcon } from '@/component/Icons';
import Wrapper from '@/component/Popper/Wrapper';
import ProductCartItem from '@/component/ProductCartItem';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);
function Cart() {
    // const renderItems = () => {
    //     return <div></div>;
    // };

    return (
        <div>
            <HeadlessTippy
                trigger="click"
                hideOnClick={true}
                offset={[12, 15]}
                delay={[0, 700]}
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('cart-list')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <div className={cx('cart-body')}>
                                <p className={cx('cart-title')}>Giỏ hàng</p>
                                <div className={cx('list-items')}>
                                    <ProductCartItem />
                                    <ProductCartItem />
                                    <ProductCartItem />
                                </div>
                                <div className={cx('pay')}>
                                    <div className={cx('pay-content')}>
                                        <p>TỔNG TIỀN:</p>
                                        <p className={cx('pay-price')}>42,250,500₫</p>
                                    </div>
                                    <div className={cx('pay-btn')}>
                                        <Button>Xem giỏ hàng</Button>
                                        <Button blueBackground>Thanh toán</Button>
                                    </div>
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('cart')}>
                    <CartIcon className={cx('icon')} />
                    <span className={cx('title')}>Giỏ hàng</span>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Cart;
