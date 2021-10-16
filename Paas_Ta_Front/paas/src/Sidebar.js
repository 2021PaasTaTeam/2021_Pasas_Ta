import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const session_name = JSON.parse(window.sessionStorage.getItem("email"));  
    
    const onClick = () => {
        window.sessionStorage.removeItem(session_name.email);
        alert('로그아웃 되었습니다.');
    }
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            {session_name.email+'님 반갑습니다'}
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/Mypage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">마이 페이지</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddStore" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="check-square">장바구니</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddStore" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file">구매 정보</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddStore" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">가게 등록 하기</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="window-close" >로그아웃</CDBSidebarMenuItem>
            </NavLink>
        
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};
 
export default Sidebar;