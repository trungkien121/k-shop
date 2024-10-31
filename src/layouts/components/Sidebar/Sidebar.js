import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

import slideshowImage1 from '@/assets/images/slideshow_1_master.webp';
import slideshowImage2 from '@/assets/images/slideshow_2.webp';
import slideshowImage3 from '@/assets/images/slideshow_3.webp';
import slideshowImage4 from '@/assets/images/slideshow_4.jpg';
import imgaView1 from '@/assets/images/imgaView1.webp';
import imgaView2 from '@/assets/images/imgaView2.webp';
import imgaView3 from '@/assets/images/imgaView3.webp';
import imgaView4 from '@/assets/images/imgaView4.webp';
import imgaView5 from '@/assets/images/imgaView5.webp';

const images = [slideshowImage1, slideshowImage2, slideshowImage3, slideshowImage4];

const cx = classNames.bind(styles);
function Sidebar() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slideshow-container')}>
                <button className={cx('prev')} onClick={handlePrev}>
                    ❮
                </button>
                <div className={cx('slideshow-slide')}>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className={cx('slideshow-image')} />
                </div>
                <button className={cx('next')} onClick={handleNext}>
                    ❯
                </button>
            </div>
            <div className={cx('view-nav')}>
                <h1 className={cx('title')}>Không Gian Sống Với MOHO</h1>
                <div className={cx('table-nav')}>
                    <div className={cx('col1')}>
                        <div className={cx('col1-row1')}>
                            <img src={imgaView1} alt="" />
                        </div>
                        <div>
                            <img src={imgaView2} alt="" />
                        </div>
                    </div>
                    <div className={cx('col2')}>
                        <div className={cx('col2-row1')}>
                            <img src={imgaView3} alt="" />
                        </div>
                        <div className={cx('col2-row2')}>
                            <div className={cx('col221')}>
                                <img src={imgaView4} alt="" />
                            </div>
                            <div>
                                <img src={imgaView5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
