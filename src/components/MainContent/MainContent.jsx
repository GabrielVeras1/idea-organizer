import IdeaGrid from "../IdeaGrid/IdeaGrid";
import styles from "./MainContent.module.css";

function MainContent({ activeCategory, ideas, totalIdeas }) {
  return (
    <main className={styles.mainContent}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Browse ideas</p>
          <h2 className={styles.title}>{activeCategory}</h2>
        </div>
        <div className={styles.countPill}>{totalIdeas} ideas</div>
      </div>

      <div className={styles.board}>
        <IdeaGrid ideas={ideas} />
      </div>
    </main>
  );
}

export default MainContent;
