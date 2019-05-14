import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ButtonPage, NoteMainPage, ModalTestPage, MakeFolderPage, EditorPage, DeleteFolderModalPage } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={DeleteFolderModalPage} />
                <Route exact path="/note-main" component={NoteMainPage} />
                <Route exact path="/modal" component={ModalTestPage} />
                <Route exact path="/make-folder" component={MakeFolderPage} />
                <Route exact path="/editor" component={EditorPage} />
                {/* <Route exact path="/delete" component={DeleteFolderModalPage} /> */}
            </Switch>
        </div>        
    );
};

export default App;