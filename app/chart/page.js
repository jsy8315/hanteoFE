'use client';

import SwipeableViews from 'react-swipeable-views';
import { useRouter } from 'next/navigation';
import "../globals.css";

export default function Music() {
  const router = useRouter();
  const tabs = ['chart', 'music', 'culture', 'fans', 'photo'];
  const currentIndex = 0; 

  const handleSwipe = (index) => {
    router.push(`/${tabs[index]}`);
  };

  return (
    <SwipeableViews index={currentIndex} onChangeIndex={handleSwipe}>
      <div className="page-container">
        <h2 className="page-title">CHART</h2>
        <ul className="page-content-list">
          <li className="page-content-item">Chart 최신 기사 1</li>
          <li className="page-content-item">Chart 최신 기사 2</li>
          <li className="page-content-item">Chart 최신 기사 3</li>
        </ul>
      </div>

      <div className="page-container">
        <h2 className="page-title">MUSIC</h2>
      </div>

      <div className="page-container">
        <h2 className="page-title">CULTURE</h2>
      </div>

      <div className="page-container">
        <h2 className="page-title">FANS</h2>
      </div>

      <div className="page-container">
        <h2 className="page-title">PHOTO</h2>
      </div>
    </SwipeableViews>
  );
}
