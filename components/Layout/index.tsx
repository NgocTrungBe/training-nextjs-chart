import React, { useState } from "react";
import withAuthenticate from "@src/components/Hocs/withAuthenticate";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import {Main} from '@src/assets/styled/Home';
interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
   const [isOpenMobileMenu,setIsOpenMobileMenu] = useState<boolean>(false);

   const handleMenuIconClick = (status:boolean):void => {
      setIsOpenMobileMenu(status);
   }
  
  return <div className="container-layout">
    <Sidebar isOpenMobileMenu={isOpenMobileMenu} handleMenuIconClick={handleMenuIconClick}></Sidebar>
    <Navbar handleMenuIconClick={handleMenuIconClick}></Navbar>
    <Main>
      {
        children
      }
    </Main>
    
  </div>;
};

export default withAuthenticate(Layout);
