import { Content, Box, Row, Col, Button, Inputs } from "adminlte-2-react";
import api from "../api";
import $, { jQuery } from "jquery"
import 'react-trumbowyg/dist/trumbowyg.min.css'
import Trumbowyg from 'react-trumbowyg'
import "trumbowyg/dist/ui/trumbowyg.min.css"
import lib from "../Common/lib"
import picture from "../model/picture";

import React, { Component } from "react";
import { Modal, ModalBody, ModalDialog, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./AddProduct.css"
import products from "../model/products";
import "select2"

const { Select2, Date, DateTime, Text, Select } = Inputs;
class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            images: [],
            avatar: undefined,
            products: new products(),
            ListCategory: []
        }
        this.modalShow = this.modalShow.bind(this)
        this.modalHide = this.modalHide.bind(this)
        this.UploadImg = this.UploadImg.bind(this)
        this.setImg = this.setImg.bind(this)
        this.addImg = this.addImg.bind(this)
        this.submit = this.submit.bind(this)
        // element images to list image
        this.images = (URL, id) => <img src={lib.asset(URL)} style={{ width: "25%" }} onClick={(e) => this.addImg(e, id)} />
        // type add images for the cover photo or for the content
        this.valueTypeCloseImg = {
            coverImg: 0,
            content: 1,
        }
        this.typeCloseImg = this.valueTypeCloseImg.coverImg
        this.product = new products()
    }
    // set Img after upload
    setImg(URL, id) {
        let imgs = [this.images(URL, id)].concat(this.state.images)
        this.setState({
            images: imgs
        })
    }

    UploadImg(e) {
        let { files } = e.target;
        let reader = new FileReader();
        let file = files[0]
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            upload(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        let upload = (base64s) => {
            let base64 = base64s.split(",")[1]
            let fileName = file.name
            $.ajax({
                type: "POST",
                url: api.UploadImg,
                data: { name: fileName, base64: base64 },
                dataType: "json",
                success: (rs) => {
                    if (rs.rs) {
                        this.setImg(rs.pic.URL, rs.pic.id)
                    }
                    else {
                        alert(rs.msg)
                    }
                }
            });
        }
    }

    addImg(e, id) {
        if (this.typeCloseImg == this.valueTypeCloseImg.content) {
            let url = $(e.target).attr("src")
            console.log($("#editor").html() + `<img src="${url}" />`)
            $("#editor").html($("#editor").html() + `<img src="${url}" />`)
            this.modalHide()
        } else if (this.typeCloseImg == this.valueTypeCloseImg.coverImg) {
            let url = $(e.target).attr("src")
            this.product.avatar = id
            this.setState({
                avatar: <img src={url} style={{ width: "100%" }} />
            })
            this.modalHide()
        }

    }

    submit = async () => {
        let rs
        this.product.category_id = $('[name=select2]').val()
        await $.ajax({
            type: "POST",
            url: api.AddProduct,
            data: this.product,
            dataType: "json",
            success: function (res) {
                rs = res
            }
        });
        if (rs.rs) {
            this.setState({
                products: new products()
            })
        }

    }

    render() {
        return (
            <>
                <Content title="Thêm sản phẩm" browserTitle="Thêm sản phẩm" homeRoute="/admin">
                    <Row>
                        <Col md={9}>
                            <Box closable collapsable header={"Thông tin"}>
                                <Row>
                                    <Text label="Tên sản phẩm" placeholder="Tên sản phẩm" onChange={(e) => { this.product.name = e.target.value }} value={this.state.products.name} />
                                </Row>
                                <Row>
                                    {/* <Select2 options={this.state.ListCategory}
                                        label="Loại sản phẩm"
                                        onChange={(e) => { console.log(e) }}
                                        defaultValue={this.state.products.category_id}
                                    /> */}
                                    <Select options={this.state.ListCategory} name="select2" label="Loại sản phẩm" />
                                </Row>
                                <Row>
                                    <Text label="Link" placeholder="Đường dẫn" onChange={(e) => { this.product.link = e.target.value }} value={this.state.products.link} />
                                </Row>

                                <Row>
                                    <Text type="number" placeholder="Giá bán" onChange={(e) => { this.product.price = e.target.value }} label="Giái bán" value={this.state.products.price} />
                                </Row>
                                <Row>
                                    <Text type="number" placeholder="Giá khuyến mãi" onChange={(e) => { this.product.promotion = e.target.value }} label="Giá khuyến mãi" value={this.state.products.promotion} />
                                </Row>

                                <Row>
                                    <Text inputType="textarea" label="Tóm tắt" rows={5} onChange={this.product.summary} value={this.state.products.summary} />
                                </Row>
                            </Box>
                        </Col>
                        <Col md={3}>
                            <Box closable collapsable header={"Ảnh bìa"}
                                footer={<Button className="btn-primary" text="Thêm ảnh bìa" block
                                    onClick={() => this.modalShow(this.valueTypeCloseImg.coverImg)}
                                />}>
                                {this.state.avatar}
                            </Box>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Button text="Thêm ảnh" className="btn-info" onClick={() => this.modalShow(this.valueTypeCloseImg.content)} />
                            <Trumbowyg
                                id='editor'
                                onChange={(e) => { this.product.content = $(e.target).html() }}
                                resetCss={true}
                                buttons={
                                    [
                                        ['viewHTML'],
                                        ['undo', 'redo'],
                                        ['formatting'],
                                        ['strong', 'em', 'del'],
                                        ['superscript', 'subscript'],
                                        ['link'],
                                        ['insertImage'],
                                        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                                        ['unorderedList', 'orderedList'],
                                        ['horizontalRule'],
                                        ['removeformat'],
                                        ['fullscreen'],
                                    ]
                                }
                                data={this.state.products.content}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Button text={"Đăng"} className="btn-primary" block onClick={this.submit} />
                        </Col>
                    </Row>

                </Content>
                <Modal
                    show={this.state.show}
                    onHide={this.modalHide}
                    style={{ opacity: 1, paddingTop: "50px" }}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="modalImg"
                >
                    <Modal.Header>
                        <Modal.Title>Thêm ảnh</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.images.length > 0 ? this.state.images : "Chưa có hình ảnh"}</Modal.Body>
                    <Modal.Footer>
                        <input type={"file"} accept=".jpg, .png" onChange={(e) => this.UploadImg(e)} />
                        <Button text="Đóng" pullRight className="btn-primary" onClick={this.modalHide} />
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    modalShow(value) {
        this.typeCloseImg = value
        this.setState({ show: true })
    }

    modalHide() {
        this.setState({ show: false })
    }

    componentDidMount = async () => {
        // get img
        let jImgs // json imgs
        await $.get(api.SelectAllImg, data => {
            jImgs = data
        })
        let hImgs = [] // html img
        jImgs.forEach(e => {
            hImgs.push(this.images(e.URL, e.id))
        })

        this.setState({
            images: hImgs
        })
        // get category
        let jCategory
        await $.get(api.ListCategory,
            data => {
                jCategory = data
            }
        );
        let dCategory = []
        jCategory.cates.forEach(e => {
            dCategory.push({
                value: e.id,
                text: e.name
            })
        })

        this.setState({
            ListCategory: dCategory
        })
        window.setTimeout(() => {
            $('[name=select2]').select2();
        }, 1000)

    }

}

export default AddProduct