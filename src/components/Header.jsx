import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                    <i className="fa-solid fa-beat fa-play fa-xs me-3" style={{color:"#ff3d77"}}></i>

                        {' '}
                        Media Player
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header