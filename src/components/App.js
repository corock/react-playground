import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ButtonPage, NoteMainPage, ModalTestPage, MakeFolderPage, EditorPage, DeleteFolderModalPage, RCSelectPage, ReactSelectPage } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ButtonPage} />
                <Route exact path="/note-main" component={NoteMainPage} />
                <Route exact path="/modal" component={ModalTestPage} />
                <Route exact path="/make-folder" component={MakeFolderPage} />
                <Route exact path="/editor" component={EditorPage} />
                <Route exact path="/delete" component={DeleteFolderModalPage} />
                <Route exact path="/rc-select" component={RCSelectPage} />
                <Route exact path="/react-select" component={ReactSelectPage} />
            </Switch>
        </div>        
    );
};

export default App;