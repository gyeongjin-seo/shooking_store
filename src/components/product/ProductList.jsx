import React from "react";
import ProductItem from "./ProductItem";

// 임시 Mock Data (실제로는 API에서 가져옴)
const MOCK_PRODUCTS = [
  {
    id: 1,
    brand: "브랜드A",
    name: "편안한 운동화",
    price: 35000,
    imgUrl: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    brand: "브랜드A",
    name: "힙한 컬러 신발",
    price: 25000,
    imgUrl: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    brand: "브랜드B",
    name: "기본 스니커즈",
    price: 15000,
    imgUrl: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    brand: "브랜드B",
    name: "러닝화 프로",
    price: 45000,
    imgUrl: "https://via.placeholder.com/300",
  },
];

const ProductList = () => {
  return (
    <section className="product-grid">
      <p className="product-count">
        현재 {MOCK_PRODUCTS.length}개의 상품이 있습니다.
      </p>
      <div className="grid-container">
        {MOCK_PRODUCTS.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
