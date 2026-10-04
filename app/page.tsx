import type { Metadata } from "next";
import PhotoSlider from "./photo-slider";

export const metadata: Metadata = {
  title: "방어회 | 사이버 위협에 맞서는 사람들",
  description:
    "공격을 이해하고, 더 나은 방어를 설계하는 정보보안 동아리 방어회입니다.",
};

const activities = [
  {
    number: "01",
    tag: "TRAINING",
    title: "정보보안 이론과 실습",
    text: "정보보안의 핵심 개념을 이해하고 웹·시스템·네트워크 등 다양한 분야를 이론과 실습으로 함께 학습합니다.",
    meta: "이론 · 실습 중심 학습",
  },
  {
    number: "02",
    tag: "ACTIVITY",
    title: "정보보안 분야 다양한 대외활동",
    text: "CTF, 공모전, 컨퍼런스, 세미나 등 정보보안 분야의 다양한 대외활동에 함께 참여합니다.",
    meta: "대회 · 공모전 · 컨퍼런스 · 학회 · 전시회",
  },
  {
    number: "03",
    tag: "PROJECT",
    title: "보안 프로젝트",
    text: "침해사고 분석, 자동화 도구, 안전한 서비스 설계 등 실사용 가능한 결과물을 만듭니다.",
    meta: "학기당 1개 · SW week",
  },
];

const curriculum = [
  {
    number: "01",
    title: "보안의 기본 교과목",
    text: "컴퓨터 구조·운영체제·네트워크·프로그래밍을 함께 익혀 모든 보안 분야의 공통 기반을 만듭니다.",
    topics: ["컴퓨터 구조", "운영체제", "네트워크", "프로그래밍"],
    foundation: true,
  },
  {
    number: "02",
    title: "웹 해킹",
    text: "웹 서비스의 동작 원리와 주요 취약점을 이해하고 안전한 웹 페이지를 설계하고 점검합니다.",
    topics: ["웹 구조", "취약점 분석", "시큐어 코딩"],
  },
  {
    number: "03",
    title: "리버스 엔지니어링",
    text: "프로그램의 내부 동작을 분석해 취약점의 원인을 찾고 역공학의 기초를 익힙니다.",
    topics: ["프로그램 분석", "취약점 분석", "역공학"],
  },
  {
    number: "04",
    title: "디지털 포렌식",
    text: "디지털 흔적을 수집·보존·분석해 사고 원인과 증거를 논리적으로 확인합니다.",
    topics: ["증거 수집", "증거 분석", "사고 대응"],
  },
  {
    number: "05",
    title: "암호학과 네트워크 보안",
    text: "데이터 보호 원리와 네트워크 통신 구조를 배우고 공통 보안 기반을 완성합니다.",
    topics: ["암호 기초", "네트워크 보안", "통합 실습"],
  },
];

const executiveDepartments = [
  { name: "사무부", english: "ADMINISTRATION", description: "행정 및 내부 업무" },
  { name: "대외부", english: "EXTERNAL RELATIONS", description: "교류 및 외부 협력" },
];

const workingDepartments = [
  { name: "복지부", english: "WELFARE", description: "부원 복지 및 지원" },
  { name: "기획부", english: "PLANNING", description: "행사 및 활동 기획" },
  { name: "운영부", english: "OPERATIONS", description: "동아리 운영 관리" },
  { name: "홍보부", english: "PUBLIC RELATIONS", description: "콘텐츠 및 홍보" },
  { name: "재무부", english: "FINANCE", description: "예산 및 회계 관리" },
];

const activityHistory = [
  { date: "2026.03.31", title: "창설" },
  { date: "2026.04.01", title: "교수(특강)" },
  { date: "2026.04.24", title: "한국인터넷진흥원(KISA) 강원지역 정보보안 동아리 네트워킹 워크샵" },
  { date: "2026.05.04", title: "BOB/화이트햇 스쿨 모집 설명회" },
  { date: "2026.05.12", title: "한림대 졸업생 정보보안 대학원 설명회" },
  { date: "2026.05.14", title: "회장 주관 정보보안 강의" },
  { date: "2026.07.06—07.31", title: "방학활동" },
  { date: "2026.08.01—", title: "SW Week 전시회 참가" },
  { date: "2026.08.04", title: "한국인터넷진흥원(KISA) 동아리 내부 전문 강사 특강 및 워크샵" },
  { date: "2026.09.16—", title: "강원해킹방어대회 참가" },
  { date: "2026.10.08", title: "대학원 진학 설명회" },
];

