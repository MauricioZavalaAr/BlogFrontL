
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'
import Dashboard from './components/Dashboard';



function App() {
  

  return (
    <Container>
      <Row>
        <Col>
      <h1 className='textcenter'>Our Blog</h1>
        </Col>
      </Row>
       <Dashboard/>
    </Container>
  )
}

export default App
