// numberWithComma 함수를 "기본 내보내기"로 내보냅니다. (default export)

const numberWithComma = (n) =>
  n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export default numberWithComma;
