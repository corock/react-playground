import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import ButtonPage from '../../modal/MakeFolderModal/MakeFolderModal';
import Header from 'components/common/Header';

const cx = classNames.bind(styles);

const PageTemplate = () => (
    <div className={cx('page-template')}>
        <Header />
        <ButtonPage />
    </div>
);

export default PageTemplate;