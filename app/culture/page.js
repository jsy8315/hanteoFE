'use client';

import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SwipeableViews from 'react-swipeable-views';
import { useRouter } from 'next/navigation';
import "../globals.css";

export default function Music() {
  const router = useRouter();
  const tabs = ['chart', 'music', 'culture', 'fans', 'photo'];
  const currentIndex = 2;

  const handleSwipe = (index) => {
    router.push(`/${tabs[index]}`);
  };

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 더미 데이터 생성 함수 (백단 서버 가정)
  const fetchArticles = () => {
    setTimeout(() => {
      const newArticles = Array.from({ length: 10 }, (_, idx) => ({
        id: (page - 1) * 10 + idx + 1,
        title: `Culture 최신 기사 제목 ${(page - 1) * 10 + idx + 1}`,
      }));

      setArticles((prev) => [...prev, ...newArticles]);

      // 더미 데이터는 50개까지만 생성한다고 가정
      if (page === 5) setHasMore(false);
      setPage(page + 1);
    }, 1000); // 1초 후 데이터 로딩 (API 요청처럼)
  };

  useEffect(() => {
    fetchArticles(); // 최초 페이지 로딩 시 데이터 불러오기
  }, []);

  return (
    <SwipeableViews index={currentIndex} onChangeIndex={handleSwipe}>
      <div className="page-container">
        <h2 className="page-title">CHART</h2>
      </div>

      <div className="page-container">
        <h2 className="page-title">MUSIC</h2>
      </div>

      <div className="page-container">
        <h2 className="page-title">CULTURE</h2>
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
        <h2 className="page-title">FANS</h2>
      </div>

      <div className="page-container">
        <h2 className="page-title">PHOTO</h2>
      </div>
    </SwipeableViews>
  );
}
