import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Product } from "./components/ProductItem";

// Mock Data (임시 데이터)
const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    brand: "NIKE",
    name: "에어포스 1",
    price: 139000,
    image: "https://placehold.co/300",
  },
  {
    id: 2,
    brand: "ADIDAS",
    name: "삼바 OG",
    price: 129000,
    image: "https://placehold.co/300",
  },
  {
    id: 3,
    brand: "NEW BALANCE",
    name: "530",
    price: 109000,
    image: "https://placehold.co/300",
  },
  {
    id: 4,
    brand: "ASICS",
    name: "젤 카야노",
    price: 169000,
    image: "https://placehold.co/300",
  },
  // ... 더 추가 가능
];

function App() {
  // 장바구니 상태 관리
  const [cartCount, setCartCount] = useState<number>(0);

  // 담기 버튼 핸들러
  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    // 선택 사항: alert("장바구니에 담겼습니다!");
  };

  return (
    <div className="app-container">
      {/* 헤더에 카운트 전달 */}
      <Header cartCount={cartCount} />

      <main className="main-content">
        <h1 className="page-title">신발 상품 목록</h1>
        <p className="product-count">
          현재 {MOCK_PRODUCTS.length}개의 상품이 있습니다.
        </p>

        {/* 리스트에 데이터와 핸들러 전달 */}
        <ProductList products={MOCK_PRODUCTS} onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}

export default App;
