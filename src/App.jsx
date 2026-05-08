#root { width: 100%; text-align: center; }

/* 💖 전체 배경 디자인 */
.ad-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* 배경색 (나중에 다른 색 이름이나 코드로 바꿔보세요) */
  background-color: #fff0f5; /* LavenderBlush 색 */
}

/* 🤍 문구가 담긴 하얀 카드 디자인 */
.ad-card {
  background: white;
  padding: 50px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  width: 400px;
}

/* ⭐[수정 포인트 4] 제목 색상 */
.ad-title {
  color: #ff69b4; /* HotPink 색 */
  font-size: 32px;
  line-height: 1.3;
  margin-bottom: 20px;
}

/* ⭐[수정 포인트 5] 설명 색상 */
.ad-description {
  color: #888;
  font-size: 16px;
  margin-bottom: 40px;
  line-height: 1.6;
}

/* 💖 버튼 디자인 */
.ad-button {
  background-color: #ff69b4; /* 버튼 배경색 */
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
}

.ad-button:hover {
  background-color: #ff1493; /* 버튼에 마우스 올렸을 때 색 */
  transform: scale(1.05);
}
