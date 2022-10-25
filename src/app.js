import React, { useEffect } from 'react'
import './app.scss'
import MyStorage from './common/MyStorage'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css';
import { Outlet,Link,useNavigate } from 'react-router-dom';
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

export default function App() {
    const navigate = useNavigate()
    useEffect(() => {
        let token = MyStorage.getItem("Authorization")
        if(token == null || !token ) {
            navigate("login")
            return
        }
    },[])
    const menus = useSelector(state => state.menus)
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
                <Content style={{padding: 20}}>
                    <Outlet />
                </Content>
            </Layout>
            {/* <Footer style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
                footer
            </Footer> */}
        </Layout>
    </>
}