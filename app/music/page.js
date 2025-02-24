'use client';

import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SwipeableViews from 'react-swipeable-views';
import { useRouter } from 'next/navigation';
import "../globals.css";

export default function Music() {
  const router = useRouter();
  const tabs = ['chart', 'music', 'culture', 'fans', 'photo'];
  const currentIndex = 1;

  const handleSwipe = (index) => {
    router.push(`/${tabs[index]}`);
  };

  const [articles, setArticles] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchArticles = () => {
    setTimeout(() => {
      setArticles((prev) => {
        const currentLength = prev.length;
        const nextArticles = Array.from({ length: 10 }, (_, idx) => ({
          id: currentLength + idx + 1,
          title: `Music 최신 기사 제목 ${currentLength + idx + 1}`,
        }));

        // 50개(10개씩 5번 로드)로 제한
        if (currentLength + nextArticles.length >= 50) {
          setHasMore(false);
        }

        return [...prev, ...nextArticles];
      });
    }, 1000);
  };

  useEffect(() => {
    fetchArticles(); // 처음 로딩 시 한번 호출
  }, []);

  return (
    <SwipeableViews index={currentIndex} onChangeIndex={handleSwipe}>
      <div className="page-container">
        <h2 className="page-title">CHART</h2>
      </div>

      <div className="page-container">
        <h2 className="page-title">MUSIC</h2>

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
