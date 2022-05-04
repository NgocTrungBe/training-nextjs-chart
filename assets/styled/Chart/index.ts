import styled,{css} from 'styled-components';

import { FaCaretUp ,FaCaretDown} from "react-icons/fa";


interface Props {
    up?: boolean;
    down?: boolean;
}
export const ChartWrapper =  styled.div`
    padding: 20px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius:3px;
`;
export const ChartInfo =  styled.div`
    display: flex;
    flex-direction: column;
`;
export const CompanyName =  styled.h2`
    font-size: 1.8rem;
    font-weight: 700;
`;
export const HighPrice =  styled.h3`
    font-size: 2rem;
    font-weight:500;
    margin-top: 10px;
`;
export const ComparePrice =  styled.div<Props>`
    display:flex;
    align-items: center;
    margin-top: 10px;
    font-size: 1.4rem;
    ${({up})=> up && css`
        color: #3CB371; 
    `}
    ${({down})=> down && css`
        color: red; 
    `}
     span{
         font-weight: 500;
         margin-left: 5px;
         color:#333;
     }

`;
export const Filter =  styled.ul`
    display:flex;
    align-items: center;
    margin-top: 10px;
`;
export const FilterItem =  styled.li`
   cursor:pointer;
   padding: 8px;
   margin-right: 10px;
   border-radius:3px;
   transition: 0.2s;
   text-transform: uppercase;
   font-size: 1.2rem;
   font-weight: bold;
   :hover{
    background: #ececec;
    color: #3CB371;  
   }
   &.active{
       background: #ececec;
       color: #3CB371; 
   }
`;
export const UpIcon = styled(FaCaretUp)`
    font-size: 2rem;
    color:grey;
    font-weight:bold;
    color: #3CB371; 
    
`;
export const DownIcon = styled(FaCaretDown)`
    font-size: 2rem;
    color:grey;
    font-weight:bold;
    color:red;
`;