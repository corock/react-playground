import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ButtonPage, NoteMainPage, ModalTestPage, MakeFolderPage } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ButtonPage} />
                <Route exact path="/note-main" component={NoteMainPage} />
                <Route exact path="/modal" component={ModalTestPage} />
                <Route exact path="/make-folder" component={MakeFolderPage} />
            </Switch>
        </div>        
    );
};

export default App;