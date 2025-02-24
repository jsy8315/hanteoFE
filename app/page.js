import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const articles = [
    { id: 1, title: '최신 뉴스 제목 1', summary: '기사 내용 요약 1', link: '#' },
    { id: 2, title: '최신 뉴스 제목 2', summary: '기사 내용 요약 2', link: '#' },
    { id: 3, title: '최신 뉴스 제목 3', summary: '기사 내용 요약 3', link: '#' },
    { id: 4, title: '최신 뉴스 제목 4', summary: '기사 내용 요약 4', link: '#' },
    { id: 5, title: '최신 뉴스 제목 5', summary: '기사 내용 요약 5', link: '#' },
    { id: 6, title: '최신 뉴스 제목 6', summary: '기사 내용 요약 6', link: '#' },
  ];

  return (
    <div className="container">
      <h2>최신 기사</h2>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.id} className="article-item">
            <a href={article.link}>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

