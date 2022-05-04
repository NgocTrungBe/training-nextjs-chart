import React from 'react';
import { CloseIcon,SideBarItem, SideBarMenu, SidebarWrapper,GridIcon ,AnchorIcon,NotificationIcon,TransferIcon, SidebarUser, SidebarAvatar, SidebarUserText, SidebarUserName, SidebarUserVerify, DropdownIcon} from '@src/assets/styled/Sidebar';


interface Props {
    isOpenMobileMenu:boolean;
    handleMenuIconClick:(status:boolean) => void;
}
const Sidebar: React.FC<Props> = ({isOpenMobileMenu,handleMenuIconClick}) => {
    return(
    <SidebarWrapper className={isOpenMobileMenu ? 'open' : ''}>
        <CloseIcon onClick={() =>handleMenuIconClick(false)}></CloseIcon>
        <SideBarMenu>
            <SideBarItem>
                <GridIcon></GridIcon>
                Overview
            </SideBarItem>
            <SideBarItem className="active">
                <AnchorIcon></AnchorIcon>
                Explore
            </SideBarItem>
            <SideBarItem>
                <NotificationIcon></NotificationIcon>
                Notification
            </SideBarItem>
            <SideBarItem>
                <TransferIcon></TransferIcon>
                Transfer
            </SideBarItem>
        </SideBarMenu>
        <SidebarUser>
            <SidebarAvatar></SidebarAvatar>
            <SidebarUserText>
                <SidebarUserName>Kyle Steward</SidebarUserName>
                <SidebarUserVerify>Verify</SidebarUserVerify>
            </SidebarUserText>
            <DropdownIcon></DropdownIcon>
        </SidebarUser>
    </SidebarWrapper>
  )
}



export default Sidebar;