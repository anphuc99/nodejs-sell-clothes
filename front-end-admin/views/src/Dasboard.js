import React, { Component } from "react";
import AdminLTE, { Sidebar, Content, Row, Col, Box, Button, Infobox2 } from 'adminlte-2-react';
import ChatBox2 from "./Common/ChatBox";
class Dasboard extends Component {
    render() {
        return (
            <Content title="Dasboard" browserTitle="Dasboard" homeRoute="/admin">
                <Row>
                    <Col md={3}>
                        <Infobox2
                            icon="fa-tag"
                            color="green"
                            title="Đơn hàng"
                            text="Có 1 đơn mới"
                        />
                    </Col>
                    <Col md={3}>
                        <Infobox2
                            icon="fa-gift"
                            color="aqua"
                            title="Sản phẩm"
                            text="Tổng 20 sản phẩm"
                        />
                    </Col>
                    <Col md={3}>
                        <Infobox2
                            icon="fa-user"
                            color="yellow"
                            title="Khách hàng"
                            text="Có 1 khách hàng mới"
                        />
                    </Col>
                    <Col md={3}>
                        <Infobox2
                            icon="fa-ban"
                            color="red"
                            title="Đơn bị hủy"
                            text="Tổng 5 đơn bị hủy"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Box title="Thống kê">
                            <ul className="nav nav-tabs">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#!">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Active</a>
                                </li>
                            </ul>
                        </Box>
                    </Col>
                    <Col md={4}>
                        <ChatBox2 />
                    </Col>
                </Row>
            </Content>

        )
    }
}

export default Dasboard