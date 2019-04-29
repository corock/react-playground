import React from "react";
import styles from "./AskShareModal.scss";
import classNames from "classnames/bind";
import ModalWrapper from "components/modal/ModalWrapper";
import Button from "components/common/Button";
import OutlinedTextField from "components/material/OutlinedTextField";
import Selects from 'components/common/Selects';

const cx = classNames.bind(styles);

const AskShareModal = ({ visible, onConfirm, onCancel }) => (
    <ModalWrapper visible={visible}>
        <div className={cx("question")}>
            <div className={cx("title")}>`인사팀` 공유 폴더</div>
            <div className={cx("description")}>
                해당 폴더로 초대할 인원을 선택해주세요.
            </div>
            <br /><br />
            <h3>이름</h3>
            <OutlinedTextField />
            <br />
            <h3>권한</h3>
            <Selects />
            <br />
            <br />
        </div>

        <div className={cx("options")}>
            <Button theme="gray" onClick={onCancel}>
                취소
            </Button>
            <Button onClick={onConfirm}>초대</Button>
        </div>
    </ModalWrapper>
);

export default AskShareModal;
