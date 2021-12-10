import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid'

//ACTIONS
import { addReview } from '../actions/productsAction';

//CSS
import { Col, Row, Card, CardText, Form, Input, Button } from "reactstrap";
import "../assets/layout/reviews.css";

const Reviews = ({ reviews, user, productId, addReview }) => {

  const newDate = new Date();

  const [postReview, setPostReview] = useState({
    id: 0,
    name: user[0].userName,
    comment: '',
    prodId: 0,
    rating: 0,
    timeStamp: newDate.toLocaleString('default', { month: 'long' }) + " " + newDate.getUTCDate() + ", " + newDate.getUTCFullYear()
  })

  const { name, comment, rating, timeStamp } = postReview;

  useEffect(() => {

  }, [])

  const onChange = (event) => {

    const { name, value } = event.target;

    setPostReview({
      ...postReview,
      [name]: value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const newPostReview = {
      id: uuid(),
      name,
      comment,
      rating,
      prodId: parseInt(productId),
      timeStamp
    }

    addReview(newPostReview)

    setPostReview({
      id: 0,
      name: user[0].userName,
      comment: '',
      prodId: 0,
      rating: 0,
      timeStamp: newDate.toLocaleString('default', { month: 'long' }) + " " + newDate.getUTCDate() + ", " + newDate.getUTCFullYear()
    })
  }

  return (

    <Card className="item-reviews-container">
      <Row>
        <Form onSubmit={onSubmit}>
          <Input
            type="textarea"
            name="comment"
            value={comment}
            rows="3"
            placeholder="Post your review here"
            onChange={onChange} />
          <div className="">
            <CardText tag="p"></CardText>
            <Button type="submit">Post</Button>
          </div>
        </Form>
      </Row>
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
}


Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  user: PropTypes.array.isRequired,
  productId: PropTypes.number.isRequired,
  addReview: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.authList.user
})

export default connect(mapStateToProps, { addReview })(Reviews);
