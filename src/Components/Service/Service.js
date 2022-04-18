import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Service.css";

const Service = () => {
  return (
    <div>
      <div className="service-header">
        <h2>
          My SerVices For Yor
          <br />
          Best Quality
        </h2>
      </div>
      <Container>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="text-center h-100 shadow">
              <Card.Img
                variant="top" className='card-img'
                src="https://www.moneyunder30.com/wp-content/uploads/2021/05/shutterstock_499801255-648x364-c-default.jpg"
              />
              <Card.Body>
                <Card.Title>Creative Gardening</Card.Title>
                <Card.Text>
                  he decides to keep the fantasy alive by sending a similar
                  letter to Susan.Are Landscapers funny. Landscapers not only
                  benefits from great performances by Colman and Thewlis, but
                  it's a dark comedy
                </Card.Text>
                <Button variant="success">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card className="text-center h-100 shadow">
              <Card.Img
                variant="top"
                src="https://urbanfarmonline.com/wp-content/uploads/2020/06/What-does-a-professional-landscaper-do-700x468.jpg"
              />
              <Card.Body>
                <Card.Title>Creative Solution</Card.Title>
                <Card.Text>
                  he decides to keep the fantasy alive by sending a similar
                  letter to Susan.Are Landscapers funny. Landscapers not only
                  benefits from great performances by Colman and Thewlis, but
                  it's a dark comedy
                </Card.Text>
                <Button variant="success">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card className="text-center h-100 shadow">
              <Card.Img
                variant="top" className='card-img'
                src="https://performancepersonnel.com/wp-content/uploads/2018/06/landscaper1.jpg"
              />
              <Card.Body>
                <Card.Title>Creative Planting</Card.Title>
                <Card.Text>
                  he decides to keep the fantasy alive by sending a similar
                  letter to Susan.Are Landscapers funny. Landscapers not only
                  benefits from great performances by Colman and Thewlis, but
                  it's a dark comedy
                </Card.Text>
                <Button variant="success">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;




