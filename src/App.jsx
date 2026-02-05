import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <div className="main-bg"></div>

        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt=""/>
                    <h4>상품명</h4>
                    <p>상품 설명</p>
                </div>
                <div className="col-md-4">
                    <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt=""/>
                    <h4>상품명</h4>
                    <p>상품 설명</p>
                </div>
                <div className="col-md-4">
                    <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt=""/>
                    <h4>상품명</h4>
                    <p>상품 설명</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
