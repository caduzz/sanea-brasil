import { useNavigate } from "react-router-dom";

export function NavButton({ children, link, href, ...rest }) {
  const navigate = useNavigate();
  
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (id) => {svg
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => handleScroll(id), 100);
    } else {
      handleScroll(id);
    }
  };
  
  return (
    <a
      href={link ? link : href}
      
      onClick={(e) => {
        if (link) {
          e.preventDefault();
          handleNavigation(href);
        }
      }}
      className="text-white text-lg font-light font-[Bahnschrift]"
      {...rest}
    >
      {children}
    </a>
  );
}