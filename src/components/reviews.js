import React, { Fragment } from "react";
import PropTypes from "prop-types";

//CSS
import { Col, Row, Card, CardText } from "reactstrap";
import "../assets/layout/reviews.css";

const Reviews = ({ reviews }) => {
  if (reviews.length > 0) {
    return (
      <Card className="item-reviews-container">
        {reviews.map((review) => (
          <Row key={review.id}>
            <Col className="review-details">
              <CardText tag="h5">{review.name}</CardText>
              <CardText tag="p">{review.timeStamp}</CardText>
              <CardText tag="h6">{review.comment}</CardText>
            </Col>
          </Row>
        ))}
      </Card>
    );
  } else return ''
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews;
