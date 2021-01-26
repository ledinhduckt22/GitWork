import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.section`
    width: 100%;
    background: #3271bf;
    font-size: 0.5em;
    font-family: Tahoma;
    h1 {
        margin-top:25px;
        font-size: 1em;
    }
`
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: ""
        }
    }

    render() {
        return (
            <Header>
                <h1>Hello World</h1>
            </Header>
        )
    }
}