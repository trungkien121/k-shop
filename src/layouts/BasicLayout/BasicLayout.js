import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BasicLayout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);
function BasicLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

BasicLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BasicLayout;
