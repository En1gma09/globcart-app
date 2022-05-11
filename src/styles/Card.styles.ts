import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 170px;
    padding: 3rem 0 2rem;
    border: 1px solid lightgray;
    border-radius: 0.5rem;
    color: black;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PlanTitle = styled.div`
    font-size: 1.25rem;
    font-family: Arial, Helvetica, sans-serif;
    height: 60px;
    margin-left: 0.35rem;
`;

export const PlanCost = styled.div`
    font-size: 1.50rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 4rem;
    margin-left: 0.35rem;
`;

export const FeatureListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.325rem;
`;

export const ActionButton = styled.button`
    flex: 0 0 auto;
    height: 40px;
    padding: 0 2rem;
    margin-left: 0.25rem;
    border: 0;
    border-radius: 20px;
    color: white;
    background: linear-gradient(268.88deg, #7EE0FF 0%, #15AAD9 100%);

    &:hover { background: #29B4E0; font-weight: 700 }
`;