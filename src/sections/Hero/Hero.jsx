import linkedinLight from '../../assets/linkedin-light.svg';
import twitterLight from '../../assets/twitter-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import heroImg from '../../assets/lucas_profile.jpg';
import styles from './HeroStyles.module.css';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Lucas
          <br />
          Fontoura
        </h1>
        <h2>Full-Stack Developer and Data Analysis</h2>
        <span>
          <a href="https://github.com/DevLucasFontoura" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-fontoura-706a45212/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am passionate about technology, I am always looking for new challenges to improve my skills and create innovative solutions.
        </p>
        <div>
          {/* <a href={CV} download>
            <button className="hover">Curriculum - BR</button>
          </a>
          <a href={CV} download>
            <button className="hover">Curriculum - US</button>
          </a> */}
          <a href="https://www.linkedin.com/in/lucas-fontoura-706a45212/" target="_blank">
            <button className="hover">Curriculum - BR</button>
          </a>
          <a href="https://www.linkedin.com/in/lucas-fontoura-706a45212/" target="_blank">
            <button className="hover">Curriculum - US</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
