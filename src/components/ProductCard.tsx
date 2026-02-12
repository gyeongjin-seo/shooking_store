// src/components/ProductCard.tsx

// 1. 상품 데이터의 타입 정의
export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  imgUrl: string; // 이미지 경로
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // 숫자를 천 단위 콤마(35,000원)로 바꿔주는 함수
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* 이미지 영역 */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="mt-1 flex flex-col gap-1">
        <span className="text-sm font-bold text-gray-900">{product.brand}</span>
        <h3 className="text-xs font-medium text-gray-500 line-clamp-1">
          {product.description}
        </h3>
        <span className="mt-1 text-base font-bold text-gray-900">
          {formatPrice(product.price)}원
        </span>
      </div>

      {/* 담기 버튼 */}
      <button className="mt-1 w-fit rounded-full bg-black px-4 py-1.5 text-xs font-bold text-white transition active:scale-95">
        담기
      </button>
    </div>
  );
}
