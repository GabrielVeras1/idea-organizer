import styles from "./CategoryList.module.css";

function CategoryList({ categories, activeCategory, onCategorySelect }) {
  return (
    <nav aria-label="Idea categories">
      <ul className={styles.list}>
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <li key={category}>
              <button
                type="button"
                className={`${styles.item} ${isActive ? styles.active : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => onCategorySelect(category)}
              >
                <span>{category}</span>
                <span className={styles.itemMeta}>
                  {isActive ? "Current" : "Open"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CategoryList;
