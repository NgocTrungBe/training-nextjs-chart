import styled from 'styled-components';


export const StatisticWrapper = styled.div`
    margin-top: 20px;
    background:#fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius:3px;
`
export const StatisticTitle = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    border-bottom: 1px solid #ececec;
    padding: 20px;

`
export const StatisticList = styled.ul`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    background: transparent;

`
export const StatisticItem = styled.li`
    text-align: center;
    border-right: 1px solid grey;
    width: calc(100% / 4);
    padding: 0 10px;
    :last-child{
        border:none;
    }
    @media only screen and (max-width: 600px) {
        width: calc(100% / 2);
        margin-top: 15px;
        :last-child{
            border-right: 1px solid grey;
        }
    }
   

`
export const StatisticItemTitle = styled.p`
    font-size: 1.7rem;
    color: grey;
    text-transform: uppercase; 
    font-weight: 500;
    margin-bottom: 5px;
`
export const StatisticItemValue = styled.p`
    font-size: 1.7rem;
    color: black; 
    font-weight: 500;
`