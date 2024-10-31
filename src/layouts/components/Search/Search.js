import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { SearchIcon } from '@/component/Icons';
import { Wrapper } from '@/component/Popper';
import ProductSearchItem from '@/component/ProductSearchItem';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);
function Search() {
    // const inputRef = useRef(null);
    // const [searchValue, setSearchValue] = useState('');
    // const [searchResult, setSearchResult] = useState([]);
    // const [showResult, setShowResult] = useState(false);
    // const [loading, setLoading] = useState(false);

    return (
        <HeadlessTippy
            trigger="click"
            hideOnClick={true}
            offset={[20, 8]}
            delay={[0, 700]}
            interactive
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('Resulft-search')} tabIndex="-1" {...attrs}>
                    <Wrapper unPadding>
                        <div className={cx('item-search')}>
                            <ProductSearchItem />
                            <ProductSearchItem />
                            <ProductSearchItem />
                            <ProductSearchItem />
                            <ProductSearchItem />

                            <div className={cx('search-more')}>
                                <a href="/" className={cx('search-more-btn')}>
                                    Xem thêm
                                </a>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            )}
        >
            <div className={cx('wrapper')}>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm sản phẩm..." />
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
