import CategoryList from "../CategoryList/CategoryList";
import styles from "./Sidebar.module.css";

function Sidebar({
  appName,
  categories,
  activeCategory,
  onCategorySelect,
  onCreateIdea,
}) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brandBlock}>
        <p className={styles.eyebrow}>Creative workspace</p>
        <h1 className={styles.title}>{appName}</h1>
        <p className={styles.subtitle}>
          Your brain is for having ideas, not storing them. Store them here.
        </p>
      </div>

      <button
        className={styles.actionButton}
        type="button"
        onClick={onCreateIdea}
      >
        + New Idea
      </button>

      <div className={styles.navigation}>
        <p className={styles.sectionLabel}>Categories</p>
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onCategorySelect={onCategorySelect}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
