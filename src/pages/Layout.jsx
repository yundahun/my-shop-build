import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";


function Layout() {
  const navigte = useNavigate();

  return (
    <>
      {/* 헤더 영역: 상단 내비게이션 바 */}
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#" onClick={() => navigte('/')}>인봉상점</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigte('/')}>홈</Nav.Link>
              <Nav.Link onClick={() => navigte('/cart')}>장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>


      {/* 자식 컴포넌트가 렌더링 될 위치 */}
      <Outlet />


      <footer>
        <p className="py-5 mb-0 bg-dark text-white">
          &copy; KIB InBong Kim. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;