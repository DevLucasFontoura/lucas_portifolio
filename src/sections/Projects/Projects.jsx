import styles from './ProjectsStyles.module.css';
import spain from '../../assets/spain.png';
import placa from '../../assets/license-plate.png';
import development from '../../assets/web-development.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={spain}
          link="https://github.com/DevLucasFontoura/Convalidacao_Espanha"
          h3="Convalidação Espanhã"
          p="Automação"
        />
        <ProjectCard
          src={placa}
          link="https://github.com/DevLucasFontoura/Placa_Amarela"
          h3="Placa Amarela"
          p="Automação"
        />
        <ProjectCard
          src={development}
          link=""
          h3="SISMOC"
          p="APP"
        />
      </div>
    </section>
  );
}

export default Projects;
