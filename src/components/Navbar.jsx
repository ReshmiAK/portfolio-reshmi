const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
];

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header>
      <nav className="navbar">
        <a href="#home" className="logo">
          Reshmi A K
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
