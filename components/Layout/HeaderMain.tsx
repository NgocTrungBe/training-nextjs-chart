import React from "react";
import Router, { useRouter } from 'next/router'
import ButtonPrimary from "@src/components/Common/Button/Index";

const listButton = [
  { text: 'all members', path: '/' },
  { text: 'onboard', path: '/onboard' },
  { text: 'offboard', path: '/offboard' }
]
const HeaderMain: React.FC = () => {
  const router = useRouter()
  const checkIsActive = (path: string) => {
    return router.pathname === path
  }
  return <div className="main-header">
    <div className="flex mb--6">
      {
        listButton.map((item, index) => {
          return <ButtonPrimary
            key={index}
            text={item.text}
            css="mr--6"
            isActive={checkIsActive(item.path)}
            onClick={() => Router.push(item.path)}
          />;
        })
      }
    </div>
    <div className="main-filter">
      <ButtonPrimary
        text={"Thêm thành viên"}
        isActive
        isAddNew />
    </div>
    <div className="columns main-row-td">
      <div className="column is-1 center-f">
        sID
      </div>
      <div className="column is-3">
        HỌ VÀ TÊN
      </div>
      <div className="column is-2">
        ONBOARD
      </div>
      <div className="column is-2">
        EMAIL
      </div>
      <div className="column is-2">
        ACCOUNTS
      </div>
      <div className="column is-2">
        STATUS
      </div>
    </div>
  </div>
}
export default HeaderMain;
