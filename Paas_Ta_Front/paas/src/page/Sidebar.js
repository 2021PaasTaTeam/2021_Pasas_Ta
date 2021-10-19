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

  const session = JSON.parse(window.sessionStorage.getItem("data"));
  console.log(session.data.type)

  const onClick = () => {
    window.sessionStorage.removeItem(session.data);
    alert('로그아웃 되었습니다.');
  }

  return (
    <div
      style={{ display: 'flex', height: '95vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            {session.data.name + '님 반갑습니다'}
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Mypage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">마이 페이지</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Cart" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="heart">장바구니</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Shopping_info" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file">구매 정보</CDBSidebarMenuItem>
            </NavLink>
            <div>
            {
              // 가게 등록으로 if문
              session.data.type === 'SELLER'
                ? <NavLink exact to="/EditStore" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="home">가게 수정 하기</CDBSidebarMenuItem>
                </NavLink>
                : <NavLink exact to="/AddStore" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="home">가게 등록 하기</CDBSidebarMenuItem>
                </NavLink>
            }
            </div>
            {
              session.data.type === 'SELLER' ? <NavLink exact to="/AddItem" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="archive">상품 등록 하기</CDBSidebarMenuItem>
            </NavLink> 
              : <></>
            }
                        {
              session.data.type === 'SELLER' ? <NavLink exact to="/EditItem" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="archive">상품 수정 하기</CDBSidebarMenuItem>
            </NavLink> 
              : <></>
            }
            {/* {
              // 상품 등록으로 if문
              session.data.type === 'SELLER'
                ? <NavLink exact to="/AddItem" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="home">상품 등록 하기</CDBSidebarMenuItem>
                </NavLink>                
                : <NavLink exact to="/EditItem" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="home">상품 수정 하기</CDBSidebarMenuItem>
                </NavLink>
            } */}
            {/* <NavLink exact to="/AddStore" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">가게 등록 하기</CDBSidebarMenuItem>
            </NavLink> */}


          </CDBSidebarMenu>
        </CDBSidebarContent>
        <NavLink exact to="/" activeClassName="activeClicked" onSubmit={onClick} >
              <CDBSidebarMenuItem style={{color:'white'}} icon="window-close" >로그아웃</CDBSidebarMenuItem>
            </NavLink>
        <CDBSidebarFooter style={{ textAlign: 'center' }} >
          <div
            style={{
              padding: '40px 10px',
            }}
          >
            © Team : Gather SKON
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;