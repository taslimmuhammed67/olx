import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FireBaseContext} from './store/FireBaseContext'
import firebase from './Pages/firebase/config';
import Context from './store/FireBaseContext'
import Post from './store/PostContext';

ReactDOM.render( 
    <FireBaseContext.Provider value={{firebase}}>
<Context><Post>
<App />


</Post>
</Context>
</FireBaseContext.Provider>

, document.getElementById('root'));
