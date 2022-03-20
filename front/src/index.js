import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import { Layout} from 'antd';
import AuthHeader from "./AuthHeader";

const { Header, Footer, Sider, Content } = Layout;


ReactDOM.render(
  <Layout className="layout">
  <MoralisProvider appId="rhTZZ9cUz7xlX0GxuRCiO0K6eLNFzttG84hDPxl3" serverUrl="https://bduuxapi2gk9.usemoralis.com:2053/server">
      <AuthHeader/>
  </MoralisProvider>,
  </Layout>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
