export const SearchIcon = ({ className, width = '16px', height = '16px' }) => (
    <svg
        className={className}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 27"
        fill="currentColor"
        style={{ width, height, enableBackground: 'new 0 0 24 27' }}
        xmlSpace="preserve"
    >
        <path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z" />
        <rect x="17" y="17" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)" width="4" height="8" />
    </svg>
);

export const UserIcon = ({ className, width = '22px', height = '22px' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="currentColor"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{ enableBackground: 'new 0 0 512 512' }}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
    >
        <path
            d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148
                     C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
                     c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
                     h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
                     c59.551,0,108,48.448,108,108S315.551,256,256,256z"
        ></path>
    </svg>
);

export const CartIcon = ({ className, width = '22px', height = '22px' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="currentColor"
        enable-background="new 0 0 512 512"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            <path d="m472 452c0 11.046-8.954 20-20 20h-20v20c0 11.046-8.954 20-20 20s-20-8.954-20-20v-20h-20c-11.046 0-20-8.954-20-20s8.954-20 20-20h20v-20c0-11.046 8.954-20 20-20s20 8.954 20 20v20h20c11.046 0 20 8.954 20 20zm0-312v192c0 11.046-8.954 20-20 20s-20-8.954-20-20v-172h-40v60c0 11.046-8.954 20-20 20s-20-8.954-20-20v-60h-192v60c0 11.046-8.954 20-20 20s-20-8.954-20-20v-60h-40v312h212c11.046 0 20 8.954 20 20s-8.954 20-20 20h-232c-11.046 0-20-8.954-20-20v-352c0-11.046 8.954-20 20-20h60.946c7.945-67.477 65.477-120 135.054-120s127.109 52.523 135.054 120h60.946c11.046 0 20 8.954 20 20zm-121.341-20c-7.64-45.345-47.176-80-94.659-80s-87.019 34.655-94.659 80z"></path>
        </g>
    </svg>
);

export const NarIcon = () => (
    <svg viewBox="0 0 20 9">
        <path
            d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
            fill="#ffffff"
        ></path>
    </svg>
);

export const EvaluateIcon = ({ className, width = '22px', height = '22px' }) => (
    <svg
        className={className} // Thêm className vào đây
        width={width} // Sử dụng width truyền từ props
        height={height} // Sử dụng height truyền từ props
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        style={{
            width: '1.125em',
            display: 'inline-block',
            fontSize: 'inherit',
            height: '1em',
            verticalAlign: '-0.125em',
            overflow: 'visible',
            color: 'inherit',
        }}
    >
        <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
        />
    </svg>
);
