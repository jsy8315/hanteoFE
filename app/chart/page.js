'use client';

import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
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

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 더미 데이터 생성 함수 (백단 서버 가정)
  const fetchArticles = () => {
    // setTimeout을 이용해 비동기 흉내 (서버 요청처럼)
    setTimeout(() => {
      setArticles((prevArticles) => {
        const nextPage = Math.floor(prevArticles.length / 10) + 1;
  
        // 새로운 더미 데이터 생성
        const newArticles = Array.from({ length: 10 }, (_, idx) => ({
          id: (nextPage - 1) * 10 + idx + 1,
          title: `Chart 최신 기사 제목 ${(nextPage - 1) * 10 + idx + 1}`,
        }));
  
        // 총 50개(5페이지)까지 제한
        if (prevArticles.length + newArticles.length >= 50) {
          setHasMore(false);
        }
  
        return [...prevArticles, ...newArticles];
      });
    }, 1000);
  };
  

  useEffect(() => {
    fetchArticles(); // 최초 페이지 로딩 시 데이터 불러오기
  }, []);

  return (
    <SwipeableViews index={currentIndex} onChangeIndex={handleSwipe}>
      <div className="page-container">
        <h2 className="page-title">CHART</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchArticles}
          hasMore={hasMore}
          loader={<h4>로딩 중...</h4>}
          endMessage={<p>모든 기사를 다 봤습니다!</p>}
        >
          <ul className="page-content-list">
            {articles.map((article) => (
              <li key={article.id} className="page-content-item">
                {article.title}
              </li>
            ))}
          </ul>
        </InfiniteScroll>
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
