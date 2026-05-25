import styles from "./IdeaCard.module.css";

function IdeaCard({ idea }) {
  return (
    <article className={styles.card}>
      <div className={styles.metaRow}>
        <div className={styles.tagGroup}>
          <span className={styles.categoryTag}>{idea.category}</span>
          {idea.isSample ? (
            <span className={styles.sampleTag}>Sample</span>
          ) : null}
        </div>
        <span className={styles.date}>{idea.createdAt}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{idea.title}</h3>

        <div className={styles.copyBlock}>
          <p className={styles.label}>Brain dump</p>
          <p className={styles.text}>{idea.description}</p>
        </div>

        <div className={styles.copyBlock}>
          <p className={styles.label}>Inspiration</p>
          <p className={styles.text}>{idea.inspiration}</p>
        </div>
      </div>
    </article>
  );
}

export default IdeaCard;
