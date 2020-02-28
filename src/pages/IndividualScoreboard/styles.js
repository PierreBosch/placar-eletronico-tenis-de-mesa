import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const ScoreContainer = styled.div`
    margin:0 50px;
    display: flex;
    cursor: pointer;
    order:${props => props.order ? 1 : 3};
    flex-direction: column;
    align-items: center;
    width: 500px;

    input {
        width: 100%;
        font-size: 80px;
        color: #fff;
        border: none;
        background: #000;
        text-align: center;
        text-transform: uppercase;
        padding: 10px 0;
        font-family: 'ZCOOL QingKe HuangYou';
    }
`;

export const Score = styled.div`
    border: 1px dashed red;
    width: 500px;
    height: 500px;
    border-radius: 10px 10px 0 0;
    display: flex;
    margin-top: auto;
    align-items: center;
    justify-content: center;
    color: red;
    background: #111;
    font-size: 350px;
    font-family: 'ZCOOL QingKe HuangYou';
    -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Opera and Firefox */
`;

export const ScoreActions = styled.div`
    order: 2;
    align-self: center;

    button {
        min-width: 160px;
        padding:10px 15px;
        border: none;
        font-size: 16px;
        background: #111;
        border: 1px dashed red;
        color: red;
        text-transform: uppercase;
        font-family: 'ZCOOL QingKe HuangYou';
    }

    button + button {
        margin-top: 40px;
    }
`;

export const Serve = styled.div`
    width: 500px;
    height: 90px;
    justify-content: center;
    padding: 10px;  
    display: flex;
    align-items: center;
    background: ${props => props.serve ? '#143c96' : '#000'};

    span {
        display: ${props => props.serve ? 'flex' : 'none'};
        color: #fff;
        font-size: 80px;
        font-weight: 600;
        font-family: 'ZCOOL QingKe HuangYou';
    }
`;