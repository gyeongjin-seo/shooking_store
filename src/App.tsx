// src/App.tsx
import { Header } from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  return (
    // min-h-screen: 최소 높이를 화면 전체로
    // bg-gray-50: 배경색을 살짝 넣어 컨텐츠 구분
    <div className="min-h-screen w-full bg-gray-50">
      {/* 핵심: max-w-md (약 448px) ~ max-w-lg (약 512px)로 제한 
         mx-auto: 중앙 정렬
         bg-white: 컨텐츠 영역은 흰색
         shadow-lg: 앱처럼 보이게 그림자 추가
      */}
      <div className="mx-auto max-w-md min-h-screen bg-white shadow-lg">
        <Header />
        <main className="p-4">
          <ProductList />
        </main>
      </div>
    </div>
  );
}

export default App;
