// src/components/ProductList.tsx
import ProductItem from "./ProductItem";

// 가짜 데이터 (나중에 API로 대체)
const products = [
  { id: 1, name: "나이키 에어포스", brand: "Nike", price: 129000, img: "..." },
  { id: 2, name: "아디다스 삼바", brand: "Adidas", price: 139000, img: "..." },
  // ...
];

export default function ProductList() {
  return (
    <div className="mt-4">
      <h2 className="mb-4 text-xl font-bold text-black">신발 상품 목록</h2>

      {/* grid: 그리드 사용
        grid-cols-2: 한 줄에 2개 (요구사항)
        gap-x-4: 가로 간격 16px
        gap-y-6: 세로 간격 24px
      */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-6">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
