import React, { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  return (
    <div className="flex">
      {products.map((product, key) => {
        return (
          <Card key={key} sx={{ maxWidth: 345, paddingBottom: 2 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              className="h-64"
              image={product.image.url}
            />
            <CardContent sx={{ paddingTop: 3 }}>
              <Typography gutterBottom variant="h5" component="div">
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

              <Typography variant="body2" color="text.secondary">
                {product.description.replace(/<([^>]+>)/gi, "")}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  console.log("hi");
                }}
              >
                In winkelmand
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductsList;
