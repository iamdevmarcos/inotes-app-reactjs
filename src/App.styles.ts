import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Work Sans', sans-serif;
    background-color:#FFF;
    color:#2D3748;
    min-height:100vh;
    box-sizing:border-box;

    .loading {
        text-align:center;
        font-size:20px;
        font-weight:bold;
        padding-top:50px;
    }

    .enterStep {
        text-align:center;
        padding-top:50px;
        font-size:20px;
    }
`;

export const Area = styled.div`
    max-width:980px;
    padding:20px;
    margin:auto;
`;

export const Header = styled.h1`
    margin:0;
    padding:0;
    font-weight:800;
    font-size:60px;
    text-align:center;
    border-bottom: 1px solid #CCC;
    padding-bottom:20px;
`;

export const Footer = styled.footer`
    max-width:980px;
    margin:auto;
    text-align:center;
    border-top:1px solid #CCC;
    padding:20px 0;

    a {
        text-decoration:none;
        color:inherit;
    }
`;

export const Key = styled.span`
    font-family: Consolas !important;
    background-color:#EDF2F7;
    border-radius: 5px;
    border-bottom: 3px solid #CCC;
    border-bottom-width:3px;
    font-size: 12px;
    font-weight: bold;
    line-height: normal;
    padding:5px;
    padding-inline: 0.6em;
    white-space: nowrap;
    margin:0px 5px;
    transition: all ease 0.2s;

    &&:hover {
        background-color:#CCC;
        border-bottom-width:1px;
        cursor:pointer;
    }
`;