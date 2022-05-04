import styled from 'styled-components';
import { FiGrid,FiAnchor,FiAperture,FiGitPullRequest,FiChevronDown,FiX} from "react-icons/fi";


export const SidebarWrapper = styled.div`
    position: fixed;
    left: 0;
    top:0;
    z-index: 999;
    width: 250px;
    height:100%;
    padding: 30px 30px 20px 30px;
    background: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    transition: 0.3s;
    @media only screen and (max-width: 1024px) {
        width: 200px;
        padding: 15px 15px 15px 15px;
    }
    @media only screen and (max-width: 600px) {
      
        left:-200px;
        &.open{
            display:flex;
            left:0;
        }
    }
`; 
export const SideBarMenu = styled.ul`
    list-style: none;
    margin: 0; 
    transition: 0.3s;
    
`;
export const SideBarItem = styled.li`
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.6rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    padding: 8px 15px;
  
    :hover{
        background: #3CB371;
        color: #fff;
        svg{
           
            color:#fff;
        }
    }
    &.active{
        background:#3CB371;
        color: #fff;
        svg{
            color:#fff;
        }
        
    }
   
    
`;
export const GridIcon = styled(FiGrid)`
    margin-right: 20px;
    font-size: 3rem;
    color:grey;
    
`;
export const AnchorIcon = styled(FiAnchor)`
    margin-right: 20px;
    font-size: 3rem;
    color:grey;
    
`;
export const NotificationIcon = styled(FiAperture)`
    margin-right: 20px;
    font-size: 3rem;
    color:grey;
    
`;
export const TransferIcon = styled(FiGitPullRequest)`
    margin-right: 20px;
    font-size: 3rem;
    color:grey;
    
`;
export const DropdownIcon = styled(FiChevronDown)`
    font-size: 2rem;
    color:#3CB371;
    font-weight: bold;
    margin-left: auto;

    
`;
export const CloseIcon = styled(FiX)`
    font-size: 3rem;
    color:#3CB371;
    font-weight: bold;
    margin-left: auto;
    display:none;
    @media only screen and (max-width: 600px) {
      display:block;
    }

    
`;
export const SidebarUser = styled.div`
    cursor:pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    bottom:0;
    right:0;
    bottom: 0;
    border-radius:30px;
    background:   #96C8A2;
    padding: 5px 10px;
    
`;
export const SidebarAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit:cover;
    background:#fff;
`;
export const SidebarUserText = styled.div`
     margin-left: 10px;
     display: flex;
     flex-direction: column;
    
`;
export const SidebarUserName = styled.p`
     font-size: 1.5rem;
     font-weight: 800;
     margin-bottom: 2px;
`;
export const SidebarUserVerify= styled.p`
     font-size: 1.4rem;
     color: green;
     text-transform: uppercase;
`;


