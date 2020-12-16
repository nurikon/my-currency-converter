import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Store from './src/store/Store';

AppRegistry.registerComponent(appName, () => newApp);

const newApp = () => {
    return (
        <Store>
            <App />
        </Store>
    )
}