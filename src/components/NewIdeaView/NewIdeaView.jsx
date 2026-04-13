import styles from "./NewIdeaView.module.css";

function NewIdeaView({
  categories = [],
  selectedCategory,
  onCategoryChange,
  onCancel,
  onSave,
}) {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>New idea</p>
        <h2 className={styles.title}>Capture the next spark</h2>
        <p className={styles.description}>
          A presentational scaffold for the future creation flow.
        </p>
      </div>

      <form className={styles.form}>
          <label className={styles.field}>
          <span className={styles.label}>Category</span>
          <select
            className={styles.input}
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Idea name / phrase</span>
          <input
            className={styles.input}
            type="text"
            placeholder="Give the idea a clear title"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Brain dump</span>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            placeholder="Write the rough thought while it is still fresh"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Inspiration</span>
          <input
            className={styles.input}
            type="text"
            placeholder="Add references, links, feelings, or source material"
          />
        </label>

        <div className={styles.actions}>
          <button
            className={styles.secondaryButton}
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button className={styles.primaryButton} type="button" onClick={onSave}>
            Save Idea
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewIdeaView;
