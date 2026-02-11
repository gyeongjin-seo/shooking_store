// src/components/ProductItem.tsx

// 타입 정의 (TypeScript 쓰시니까 필수)
interface ProductProps {
  product: {
    id: number;
    name: string;
    brand: string;
    price: number;
    img: string;
  };
}

export default function ProductItem({ product }: ProductProps) {
  return (
    <div className="flex flex-col">
      {/* 1. 이미지 영역 (비율 고정 및 꽉 차게) */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
        {/* 장바구니 아이콘을 이미지 위에 띄우고 싶다면 여기에 absolute로 배치 */}
      </div>

      {/* 2. 텍스트 정보 */}
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-sm font-bold text-black">{product.brand}</span>
        <span className="text-xs text-gray-500 line-clamp-1">
          {product.name}
        </span>
        <span className="text-sm font-bold text-black">
          {product.price.toLocaleString()}원
        </span>
      </div>

      {/* 3. 담기 버튼 (피그마의 검정 알약 버튼) */}
      <button
        onClick={() => alert("장바구니 담기!")} // 나중에 로직 연결
        className="mt-2 w-fit rounded-full bg-black px-4 py-1.5 text-xs font-bold text-white transition active:scale-95"
      >
        담기
      </button>
    </div>
  );
}
