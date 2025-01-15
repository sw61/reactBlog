import './Minju.css';
import styled from 'styled-components';
function Minju() {
  return (
    <>
      <header className="headBar">
        <div className="header">
          <div className="Naver">NAVER</div>
          <div className="Web">웹소설</div>
          <div>시리즈</div>
          <div>웹툰</div>
        </div>
        <div className="header2">
          <div clssName="search">
            <input type="text" placeholder="메시지를 입력하세요."></input>
            <button>클릭</button>
          </div>
          <div className="login">
            <button>로그인</button>
          </div>
        </div>
      </header>
      <hr></hr>
      <header className="subBar">
        <div className="header3">
          <div className="home">홈</div>
          <div className="seriesEdition" 시리즈에디션>
            시리즈에디션
          </div>
          <div className="bestLeague" 베스트리그>
            베스트리그
          </div>
          <div className="challengeLeague"></div>
          <div className="my">MY</div>
          <div className="work">작품올리기</div>
        </div>
        <div className="header4">
          <div className="likeGenre">
            <button>선호장르 😍</button>
          </div>
        </div>
      </header>
      <hr></hr>
      <header className="webRanking">
        <div className="ranking">웹소설 통합 랭킹</div>
        <div className="set-up">
          <button>통합설정</button>
        </div>
      </header>
      <body className="totalRanking">
        <div className="num1">
          <img src="pristun.jpg" className="image"></img>
          <div className="rank">1</div>
          <div className="infoBox">
            <div>프레스턴 경의 비밀 가정교사</div>
            <div className="author">성하 | 로판</div>
            <div className="series">시리즈에디션 | 관심 3,353</div>
          </div>
        </div>
        <div className="num1">
          <img src="lost.jpg" className="image"></img>
          <div className="rank">2</div>
          <div className="infoBox">
            <div>뺏긴 자리에 미련 없습니다</div>
            <div className="author">최아리 | 로판</div>
            <div className="series">시리즈에디션 | 관심 2,333</div>
          </div>
        </div>
        <div className="num1">
          <img src="ending.jpg" className="image"></img>
          <div className="rank">3</div>
          <div className="infoBox">
            <div>계약이 끝나는 날</div>
            <div className="author">꾸르미르 | 로맨스</div>
            <div className="series">시리즈에디션 | 관심 2,425</div>
          </div>
        </div>
        <div className="num1">
          <img src="your.jpg" className="image"></img>
          <div className="rank">4</div>
          <div className="infoBox">
            <div>낫 유어 프렌드</div>
            <div className="author">리봄 | 로맨스</div>
            <div className="series">시리즈에디션 | 관심 2,333</div>
          </div>
        </div>
        <div className="num1">
          <img src="firstlove.jpg" className="image"></img>
          <div className="rank">5</div>
          <div className="infoBox">
            <div>첫사랑, 첫 이별, 첫아이</div>
            <div className="author">배고픈 불독 | 로맨스</div>
            <div className="series">시리즈에디션 | 관심 1,433</div>
          </div>
        </div>
        <div className="num1">
          <img src="your.jpg" className="image"></img>
          <div className="rank">4</div>
          <div className="infoBox">
            <div>낫 유어 프렌드</div>
            <div className="author">리봄 | 로맨스</div>
            <div className="series">시리즈에디션 | 관심 2,333</div>
          </div>
        </div>
      </body>
    </>
  );
}
export default Minju;
