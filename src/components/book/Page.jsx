import { forwardRef } from "react";

const Page = forwardRef(({ number, className = "", children }, ref) => {
  return (
    <div className={`book-page ${className}`} ref={ref}>
      <div className="book-page-content">{children}</div>
      {number != null && <div className="book-page-number">{number}</div>}
    </div>
  );
});

Page.displayName = "Page";

export default Page;
