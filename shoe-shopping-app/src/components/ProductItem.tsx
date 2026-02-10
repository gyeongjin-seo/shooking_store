// 개별 상품 UI

// 타입 정의
export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
}

//  "부모에게 무엇을 받을 것인가 ( Props 정의 "
interface ProductItemProps {
  product: Product;
  onAddToCart: () => void; // 클릭 이벤트 핸들러
}

export default function ProductItem({
  product,
  onAddToCart,
}: ProductItemProps) {
  return (
    <div className="product-item">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
      <div className="product-info">
        <span className="brand-name">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>
        <span className="product-price">
          {product.price.toLocaleString()}원
        </span>
      </div>
      <button className="add-btn" onClick={onAddToCart}>
        닫기
      </button>
    </div>
  );
}
