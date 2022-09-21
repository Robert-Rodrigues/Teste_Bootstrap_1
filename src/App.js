import './App.css';
import {Navbar,Container,Nav,NavDropdown,Row,Col,Image,Button,Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
      <h1 className='my-1'><strong>Imagem</strong></h1>
      <p><strong>Este é um gerador de imagens aleatórias. Todas as vezes que atualizado, muda de imagem.</strong></p>
      <Row className="px-3 my-4">
        <Col sm={15}></Col>
        <Image src="https://picsum.photos/800/300" fluid
        rounded></Image>
        <Col sm={5}></Col>
        <Button className="my-3 py-2" variant="outline-dark" onClick={refreshPage}>Atualizar</Button>
      </Row>
      <Row>
    <Card className="text-center bg-secondary text-white my-1">
      <Card.Body>Mais exemplos de imagens abaixo: </Card.Body>
    </Card>
    <Row className="my-3 mx-5">
      <Col className="my-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/320/200" fluid rounded/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className="my-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/321/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className="my-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/322/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
      </Row>
    </Container>
      </main>
      <footer class="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">Copyright &copy; Meu WebSite 2022</p>
        </Container>
      </footer>
    </div>
  );
}


export default App;
