import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function Menu({ children, data = [], placement_right = false, offset = false }) {
    const placement = placement_right ? 'right-start' : 'bottom-start';
    const numberOffset = offset ? [-13, 5] : [0, 14];

    const renderItem = (item, index) => {
        if (item.data.length !== 0) {
            return (
                <div key={index} className={cx('item-nar')}>
                    <Menu data={item.data} placement_right offset>
                        <span>{item.title}</span>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} className={cx('icon-nar')} />
                        </span>
                    </Menu>
                </div>
            );
        }
        return <div className={cx('item-nar')}>{item.title}</div>;
    };

    return (
        <HeadlessTippy
            hideOnClick={true}
            offset={numberOffset}
            interactive
            placement={placement}
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <div className={cx('menu-item')}>
                        {data.map((item, index) => {
                            return renderItem(item, index);
                        })}
                    </div>
                </div>
            )}
        >
            <div className={cx('children')}>{children}</div>
        </HeadlessTippy>
    );
}

export default Menu;
