import React from "react";
import './App.css';
import {Button} from 'antd';
import { useMoralis, useWeb3Contract} from "react-moralis";
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
  
const PageComponent = () => { 
    const { authenticate, isAuthenticated, user } = useMoralis();
    const { logout, isAuthenticating } = useMoralis();
    
    if (!isAuthenticated) {
        return (
            <>
                <div style={{textAlign:'right'}}>
                  <Button type="primary" onClick={() => authenticate()}>Log in</Button>
                </div>
            </>
            )
        }
    
    return(
        <>
        <div style={{textAlign:'right'}}>
          <Button type="primary" onClick={() => logout()}>Logout</Button>
        </div>
        </>
    )
    
}

export default PageComponent;