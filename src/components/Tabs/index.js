import styled, { css } from 'styled-components';
import { shade } from 'polished'
import { Tab as TabsTitle, Tabs as TabsContainer, TabList as TabListContainer, TabPanel as TabPanelContainer } from 'react-tabs';

export const Tab = styled(TabsTitle)`
    background-color: ${props => props.theme.colors.primary};
    height: 40px;
    width: 160px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    cursor: pointer;
    font-weight: bold;

    ${props => props.theme && css`
        &:hover{
            background-color: ${shade(0.5, props.theme.colors.primary)};
            transform: translateY(-4px);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border: none;
            outline: none;
        }
    `}

    & + li{
        margin-left: 20px;
    }
`;
export const Tabs = styled(TabsContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .react-tabs__tab--selected{
        ${props => props.theme && css`
            background-color: ${shade(0.6, props.theme.colors.primary)};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        `}
    }
`;
export const TabList = styled(TabListContainer)`
    display: flex;
`;
export const TabPanel = styled(TabPanelContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    width: 60%;
`;
