import { CardNumberInput } from "./CardNumberInput";

// 1. 컴포넌트 메타데이터 설정
export default {
  title: "Components/CardNumberInput", // Storybook 사이드바에 표시될 경로
  component: CardNumberInput,
  tags: ["autodocs"], // 자동으로 문서를 생성해주는 옵션
};

// 2. 기본 상태의 스토리
export const Default = {
  args: {
    // 여기에 컴포넌트가 기본적으로 받을 props를 넣어줍니다.
    // 예: value: '', onChange: () => {}, placeholder: '0000-0000-0000-0000'
  },
};

// 3. 에러 상태의 스토리 (결제 기능이므로 이런 엣지 케이스 테스트가 유용합니다)
export const HasError = {
  args: {
    // 예: isError: true, errorMessage: '카드 번호를 확인해주세요.'
  },
};
