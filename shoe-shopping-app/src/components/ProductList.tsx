import React from "react";
import { ProductItem, Product } from "./ProductItem";

interface ProductListProps {
  products: Product[];
  onAddToCart: () => void;
}

export const ProductList: React.FunctionComponent<ProductListProps> = ({
  products,
  onAddToCart,
}) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
