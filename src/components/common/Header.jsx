// 스크롤 시 상단에 고정되며 cartCount가 0보다 클 때만 배지를 노출

import { useCart } from "../../context/CartContext";
import { ShoppingBag } from "lucide-react";
const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="sticky-header">
      <h1>신발 상품 목록</h1>

      <div className="cart-icon-wrapper">
        <ShoppingBag size={24} />

        {/* 조건부 렌더링: 수량이 1 이상일 때만 배지 표시 */}
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </header>
  );
};

export default Header;
