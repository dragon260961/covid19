import React from "react";
import "../style.css";
import "../App.css";
import { Card, CardText, CardTitle } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NumberFormat from "react-number-format";

class Covid extends React.Component {
render() {
let data = this.props.data;

return (
    <div style={{ 
        backgroundImage: 'url("https://www.tulsa-health.org/sites/default/files/styles/fhd/public/2020-09/GettyImages-1210596198.jpg?itok=nsT8bL3M")' 
      }}>
    
        <CardTitle tag="h3">
            สถานการณ์ผู้ติดเชื้อ Covid-19 ในประเทศไทย
        </CardTitle><br />
        <CardTitle tag="h5">ข้อมูล ณ วันที่ {data.UpdateDate}</CardTitle>        
    <Container>
        <Row>
            <Col sm="12" md={{ size: 12, offset: 0 }}>
            <Card body inverse color="Confirmed">
                <CardTitle tag="h5">ติดเชื้อสะสม</CardTitle>
                <CardText>
                <h1>
                    <NumberFormat
                    value={data.Confirmed}
                    displayType={"text"}
                    thousandSeparator={true}
                    />
                </h1>
                </CardText>
                <CardText tag="h5">
                [ +
                <NumberFormat
                    value={data.NewConfirmed}
                    displayType={"text"}
                    thousandSeparator={true}
                />{" "}
                ]
                </CardText>
            </Card>
            </Col>
        </Row>
        <Row>
            <Col>
            <Card body inverse color="Recovered">
                <CardTitle tag="h5">หายแล้ว</CardTitle>
                <CardText tag="h1">
                <NumberFormat
                    value={data.Recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                />
                </CardText>
                <CardText tag="h5">
                [+{" "}
                <NumberFormat
                    value={data.NewRecovered}
                    displayType={"text"}
                    thousandSeparator={true}
                />{" "}
                ]
                </CardText>
            </Card>
            </Col>
            <Col>
            <Card body inverse color="Hospitalized">
                <CardTitle tag="h5">รักษาอยู่ใน รพ.</CardTitle>
                <CardText tag="h1">
                <NumberFormat
                    value={data.Hospitalized}
                    displayType={"text"}
                    thousandSeparator={true}
                />
                </CardText>
                <CardText tag="h5">
                <span>&nbsp;</span>
                </CardText>
            </Card>
            </Col>
            <Col>
            <Card body inverse color="Deaths">
                <CardTitle tag="h5">เสียชีวิต</CardTitle>
                <CardText tag="h1">
                <NumberFormat
                    value={data.Deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                />
                </CardText>
                <CardText tag="h5">
                <span>&nbsp;</span>
                </CardText>
            </Card>
            </Col>
        </Row>
    </Container>
    </div>
);
}
}
export default Covid;