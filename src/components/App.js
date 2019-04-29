import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NoteMainPage, ModalTestPage } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={NoteMainPage} />
                <Route path="/modal" component={ModalTestPage} />
            </Switch>
        </div>        
    );
};

export default App;