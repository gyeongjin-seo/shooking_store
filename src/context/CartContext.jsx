/*  전역 상태 관리 (Context)
-> 여러 컴포너느에서 공통으로 쓰는 값을 "한 곳에 저장해두고" 필요한 컴포넌트가 props 없이도 꺼내 쓰게 해주는 방식!*/
import { Children, createContext, useContext, useState } from "react";

// 1. Context 생성
const CartContext = createContext();

/* 2. Provider 컴포넌트 생성
 Context에 담아둔 “공유 데이터(상태)”를 하위 컴포넌트들이 꺼내 쓸 수 있게 범위를 열어주는 컴포넌트*/
export const CartProvider = () => {
  const [cartCount, setCartCount] = useState(0);

  // 장바구니 담기 함수 (단순 카운트 증가)
  const addToCart = () => {
    setCartCount(() => prev + 1);
  };
};

return (
  <CartContext.Provider value={{ cartCount, addToCart }}>
    {children}
  </CartContext.Provider>
);

// 3. 커스텀 훅 ( 컴포넌트에서 쉽게 사용하기 위함)
export const useCart = () => useContext(CartContext);
