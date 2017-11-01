import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import logo from '../assets/image/la-fabrica.svg';

const App = () => {
  return (
    <div className="lf-wrapper">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 1 }}>
            <div className="lf-box">
              <div className="lf-logo mt-5 mb-4 text-center">
                <img src={ logo } />
              </div>
              <div className="lf-title mb-5 text-center">
                <h1 className="h1">Próximamente...</h1>
              </div>
              <div className="lf-info mb-5 text-center">
                <a href="http://lafabricaanimationstudios.com/lafabrica-cursosytalleres.pdf" className="btn btn-outline-dark" target="_blank">
                  <FontAwesome
                  name='download'
                  className="mr-2"
                />Información sobre Cursos y Talleres</a>
              </div>
              <div className="lf-social mb-5 text-center">
                <ul className="list-unstyled">
                  <li>
                    <a className="btn btn-primary btn-lg mb-2" href="https://api.whatsapp.com/send?phone=34625791862" target="_blank">
                      <FontAwesome
                        name='whatsapp'
                        className="mr-2"
                      />WhatsApp
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-primary btn-lg mb-2" href="https://www.facebook.com/lafabricaanimationstudios/" target="_blank">
                      <FontAwesome
                        name='facebook'
                        className="mr-2"
                      />Facebook
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-primary btn-lg mb-2" href="mailto:info@lafabricaanimationstudios.com" target="_blank">
                      <FontAwesome
                        name='envelope'
                        className="mr-2"
                      />Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
