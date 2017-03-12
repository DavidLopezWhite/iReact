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
                        <FontAwesome name='rocket' size='2x' spin style={{ color: '#000000' }}/>
                    </Ava>
                )
            }
        }
        return (
            <Wrap>
                <Logo>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </Logo>
                <Login>
                    {renderLogin()}
                    {renderAva()}
                </Login>
            </Wrap>
        )
    }
}

export default Header;

const WrapAll  = styled.div`
    width:100%;
    background: #f5f5f5;
    border-bottom: 1px solid #979797;
`;

const Wrap  = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 10px 3%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #f5f5f5;
    border-bottom: 1px solid #979797;
`;

const Logo  = styled.div`
    width: 171px;
    height: 50px;
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
`;

const Ava = styled.div`
    display: flex;
    flex-direction: row;
`;
