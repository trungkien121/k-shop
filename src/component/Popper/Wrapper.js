import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className, unPadding = false }) {
    const classes = cx('wrapper', {
        [className]: className,
        unPadding,
    });

    return <div className={classes}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    undefined: PropTypes.bool,
};

export default Wrapper;
