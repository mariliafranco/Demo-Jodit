import React, { Fragment } from "react";
import { Row, Col } from "antd";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <Row className="Navbar" span={24}>
          <Col>
          <h1>Jodit Custom DemoEditor </h1>
          </Col>
          <Col className="author">by Marília Franco</Col>
      </Row>
      <Row className="Header" span={24}>
        <Col className="header-title" span={24}>
            <textarea className="input-name">Digite o título do seu arquivo 😀</textarea>
            <p>  Sobre o que você vai escrever? </p>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Header;
