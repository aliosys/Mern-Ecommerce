import React, {useState, useEffect, useRef} from 'react';
// import './styles.css';

const HeroSection = ({heroTitle, heroContent}) => {
  const [windowOffset, setWindowOffset] = useState(0);
  const introRef = useRef(null);

  const handleScrollResize = () => {
    if (introRef.current) {
      const {top, bottom} = introRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const offset = Math.max(
        0,
        top > 0
          ? windowHeight - top
          : bottom < windowHeight
          ? bottom
          : windowHeight,
      );
      setWindowOffset(offset);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollResize);
    window.addEventListener('resize', handleScrollResize);

    return () => {
      window.removeEventListener('scroll', handleScrollResize);
      window.removeEventListener('resize', handleScrollResize);
    };
  }, []);

  return (
    <div>
      <figure className="intro" ref={introRef}>
        <img src="/images/banner-main.jpeg" alt="" />
        <figcaption className="caption">
          <h1>{heroTitle}</h1>
        </figcaption>
        <span className="overlay" style={{height: windowOffset}}>
          <svg
            version="1.1"
            id="circle"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 500 250"
            xmlSpace="preserve"
            preserveAspectRatio="none">
            <path
              fill="#FFFFFF"
              d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
            />
          </svg>
        </span>
      </figure>
      <article className="copy">
        <p className="teaser">{heroContent}</p>
      </article>
    </div>
  );
};

export default HeroSection;
