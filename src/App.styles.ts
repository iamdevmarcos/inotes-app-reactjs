import styled from 'styled-components';

export const Container = styled.div`
    background-color:#0000FF;
    min-height:100vh;
    box-sizing:border-box;

    .loading {
        text-align:center;
        color:#FFF;
        font-size:20px;
        font-weight:bold;
        padding-top:50px;
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
    color:#FFF;
    text-align:center;
    border-bottom: 1px solid #CCC;
    padding-bottom:20px;
`;