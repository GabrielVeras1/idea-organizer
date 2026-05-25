import { useState } from "react";
import styles from "./NewIdeaView.module.css";

function NewIdeaView({
  categories = [],
  title,
  description,
  inspiration,
  selectedCategory,
  onTitleChange,
  onDescriptionChange,
  onInspirationChange,
  onCategoryChange,
  onCancel,
  onSave,
}) {
  const [titleError, setTitleError] = useState("");

  const handleTitleChange = (event) => {
    const nextTitle = event.target.value;

    onTitleChange(nextTitle);

    if (titleError && nextTitle.trim()) {
      setTitleError("");
    }
  };

  const handleSave = () => {
    if (!title.trim()) {
      setTitleError("Title is required");
      return;
    }

    setTitleError("");
    onSave({
      title: title.trim(),
      description: description.trim(),
      inspiration: inspiration.trim(),
      category: selectedCategory,
    });
  };

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
            className={`${styles.input} ${titleError ? styles.inputError : ""}`}
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Give the idea a clear title"
            aria-invalid={titleError ? "true" : undefined}
            aria-describedby={titleError ? "title-error" : undefined}
          />
          {titleError ? (
            <span className={styles.errorText} id="title-error">
              {titleError}
            </span>
          ) : null}
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Brain dump</span>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            value={description}
            onChange={(event) => onDescriptionChange(event.target.value)}
            placeholder="Write the rough thought while it is still fresh"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Inspiration</span>
          <input
            className={styles.input}
            type="text"
            value={inspiration}
            onChange={(event) => onInspirationChange(event.target.value)}
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
          <button
            className={styles.primaryButton}
            type="button"
            onClick={handleSave}
          >
            Save Idea
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewIdeaView;
