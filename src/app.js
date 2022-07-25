import React, { useEffect } from 'react'
import './app.scss'
import MyStorage from './common/MyStorage'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css';
import { Outlet,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from './pages/store/reducers/userInfoSlice';
import global from './common/global';

const { Header, Footer, Sider, Content } = Layout
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}
const items = [
    // getItem('用户管理', 'user-manage','', [
    //     getItem(<Link to="/usermanage/userlist">用户列表</Link>, 'user-list'),
    // ]),
    // getItem('Navigation Two', 'sub2', '', [
    //     getItem('Option 5', '5'),
    //     getItem('Option 6', '6'),
    //     getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    // ]),
    // getItem('Navigation Three', 'sub4', '', [
    //     getItem('Option 9', '9'),
    //     getItem('Option 10', '10'),
    //     getItem('Option 11', '11'),
    //     getItem('Option 12', '12'),
    // ]),
];
export default function App() {
    const menus = useSelector(state => state.menus)
    MyStorage.setItem("Authorization","validToken")
    const getMenus = (menus) => {
        console.log(menus)
        return menus.map(item => {
            // path code name children
           if(item.children.length > 0) {
                return getItem(item.name, item.code, null, getMenus(item.children))
           }else {
                return getItem(<Link to={item.path}>{item.name}</Link>, item.code)
           }
        })
    }
    return <>
        <Layout style={{
            position: 'relative',
            height: "100%"
        }}>
            <Header style={{
                color: 'white'
            }}>
                { global.projectName }
            </Header>
            <Layout>
                <Sider>
                <Menu
                    style={{
                        // // width: 256,
                        // color: 'black'
                    }}
                    defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={getMenus(menus)}
                />
                </Sider>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
            <Footer style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
                footer
            </Footer>
        </Layout>
    </>
}