import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import styled from 'styled-components';

import FontAwesome from 'react-fontawesome';
import logo from '../logo.png';



export class Header extends Component {
    render() {
        const renderLogin = () => {
            if (true) {
                return (
                    <LoginLink href="#">
                        Sign In
                    </LoginLink>
                )
            }
            return (
                <LoginLink href="#">
                    Sign In
                </LoginLink>
            )
        }
        const renderAva = () => {
            if (true) {
                return (
                    <Ava>
                        <FontAwesome name='user' size='2x' spin style={{ color: '#000000' }}/>
                        <Notif>
                            1
                        </Notif>
                    </Ava>
                )
            }
        }
        return (
            <Wrap>
                <Container>
                    <Logo>
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </Logo>
                    <Login>
                        {renderLogin()}
                        {renderAva()}
                    </Login>
                </Container>
            </Wrap>
        )
    }
}

export default Header;

const Wrap  = styled.div`
    background: #f5f5f5;
    border-bottom: 1px solid #979797;
    margin-bottom: 20px;
`;

const Container  = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 3%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Logo  = styled.div`
    width: 179px;
    height: 82px;
    img {
        width: 100%;
        height: auto;
    }
    a {
        display: block;
    }
`;

const Login = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LoginLink = styled.a`
    display: block;
    color: #4a4a4a;
    text-decoration: none;
    &:hover {
        color: #000;
    }
`;

const Ava = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #9d9d9d;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    position: relative;
`;

const Notif = styled.div`
    position: absolute;
    top: -4px;
    left: -4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #d8d8d8;
    border: 1px solid #9d9d9d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
`;
