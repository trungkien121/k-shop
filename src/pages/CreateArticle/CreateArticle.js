import classNames from 'classnames/bind';
import React, { useState } from 'react';
import RichTextEditor from '@/component/RichTextEditor';

import styles from './CreateArticle.module.scss';

const cx = classNames.bind(styles);
const CreateArticle = () => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Gửi content đến backend
        console.log('Nội dung:', content);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Tạo Bài Viết</h1>
            <RichTextEditor onChange={setContent} />
            <button type="submit">Lưu Bài Viết</button>
        </form>
    );
};

export default CreateArticle;
