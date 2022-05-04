import styled,{css} from 'styled-components';
import {FiArrowLeft,FiSearch,FiMenu} from "react-icons/fi";


interface Props{

    ml?: number;
    mr?: number;
}
export const NavbarWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   background: #fff;
   width: calc(100% - 250px);
   margin-left:auto;
   padding: 20px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
   
   @media only screen and (max-width: 1024px) {
    width: calc(100% - 200px);
   }
   @media only screen and (max-width: 600px) {
     width: 100%;  
     flex-direction: column;
   }
   
`;
export const NavbarLeft= styled.div`
   display: flex;
   align-items: center;
  
   
`;
export const TextWrapper= styled.div`
   display: flex;
   align-items: center;
   @media only screen and (max-width: 1024px) {
     display:none;
   }
  
   
`;
export const NavbarRight= styled.div`
   display: flex;
   align-items: center;
   @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
   }
   
`;

export const Name = styled.h2`
   font-size: 1.8rem;
   font-weight: bold;
   margin-left: 15px;
   
`;
export const BackIcon = styled(FiArrowLeft)`
    font-size: 2rem;
    color:#3CB371;
    @media only screen and (max-width: 600px) {
        margin-left: 50px;
    }
    
`;
export const SearchIcon = styled(FiSearch)`
    font-size: 2rem;
    color:grey;
    font-weight:bold;
    
`;
export const MenuIcon = styled(FiMenu)`
    font-size: 2rem;
    color:grey;
    font-weight:bold;
    display:none;
    @media only screen and (max-width: 600px) {
        display:block;
    }
    
`;
export const SearchForm = styled.div`
    position:relative;
    width: 300px;
    background: #ececec;
    padding:10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    @media only screen and (max-width: 1024px) {
        margin-top: 10px;
    }
    @media only screen and (max-width: 1024px) {
        width: 100%;
    }
`;
export const SearchButton = styled.button`
    display: flex;
    cursor: pointer;
    outline:none;
    border:none;
 
    background: transparent;
`;
export const SearchInput = styled.input`
    padding-left: 5px;
    font-size:1.5rem;
    color: #333;
    outline:none;
    border:none;
    width: 90%;
    background: transparent;
`;
export const SearchList = styled.ul`
    margin-top:15px;
    background #fff;
    position:absolute;
    top:100%;
    left:0;
    right:0;
    height:auto;
    max-height: 200px;
    overflow-y:scroll;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 5px;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const SearchListItem = styled.li`
    cursor: pointer;
    font-size:1.5rem;
    color: #333;
    margin-bottom: 10px;
    padding: 10px;
    :hover{
        background:#ececec;
    }
`;
export const Text = styled.div<Props>`
    display: flex;
    flex-direction: column;
    ${({mr}) => mr &&  css`
      margin-right:${mr}px; 
    `
    };
    ${({ml}) => ml &&  css`
    margin-left:${ml}px; 
  `
  };
    
`;
export const Title = styled.p`
    font-size: 1.4rem;
    color:grey;
    font-weight:800;
    text-transform: uppercase;
    
`;
export const Value = styled.p`
    font-size: 1.4rem;
    font-weight:800;
    text-transform: uppercase;
    margin-left:auto;
    
`;