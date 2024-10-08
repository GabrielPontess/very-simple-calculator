import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #264653;

    display: flex;
    align-items:center;
    justify-content:center;
`;

export const Content = styled.div`
    background-color: #e9c46a;
    max-width: 300px;
    color: #f2d9dd;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 4px 4px 1px rgba(24, 0, 0, 0.2);
`;

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;