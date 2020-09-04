import React, { Fragment } from 'react';
import Header from './common/header/index.js'
import { GlobalStyle } from './style'
import { GlobalIconFont } from './statics/iconfont/iconfont.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/index'
// 异步加载组件
import Detail from './pages/detail/loadable'
import store from './store/index'
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalIconFont />
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route path='/' exact component={() => (<Home />)}></Route>
            <Route path='/login' exact component={() => (<Login />)}></Route>
            <Route path='/write' exact component={() => (<Write />)}></Route>
            {/* 把组件包装成异步组件 */}
            <Route path='/detail/:id' exact component={() => (<Detail />)}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
