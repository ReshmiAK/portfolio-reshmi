import { forwardRef } from "react";
import { profile } from "../../data/resumeData";

const CoverPage = forwardRef((_, ref) => {
  return (
    <div className="book-page book-cover" ref={ref}>
      <div className="book-cover-content">
        <span className="book-cover-kicker">Portfolio</span>
        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
        <span className="book-cover-hint">Click or drag the corner to open →</span>
      </div>
    </div>
  );
});

CoverPage.displayName = "CoverPage";

export default CoverPage;
