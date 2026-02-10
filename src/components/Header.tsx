//  장바구니 배지 로직
/*배지 렌더링은
화면(UI)에서 **배지(badge)**를 어떤 시점에, 어떤 방식으로 그려서 보여줄지 처리하는 것을 말함.*/

import React from "react";

interface HeaderProps {
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="cart-icon-wrapper">
        🛒
        {/* cartCount가 0보다 클 때만 배지 렌더링 */}
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </header>
  );
};
