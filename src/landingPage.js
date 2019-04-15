import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";


export default class LandingPage extends Component {
    state = {}

    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <Layout >
                    <Header title="Title" style={{color: 'white'}}>
                        <Navigation>
                            <a href="/">Link</a>
                            <a href="/Main">Link</a>
                            <a href="/">Link</a>
                            <a href="/">Link</a>
                        </Navigation>
                    </Header>
                    <Drawer title="Logo">
                        <Navigation>
                            <a href="/">Link</a>
                            <a href="/">Link</a>
                            <a href="/">Link</a>
                            <a href="/">Link</a>
                        </Navigation>
                     </Drawer>
                    <Content>
                        <div className="page-content" />
                        
                    </Content>
   
                </Layout>
            </div>
    )}
};