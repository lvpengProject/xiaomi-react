    // // 入口文件
    import React from "react";
    import App from './App.jsx'
    import '@/assets/css/reset.css';
    import '@/assets/iconfont/iconfont-1/iconfont.css'
    import '@/assets/iconfont/iconfont-2/iconfont.css'
    import '@/assets/iconfont/iconfont-3/iconfont.css'
    import { Provider } from "react-redux";
    import store from './store';
    import ReactDOM from 'react-dom'
    //
    // const container = document.getElementById('root');
    // const root = createRoot(container);
    //
    // root.render(
    //     <Provider store={store}>
    //         <App/>
    //     </Provider>
    // )

    ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        </Provider>,
    document.getElementById('root')
    );
