import React from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";

const Picture = ({ picture, like }) => {
  const { id, price, name, image, details, size, user, addlike, removelike } =
    picture;

  const likeImage = (number) => {
    like(id, number);
  };

  return (
    <Col key={id}>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="font-monospace text-secondary">{user}</span>  

            <button type="button" class="btn btn-success position-relative btn-xs ms-auto"  onClick={() => likeImage(1)}>
              <i class="bi bi-hand-thumbs-up-fill"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
               {addlike}            
              </span>
            </button>

            <button type="button" class="btn btn-danger position-relative btn-xs ms-auto" onClick={() => likeImage(0)}>
              <i class="bi bi-hand-thumbs-down-fill"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
               {removelike}            
              </span>
            </button>
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={image} alt={name} style={{ objectFit: "cover" }} />
        </div>
        <Card.Body className="d-flex  flex-column text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="flex-grow-1 ">{details}</Card.Text>         
          <Button
            variant="outline-dark"
            onClick={likeImage}
            className="w-100 py-3"
          >
            Like for {utils.format.formatNearAmount(price)} NEAR
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Picture.propTypes = {
  picture: PropTypes.instanceOf(Object).isRequired,
  like: PropTypes.func.isRequired,
};

export default Picture;