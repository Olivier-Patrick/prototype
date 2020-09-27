import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
// import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

class Header extends Component {

    render() {
        return (
            <Container style={{
                background: this.props.admin.status ?
                'linear-gradient(to left bottom, green, limegreen)' :
                'linear-gradient(to left bottom, darkblue, dodgerblue)'
            }}>

                <LangButton
                    // Fix: Activated lang should have full opacity
                    // style={{ opacity: x === 1 ? .7 : 1 }}
                    onClick={() => { this.props.AR() }}
                >
                    <Icon src="/images/btn_lang_ar.png" />
                </LangButton>
                <LangButton
                    // style={{ opacity: x === 0 ? .7 : 1 }}
                    onClick={() => { this.props.FR() }}
                >
                    <Icon src="/images/btn_lang_fr.png" />
                </LangButton>
                <LangButton
                    disabled={true}
                    style={{ opacity: .3 }}
                    onClick={() => { }}
                >
                    <Icon src="/images/btn_lang_en.png" />
                </LangButton>

                <Gap />

                <Message className="just">
                    {this.props.text}
                </Message>

                <Logo />

            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

const Container = styled.div`
width: inherit;
display: flex;
flex-direction: row;
padding: 5px;
`;

const Message = styled.div`
font-size: 30px;
font-weight: 600;
flex: 1;
display: flex;
color: white;
margin: 5px;
text-align: center;
`;

const LangButton = styled.button`
height: 50px;
width: 50px;
display: flex;
opacity: 0.7;
margin: 10px;
background: none;
border: none;
cursor: pointer;
&:hover {
    opacity: 1;
}
`;

const Icon = styled.img`
    max-width: 30px;
    max-height: 30px;
    border-raduis: 50px;
`;

const Logo = styled.div`
@media (max-width: 767px) {
    height: 40px;
    width: 120px;
    margin: 5px;
}
@media (min-width: 768px) {
    height: 60px;
    width: 180px;
    margin: 5px;
}
background-image: url(/images/logo.png);
background-position: 0 0;
background-size: 100% 100%;
`;

const Gap = styled.div`
@media (max-width: 767px) {
    height: 40px;
    width: 80px;
    margin: 5px;
}
@media (min-width: 768px) {
    height: 60px;
    width: 120px;
    margin: 10px;
}
`;
// background-image: url(https://chrischasedesign.com/cd_files/wp-content/uploads/2017/10/google_logo_2015.png);
// background-image: url(/images/LogoFM6E.png);

