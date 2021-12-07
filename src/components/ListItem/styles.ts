import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (`
    display:flex;
    background-color:#EDF2F7;
    padding:10px;
    border-radius:10px;
    margin-bottom:10px;
    align-items:center;

    input {
        width:25px;
        height:25px;
        margin-right:5px;
    }

    label {
        color:#333;
        text-decoration:${done?'line-through':'initial'};
    }

    span {
        width:25px;
        height:25px;
        display:flex;
        align-items:center;
        justify-content: end;
        flex:1;
        margin-right:10px;

        div {
            cursor:pointer;
        }
    }
`));