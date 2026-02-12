// 상품 관련 컴포넌트
// 이미지 강조 + addToCart 함수 연결

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-item">
      <div className="image-wrapper">
        <img src={product.imgUrl} alt={product.name} loading="lazy" />
      </div>
      <div className="product-info">
        <span className="brand-name">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="price">{product.price.toLocaleString()}원</p>
      </div>
      <button
        className="add-btn"
        onClick={addToCart}
        aria-label={`${product.name} 장바구니 담기`}
      >
        담기
      </button>
    </div>
  );
};

export default ProductItem;
