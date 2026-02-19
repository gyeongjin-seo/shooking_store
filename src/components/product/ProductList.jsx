import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json") // public 폴더 기준 경로
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("데이터 로드 실패:", error));
  }, []);

  return (
    <div>
      <p>총 {products.length}개의 상품</p>
      {/* 렌더링 로직... */}
    </div>
  );
};
