import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";
import AskShareModal from "components/modal/AskShareModal";

class AskShareModalContainer extends Component {
    handleCancel = () => {
        const { BaseActions } = this.props;
        BaseActions.hideModal("share");
    };

    handleConfirm = () => {};

    render() {
        const { visible } = this.props;
        const { handleCancel, handleConfirm } = this;

        return (
            <AskShareModal
            visible={visible}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
            />
        );
    }
}

export default connect(
    state => ({
        visible: state.base.getIn(["modal", "share"])
    }),
    dispatch => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(AskShareModalContainer);
