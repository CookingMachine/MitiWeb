import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Container, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface Props {
    
}

const Header = ({}: Props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (
        <div className="header">
            <Container>
                <Row className="align-items-center">
                    <Col xs={3}>
                        <Link className="logo" to="/">Make·It·Taste·It</Link>
                    </Col>
                    <Col xs={5}>
                       <Input className="searchInput" type="text" placeholder="Введите название блюда или ингредиента">
                       введите название блюда или ингредиент
                       </Input>
                    </Col>
                    <Col xs={2}>
                        <div className="buttonsAuth">
                            <Link to="#" onClick={toggle}>Вход</Link>
                            <span> / </span>
                            <Link to="#" onClick={toggle}>Регистрация</Link>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <Button color="primary" >Добавить рецепт</Button>
                    </Col>  
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle} charCode="Y">Modal title</ModalHeader>
                        <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
            </Container>
         </div>
    )
}

export default Header;