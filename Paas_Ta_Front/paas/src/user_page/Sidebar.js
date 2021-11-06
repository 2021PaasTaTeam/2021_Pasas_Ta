import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Sidebar = () => {

  const session = JSON.parse(window.sessionStorage.getItem("data"));
  console.log(session.data.type)

  const MyPage = () => {
    window.location.replace("/Mypage")
  }
  const Cart = () => {
    window.location.replace("/Cart")
  }
  const Shopping_info = () => {
    window.location.replace("/Shopping_info")
  }
  const AddStore = () => {
    window.location.replace("/AddStore")
  }
  const EditStore = () => {
    window.location.replace("/EditStore")
  }
  const AddItem = () => {
    window.location.replace("/AddItem")
  }
  const EditItem = () => {
    window.location.replace("/EditItem")
  }
  

  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?") == true) {    //확인
      window.sessionStorage.clear();
      window.location.replace("/")
      alert('로그아웃 되었습니다.');
    } else {   //취소
      if (window.location.replace("/Town") === true
      ) {
        window.location.replace("/Gather")
      }
      else {
        window.location.replace("/Town")
      }
    }
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
            <CDBSidebarMenuItem onClick={MyPage} icon="address-card">마이 페이지</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={Cart} icon="heart">장바구니</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={Shopping_info} icon="money-check-alt">주문 정보</CDBSidebarMenuItem>
            <div>
              {
                // 가게 등록으로 if문
                session.data.type === 'SELLER'
                  ? <CDBSidebarMenuItem onClick={EditStore} icon="home">가게 수정 하기</CDBSidebarMenuItem>
                  : <CDBSidebarMenuItem onClick={AddStore} icon="home">가게 등록 하기</CDBSidebarMenuItem>
              }
            </div>
            {
              session.data.type === 'SELLER' ? 
                <CDBSidebarMenuItem onClick={AddItem} icon="archive">상품 등록 하기</CDBSidebarMenuItem>
                : <></>
            }
            {
              session.data.type === 'SELLER' ? 
                <CDBSidebarMenuItem onClick={EditItem} icon="archive">상품 수정 하기</CDBSidebarMenuItem>
                : <></>
            }

          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarMenuItem onClick={logout} style={{ color: 'white' }} icon="window-close" >로그아웃</CDBSidebarMenuItem>
        <CDBSidebarFooter style={{ textAlign: 'center' }} >
          <div
            style={{
              padding: '40px 10px',
            }}
          >
            © Team : 우리함께
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;