import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import CoverPage from "./CoverPage";
import BackCoverPage from "./BackCoverPage";
import Hero from "../Hero";
import About from "../About";
import Experience from "../Experience";
import Skills from "../Skills";
import Projects from "../Projects";
import Achievements from "../Achievements";
import Certifications from "../Certifications";
import Resume from "../Resume";

const chapters = [
  { label: "Home", content: <Hero /> },
  { label: "About", content: <About /> },
  { label: "Experience", content: <Experience /> },
  { label: "Skills", content: <Skills /> },
  { label: "Projects", content: <Projects /> },
  { label: "Achievements", content: <Achievements /> },
  { label: "Certifications", content: <Certifications /> },
  { label: "Resume", content: <Resume /> },
];

export default function PortfolioBook({ theme, toggleTheme }) {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = chapters.length + 2;

  const goToPage = (index) => {
    bookRef.current?.pageFlip()?.flip(index);
  };

  return (
    <div className="book-shell">
      <div className="book-toolbar">
        <span className="logo">Reshmi A K</span>
        <nav className="book-nav">
          {chapters.map((chapter, i) => (
            <button
              key={chapter.label}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => goToPage(i + 1)}
            >
              {chapter.label}
            </button>
          ))}
        </nav>
        <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="book-stage">
        <button
          className="book-arrow book-arrow-left"
          onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          ‹
        </button>

        <HTMLFlipBook
          ref={bookRef}
          width={380}
          height={560}
          size="stretch"
          minWidth={280}
          maxWidth={520}
          minHeight={420}
          maxHeight={760}
          maxShadowOpacity={0.4}
          showCover={true}
          mobileScrollSupport={false}
          usePortrait={true}
          flippingTime={650}
          className="book"
          onFlip={(e) => setCurrentPage(e.data)}
        >
          <CoverPage />
          {chapters.map((chapter, i) => (
            <Page key={chapter.label} number={i + 1}>
              {chapter.content}
            </Page>
          ))}
          <BackCoverPage />
        </HTMLFlipBook>

        <button
          className="book-arrow book-arrow-right"
          onClick={() => bookRef.current?.pageFlip()?.flipNext()}
          disabled={currentPage >= totalPages - 1}
          aria-label="Next page"
        >
          ›
        </button>
      </div>

      <p className="book-page-indicator">
        {currentPage === 0
          ? "Cover"
          : currentPage === totalPages - 1
          ? "Back cover"
          : `Page ${currentPage} of ${chapters.length}`}
      </p>
    </div>
  );
}
