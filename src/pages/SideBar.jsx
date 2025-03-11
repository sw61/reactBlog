import styled from 'styled-components';
import { useState, useEffect } from 'react';
import './SideBar.css';

function SideBar({ headings }) {
  const [isActive, setIsActive] = useState('');

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    const target = document.getElementById(link.replace('#', ''));

    if (target) {
      const yOffset = 80; // 상단 고정 헤더 간격
      const y = target.getBoundingClientRect().top + window.scrollY - yOffset;
      console.log(`Scrolling to: ${y}`); // 디버깅용 로그
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsActive(link.replace('#', ''));
    } else {
      console.error(`Element not found: ${link}`);
    }
  };

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // 감지 위치 수정
      threshold: 0.2, // 조금 더 보여야 감지
    });

    const headingElements = document.querySelectorAll('h1, h2, h3');
    headingElements.forEach((element) => {
      console.log(`Observing: ${element.id}`); // 디버깅 로그 추가
      observer.observe(element);
    });

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <SideContainer>
      {headings.map((heading, index) => {
        const id = heading.text.trim().replace(/\s+/g, '-').toLowerCase(); // ID 통일성 확보
        return (
          <div key={index} className={`heading-${heading.level}`}>
            <a
              href={`#${id}`}
              className={isActive === id ? 'active' : 'notActive'}
              onClick={(event) => handleLinkClick(event, `#${id}`)}
            >
              {heading.text}
            </a>
          </div>
        );
      })}
    </SideContainer>
  );
}

export default SideBar;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  position: sticky;
  border-left: 4px solid #e5e7eb;
  width: 180px;
  top: 230px; // 높이 조정
  left: 50px;
`;
