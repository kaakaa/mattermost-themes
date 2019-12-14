import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {chooseLocale} from './i18n/i18n';

ReactDOM.render(
    <IntlProvider
        locale={getLocale()}
        messages={chooseLocale(getLocale())}
    >
        <App/>
    </IntlProvider>, document.getElementById('root'));

function getLocale() {
    switch (window.location.pathname) {
    case '/':
    case '/en':
        return 'en';
    case '/ja':
        return 'ja';
    default:
        return 'en';
    }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
