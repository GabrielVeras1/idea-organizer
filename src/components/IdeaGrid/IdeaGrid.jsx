import IdeaCard from "../IdeaCard/IdeaCard";
import styles from "./IdeaGrid.module.css";

function IdeaGrid({ ideas }) {
  return (
    <section className={styles.grid} aria-label="Ideas">
      {ideas.map((idea) => (
        <IdeaCard key={idea.id} idea={idea} />
      ))}
    </section>
  );
}

export default IdeaGrid;
