'use client'

import { useRouter, usePathname } from 'next/navigation';
import styles from "../Tab/NavbarTab.module.css"; // CSS 모듈 방식으로 정확히 import

const tabs = ['chart', 'music', 'culture', 'fans', 'photo'];

export default function NavbarTab() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (tab) => {
    router.push(`/${tab}`);
  };

  return (
    <div className={styles.tabGroup}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${styles.tabElement} ${pathname === `/${tab}` ? styles.active : ''}`}
          onClick={() => handleClick(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </div>
      ))}
    </div>
  );
}
