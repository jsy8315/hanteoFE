'use client';

import SwipeableViews from 'react-swipeable-views';
import { useRouter } from 'next/navigation';
import "../globals.css";

export default function Culture() {
  const router = useRouter();
  const tabs = ['chart', 'music', 'culture', 'fans', 'photo'];
  const currentIndex = 2; // Music 페이지의 인덱스 번호

  const handleSwipe = (index) => {
    router.push(`/${tabs[index]}`);
  };

  return (
    <SwipeableViews index={currentIndex} onChangeIndex={handleSwipe}>
      <div className="page-container">
        <h2 className="page-title">Chart 페이지 콘텐츠</h2>
      </div>

      <div className="page-container">
        <h2 className="page-title">Music 페이지 콘텐츠</h2>
      </div>

      <div className="page-container">
        <h2 className="page-title">CULTURE</h2>
        <ul className="page-content-list">
          <li className="page-content-item">Culture 최신 기사 1</li>
          <li className="page-content-item">Culture 최신 기사 2</li>
          <li className="page-content-item">Culture 최신 기사 3</li>
          {/* 추가 기사들을 리스트 형식으로 여기에 배치 */}
        </ul>
      </div>

      <div className="page-container">
        <h2 className="page-title">Fans 페이지 콘텐츠</h2>
      </div>

      <div className="page-container">
        <h2 className="page-title">Photo&Video 페이지 콘텐츠</h2>
      </div>
    </SwipeableViews>
  );
}
