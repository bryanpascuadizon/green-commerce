import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//COMPONENTS
import QuantityCounter from "../helper/quantityCounter";
import PageName from "../helper/pageName";
import Reviews from "./reviews";
import ProductConfirm from './productConfirm'

//ACTIONS
import { getProduct } from "../../actions/productsAction";
import { modifyCart } from "../../actions/cartAction";

//CSS
import { Row, Col, Card, CardImg, CardText, Button, Modal } from "reactstrap";
import "../../assets/layout/productDisplay.css";

const ProductDisplay = ({ getProduct, modifyCart, item, reviews, showProductConfirmation, isProcessing }) => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const accumulate = (action) => {
    if (action) {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const submitCart = (event) => {
    event.preventDefault();

    const newItem = [
      {
        id: item[0].id,
        name: item[0].name,
        description: item[0].description,
        isAvailable: item[0].isAvailable,
        info: item[0].info,
        img: item[0].img,
        quantity: quantity,
        isSelected: false
      },
    ];

    modifyCart(true, newItem, false);
  };

  useEffect(() => {
    getProduct(parseInt(id));
  }, [getProduct, id]);

  return (
    <div>
      {item.map((element) => (
        <form onSubmit={submitCart} key={element.id}>
          <Card className="item-display-container">
            <Row key={element.name}>
              <Col xs={12} sm={5}>
                <CardImg src={element.img}></CardImg>
              </Col>
              <Col xs={12} sm={7}>
                <CardText tag="h5" className="name">{element.name}</CardText>
                <CardText tag="h5" className="description">{element.description}</CardText>
                <CardText className="info">{element.info}</CardText>
                <div>
                  <CardText tag="h6">Quantity</CardText>
                  <QuantityCounter
                    accumulate={accumulate}
                    quantity={quantity}
                  />
                </div>
                <Row className="action">
                  <Col xs={6}>
                    <Button id="add-to-cart" type="submit">
                      Add To Cart
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Link to="/">
                      <Button id="cancel">Back</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </form>
      ))}

      <Reviews reviews={reviews} productId={parseInt(id)} />

      <ProductConfirm quantity={quantity} />
    </div>
  );
};

ProductDisplay.propTypes = {
  getProduct: PropTypes.func.isRequired,
  modifyCart: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.productList.item,
  reviews: state.productList.reviews,
});

export default connect(mapStateToProps, { getProduct, modifyCart })(
  ProductDisplay
);
