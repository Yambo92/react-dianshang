import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader' //热加载可保留组件当前状态，切避免刷新页面



import App from './App'
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>
   ,
    document.getElementById('root')
)

if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept();
}