import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import Login from './pages/login/Login';
import { HashRouter, Route, Routes } from "react-router-dom";
import store from './pages/store/store.js'
import { Provider } from 'react-redux';
import routes from './pages/route/routes';
import { saveMenus } from './pages/store/reducers/menuSlice';

const root =  ReactDOM.createRoot(document.getElementById("app"))
// 获取菜单
const menuRoutes = [
    {
        path: '/usermanage',
        code: 'usermanage',
        name: '用户管理',
        children: [
            {
                path: '/usermanage/userlist',
                code: 'usermanage.userlist',
                name: '用户列表',
                children:[]
            }
        ]
    }
]

store.dispatch(saveMenus(menuRoutes))
// 构建路由
const getRoutes = (param) => {
    return param.map(item => {
        let Component = routes[item.code]
        if(item.children.length === 0) {
            return <Route path={item.path} key={item.code} element={<Component/>}></Route>
        }else {
            if(Component){
                return <Route path={item.path} key={item.code} element={<Component/>}>
                    { getRoutes(item.children) }
                </Route>
            }else {
                return <Route path={item.path} key={item.code}>
                    { getRoutes(item.children) }
                </Route>
            }
            
        }
    })
}
// 根组件渲染
const renderFun = () => {
    root.render(
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/login" key={'login'} element={<Login/>}></Route>
                    <Route path="/" element={<App/>}>
                        {
                            getRoutes(menuRoutes)
                        }
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    )
}
renderFun()