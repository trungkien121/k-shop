import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    className,
    leftIcon,
    RightIcon,
    blueBackground = false,
    orangeBackground = false,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        ...passProps,
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
    }

    const classes = cx('wrapper', {
        [className]: className,
        blueBackground,
        orangeBackground,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    RightIcon: PropTypes.node,
    blueBackground: PropTypes.bool,
    orangeBackground: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
