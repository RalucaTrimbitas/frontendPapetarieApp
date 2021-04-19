import React, {Component} from "react";
import SidebarCategorii from "../SideBars/sidebarCategorii";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../utils/footer";


class Categorii extends Component {

    render() {

        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col className="col-md-4 col-lg-3 col-xs-1 p-l-0 p-r-0 in" >
                            <SidebarCategorii />
                        </Col>
                        <Col className="col-md-8 col-lg-9 col-xs-11 p-l-2 p-t-2 categorii">
                        </Col>
                    </Row>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }

}

export default Categorii;