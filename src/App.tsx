// src/App.tsx
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    // 모바일 뷰처럼 보이게 너비 제한(max-w-md)과 중앙 정렬(mx-auto)
    <div className="mx-auto min-h-screen max-w-md bg-white p-4">
      {/* 헤더 영역 (임시) */}
      <header className="mb-6 mt-2">
        <h1 className="text-2xl font-bold">신발 상품 목록</h1>
        <p className="text-sm text-gray-500">
          현재 {products.length}개의 상품이 있습니다.
        </p>
      </header>

      {/* 상품 그리드 (2열) */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
