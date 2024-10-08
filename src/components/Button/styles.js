import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 0px solid;
    background-color: #e76f51;
    color: #FFFFFF;
    font-size: 24px;
    flex: 1;
    border-radius: 25px;
    
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

    &:hover {
        opacity: 0.7;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
    }

    cursor: pointer;
`;