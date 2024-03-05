import React from "react";

export function useSticky() {
  const [isVisible, setIsVisible] = React.useState(true);
  React.useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("data-scroll-listener", "");
    document.body.insertBefore(div, document.body.firstChild);
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    });
    observer.observe(div);
    return () => {
      document.body.removeChild(div);
      observer.unobserve(div);
    };
  }, []);
  return {
    isVisible,
  };
}
