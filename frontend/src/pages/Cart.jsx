import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = ({ cart, handleUpdateCartQty }) => {
  const isEmpty = !cart?.line_items.length;

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: 6,
        marginTop: 15,
      }}
    >
      {isEmpty ? (
        <div>Je hebt geen producten in je mand</div>
      ) : (
        <div>
          {cart?.line_items.map((item, key) => {
            return (
              <Card
                key={key}
                sx={{
                  padding: 2,
                  width: "100%",
                  marginBottom: 4,
                  display: "flex",
                }}
              >
                <div>
                  <img
                    style={{
                      height: "140px",
                      width: "140px",
                      objectFit: "cover",
                      maxWidth: "none",
                    }}
                    src={item.image.url}
                  />
                </div>
                <div
                  style={{
                    marginLeft: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h4>{item.name}</h4>
                  <h5>
                    {item.quantity} x {item.price.formatted_with_symbol} ={" "}
                    {item.line_total.formatted_with_symbol}
                  </h5>
                  <div style={{ marginTop: 20 }}>
                    <Button
                      variant="outlined"
                      style={{ marginRight: 20 }}
                      onClick={() => {
                        handleUpdateCartQty(item.id, item.quantity + 1);
                      }}
                    >
                      <AddIcon />
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={() => {
                        handleUpdateCartQty(item.id, item.quantity - 1);
                      }}
                    >
                      <RemoveIcon />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
          <div>
            <h5>Subtotaal: {cart?.subtotal.formatted_with_symbol}</h5>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
