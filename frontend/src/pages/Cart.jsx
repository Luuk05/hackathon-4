import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

const Cart = ({ cart }) => {
  const isEmpty = !cart?.line_items.length;

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
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
              <>
                <Card
                  key={key}
                  sx={{ padding: 2, width: "100%", marginBottom: 4 }}
                >
                  <h4>{item.name}</h4>
                </Card>
              </>
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