const externalActivities = ["암호분석경진대회", "드림핵"];

const upcomingActivities = [
  {
    number: "01",
    title: "강원해킹방어대회",
    text: "팀을 구성해 실전 문제에 도전하고 함께 대응 전략을 완성합니다.",
  },
  {
    number: "02",
    title: "SW week",
    text: "한 학기 동안 준비한 보안 프로젝트의 과정과 결과를 공유합니다.",
  },
  {
    number: "03",
    title: "전문 강사 특강",
    text: "현업 전문가와 최신 보안 동향, 기술 그리고 진로 경험을 나눕니다.",
  },
];

const faqs = [
  ["보안 경험이 없어도 지원할 수 있나요?", "네. 경험보다 꾸준히 배우고 함께 문제를 해결하려는 태도를 봅니다. 입문자를 위한 기초 교육부터 시작합니다."],
  ["활동 시간은 얼마나 필요한가요?", "정규 세션은 주 1회 약 2시간이며, 프로젝트와 대회 기간에는 팀별 추가 활동이 있습니다. 활동 일정은 동아리 내부 사정에 따라 변경될 수 있습니다."],
  ["모집 과정은 어떻게 진행되나요?", "온라인 지원 후 면접을 통해 선발합니다. 기술 퀴즈보다 관심 분야와 의지를 중심으로 이야기합니다."],
  ["여러 트랙을 함께 경험할 수 있나요?", "기초 과정에서는 모든 분야를 맛본 뒤 주 트랙을 선택합니다. 이후에도 세션과 프로젝트를 통해 자유롭게 교차할 수 있습니다."],
];

function ClubStatusVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-visual ${className}`} aria-label="방어회 활동 현황 요약">
      <div className="visual-top">
        <span>SYSTEM / CLUB_STATUS</span>
        <span className="status"><i /> ALL SECURE</span>
      </div>
      <div className="visual-context">
        <span>CLUB STATUS</span>
        <strong>방어회의 현재 활동 현황</strong>
      </div>
      <div className="shield-stage">
        <div className="scanline" />
        <div className="shield-rings"><span /><span /><span /></div>
        <div className="hero-club-logo">
          <img src="/bang-eo-hoe-logo-black.png" alt="방어회 공식 로고" />
        </div>
        <div className="coordinate coordinate--a">37.5665° N</div>
        <div className="coordinate coordinate--b">126.9780° E</div>
      </div>
      <div className="visual-stats">
        <div><span>MEMBERS</span><b>30</b><em>ACTIVE</em></div>
        <div><span>CTF</span><b>20</b><em>PARTICIPANTS</em></div>
        <div><span>PROJECT</span><b>10</b><em>PARTICIPANTS</em></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="방어회 홈으로">
          <span className="brand-logo">
            <img src="/bang-eo-hoe-logo-black.png" alt="" />
          </span>
          <span className="brand-name">INFORMATION SECURITY CLUB</span>
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#activities">활동</a>
          <a href="#curriculum">커리큘럼</a>
          <a href="#organization">조직도</a>
          <a href="#schedule">활동 기록</a>
        </nav>
        <a className="header-cta" href="#join">
          <span>지원하기</span><b>↗</b>
        </a>
        <details className="mobile-menu">
          <summary aria-label="메뉴 열기"><span /><span /></summary>
          <nav aria-label="모바일 메뉴">
            <a href="#about">소개</a>
            <a href="#activities">활동</a>
            <a href="#curriculum">커리큘럼</a>
            <a href="#organization">조직도</a>
            <a href="#schedule">활동 기록</a>
            <a href="#join">지원하기 ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
        <div className="hero-school-mark" title="한림대학교">
          <img src="/hallym-university-logo.png" alt="한림대학교" />
        </div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> RECRUITING · 상시모집</div>
          <h1>
            위협을 읽고,<br />
            <span>방어를 설계하다.</span>
          </h1>
          <p>공격을 이해하는 시선과 끝까지 지켜내는 기술.<br />우리는 함께 배우고, 실험하고, 더 안전한 내일을 만듭니다.</p>
          <div className="hero-actions">
            <a className="text-link" href="#activities">우리가 하는 일 <span>↓</span></a>
          </div>
          <div className="hero-inline-stats" aria-label="방어회 활동 인원">
            <div><span>MEMBERS</span><b>30</b><em>ACTIVE</em></div>
            <div><span>CTF</span><b>20</b><em>PARTICIPANTS</em></div>
            <div><span>PROJECT</span><b>10</b><em>PARTICIPANTS</em></div>
          </div>
        </div>
        <ClubStatusVisual className="hero-visual--desktop" />
        <div className="hero-index">01 <span>/ 07</span></div>
        <div className="scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="status-page" id="club-status" aria-label="방어회 활동 현황">
        <div className="status-page__heading">
          <h2>방어회의 현재 활동 현황</h2>
        </div>
        <ClubStatusVisual className="hero-visual--mobile" />
      </section>

      <section className="section about" id="about">
        <div className="section-label"><span>01</span><em>/ 07</em></div>
        <div className="about-lead">
          <h2>혼자 푸는 문제가 아닌,<br /><span>함께 지키는 방법</span>을 배웁니다.</h2>
        </div>
        <div className="about-body">
          <p>방어회는 사이버 보안을 좋아하는 사람들이 모여 공격의 원리를 이해하고, 현실적인 방어 방법을 연구하는 정보보안 동아리입니다.</p>
          <p>정답보다 좋은 질문을, 경쟁보다 함께 성장하는 과정을 중요하게 생각합니다.</p>
          <div className="principles">
            <div><b>01</b><span>최신 보안 트렌드와 취업 시장의 핵심 기술</span></div>
            <div><b>02</b><span>탄탄한 기초를 통해 완성하는 무너지지 않는 실력</span></div>
            <div><b>03</b><span>함께 배우고 도전하며 기르는 협동심</span></div>
          </div>
        </div>
      </section>

      <section className="section activities" id="activities">
        <div className="section-label"><span>02</span><em>/ 07</em></div>
        <div className="section-heading">
          <div><h2>배움이 실제가 되는 순간</h2></div>
          <p>기초 학습부터 대회, 실제 프로젝트까지.<br />서로 다른 경험이 하나의 성장 루프로 이어집니다.</p>
        </div>
        <div className="activity-grid">
          {activities.map((item) => (
            <article className="activity-card" key={item.number}>
              <div className="card-top"><span>{item.number}</span><em>{item.tag}</em></div>
              <div className={`card-graphic card-graphic--${item.number}`} aria-hidden="true"><i /><i /><i /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="card-meta">{item.meta}<span>↗</span></div>
            </article>
          ))}
        </div>
        <div className="project-strip">
          <span>SPECIAL LECTURE</span>
          <strong>정보보안 분야 전문가 특강</strong>
          <p>현업 전문가의 경험을 바탕으로 최신 보안 기술과 진로·취업 정보를 함께 배웁니다.</p>
        </div>
      </section>

      <section className="section curriculum" id="curriculum">
        <div className="section-label"><span>03</span><em>/ 07</em></div>
        <div className="section-heading curriculum-heading">
          <div>
            <h2>분야를 나누기 전에,<br /><span>보안의 전체 흐름</span>을 배웁니다.</h2>
          </div>
          <p>기초 교과목을 공통으로 익힌 뒤 웹·리버싱·포렌식·암호와 네트워크를 연결해 하나의 통합 과정으로 학습합니다.</p>
        </div>
        <div className="curriculum-content">
          <div className="curriculum-flow" aria-label="커리큘럼 학습 흐름">
            <span><b>01</b>기초 이해</span><i>→</i>
            <span><b>02</b>분야 분석</span><i>→</i>
            <span><b>03</b>실습 적용</span><i>→</i>
            <span><b>04</b>통합 프로젝트</span>
          </div>
          <div className="curriculum-grid">
            {curriculum.map((item) => (
              <article className={`curriculum-card${item.foundation ? " curriculum-card--foundation" : ""}`} key={item.number}>
                <div className="curriculum-card__top">
                  <span>{item.number}</span>
                  <em>{item.foundation ? "COMMON CORE" : "SECURITY FIELD"}</em>
                </div>
                <div className="curriculum-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <ul>
                  {item.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section organization" id="organization">
        <div className="section-label"><span>04</span><em>/ 07</em></div>
        <div className="section-heading">
          <div><h2>하나의 목표, 다양한 시선</h2></div>
          <p>각자의 전문성을 연결해<br />더 단단한 팀을 만듭니다.</p>
        </div>
        <div className="org-chart" aria-label="방어회 조직도">
          <div className="org-president">
            <article className="org-node org-node--president">
              <h3>회장</h3>
              <p>동아리 전체 운영 총괄</p>
            </article>
          </div>
          <div className="org-executives">
            {executiveDepartments.map((department) => (
              <article className="org-node" key={department.name}>
                <h3>{department.name}</h3>
                <p>{department.description}</p>
              </article>
            ))}
          </div>
          <div className="org-departments">
            {workingDepartments.map((department) => (
              <article className="org-node" key={department.name}>
                <h3>{department.name}</h3>
                <p>{department.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section schedule" id="schedule">
        <div className="section-label"><span>05</span><em>/ 07</em></div>
        <div className="section-heading">
          <div><h2>방어회의 시작과 움직임</h2></div>
          <p>창설부터 강의와 워크샵까지,<br />방어회의 활동을 순서대로 기록합니다.</p>
        </div>
        <div className="activity-log">
          <div className="activity-log__header"><span>NO.</span><span>DATE</span><span>ACTIVITY</span></div>
          {activityHistory.map((activity, index) => (
            <article key={`${activity.date}-${activity.title}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <time>{activity.date}</time>
              <h3>{activity.title}</h3>
            </article>
          ))}
        </div>
        <div className="external-activities">
          <div><span>EXTERNAL ACTIVITIES</span><h3>외부 활동</h3></div>
          <ul>
            {externalActivities.map((activity, index) => (
              <li key={activity}><span>0{index + 1}</span><strong>{activity}</strong></li>
            ))}
          </ul>
        </div>
        <PhotoSlider />
      </section>

      <section className="section upcoming" id="upcoming">
        <div className="section-label"><span>06</span><em>/ 07</em></div>
        <div className="section-heading upcoming-heading">
          <div>
            <h2>다음 학기에도,<br /><span>도전은 계속됩니다.</span></h2>
          </div>
          <p>실전 대회부터 프로젝트 발표와 전문가 특강까지,<br />방어회의 2학기 활동을 준비하고 있습니다.</p>
        </div>
        <div className="upcoming-grid" aria-label="방어회 2학기 활동 예정">
          {upcomingActivities.map((activity) => (
            <article className="upcoming-card" data-number={activity.number} key={activity.number}>
              <div className="upcoming-card__top">
                <span>{activity.number}</span>
                <em>PLANNED</em>
              </div>
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
              <div className="upcoming-card__line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="section join" id="join">
        <div className="section-label"><span>07</span><em>/ 07</em></div>
        <div className="join-intro">
          <h2>다음 방어선의<br /><span>주인공을 기다립니다.</span></h2>
          <p className="join-text">전공, 학년, 경험보다 배우는 태도와 함께하는 마음을 봅니다. 정보보안의 첫걸음을 방어회와 시작하세요.</p>
          <div className="join-info">
            <div><span>모집 기간</span><b>상시모집</b></div>
            <div><span>지원 대상</span><b>정보보안에 관심 있는 재학생 누구나</b></div>
            <div><span>활동 장소</span><b>공학관</b></div>
          </div>
        </div>
        <div className="faq">
          <p className="kicker">자주 묻는 질문</p>
          {faqs.map(([question, answer], index) => (
            <details key={question} name="faq" open={index === 0}>
              <summary><span>0{index + 1}</span>{question}<b>+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
          <p className="faq-help">
            더 궁금한 점이 있나요?{" "}
            <strong>
              <a href="https://pf.kakao.com/_aQCxnX" target="_blank" rel="noopener noreferrer">
                방어회 오픈채팅을 이용해 주세요!
              </a>
            </strong>
          </p>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#top" aria-label="방어회 홈으로">
              <span className="brand-logo"><img src="/bang-eo-hoe-logo-black.png" alt="" /></span>
              <span className="brand-name">INFORMATION SECURITY CLUB</span>
            </a>
            <p>사이버 위협에 맞서는 사람들.<br />Defend together, grow together.</p>
          </div>
          <div className="footer-contact">
            <span>CLUB PROFILE</span>
            <p><b>창설일</b><em>2026.03.31</em></p>
            <p><b>부원 수</b><em>30명</em></p>
            <p><b>활동 장소</b><em>공학관</em></p>
          </div>
          <div className="footer-links"><span>QUICK LINKS</span><a href="#about">동아리 소개</a><a href="#activities">핵심 활동</a><a href="#organization">조직도</a><a href="#join">가입 안내</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 DEFENSE CLUB. ALL RIGHTS RESERVED.</span><span>CHUNCHEON, REPUBLIC OF KOREA</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
