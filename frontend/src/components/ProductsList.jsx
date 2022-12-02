import React, { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const ProductsList = ({ products, onAddToCart }) => {
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
      {products.map((product, key) => {
        return (
          <Card key={key} sx={{ paddingBottom: 2, width: "100%" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              className="h-64"
              image={product.image.url}
            />
            <CardContent sx={{ padding: "24px 20px 0 20px" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ minHeight: "65px" }}
              >
                {product.name}
              </Typography>

              <Typography
                gutterBottom
                sx={{ fontWeight: "500" }}
                variant="h5"
                component="div"
              >
                {product.price.formatted_with_symbol}
              </Typography>

              {/* <Typography variant="body2" color="text.secondary">
                {product.description.replace(/<([^>]+>)/gi, "")}
              </Typography> */}
            </CardContent>
            <CardActions sx={{ padding: "24px 20px 10px 20px" }}>
              <Button
                size="small"
                onClick={() => {
                  onAddToCart(product.id, 1);
                }}
              >
                In winkelmand
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Container>
  );
};

export default ProductsList;
