import classNames from 'classnames/bind';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // CSS cho giao diện

import styles from './RichTextEditor.module.scss';

const cx = classNames.bind(styles);

const RichTextEditor = ({ onChange }) => {
    const [content, setContent] = useState('');

    const handleChange = (value) => {
        setContent(value);
        onChange(value); // Gọi hàm onChange để cập nhật nội dung ở component cha
    };

    // Cấu hình các module của Quill
    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['link', 'image', 'video'], // Thêm tùy chọn chèn ảnh và video
            [{ size: ['small', false, 'large', 'huge'] }], // Thêm tùy chọn kích thước
            ['clean'], // Xóa định dạng
        ],
    };

    const formats = [
        'header',
        'font',
        'list',
        'bullet',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'color',
        'background',
        'align',
        'link',
        'image',
        'video',
        'size', // Thêm định dạng kích thước
    ];

    return (
        <div>
            <ReactQuill
                className={cx('create-content')}
                value={content}
                onChange={handleChange}
                modules={modules}
                formats={formats}
            />
            <h3>Nội dung hiện tại:</h3>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default RichTextEditor;
