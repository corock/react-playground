import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
// import DeleteFolderModal from 'components/modal/DeleteFolderModal';
import DeleteFolderModalContainer from 'containers/modal/DeleteFolderModalContainer';

const DeleteFolderModalPage = () => {
    return (
        <PageTemplate>
            <DeleteFolderModalContainer />
        </PageTemplate>
    );
};

export default DeleteFolderModalPage;
