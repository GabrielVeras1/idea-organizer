import { useState } from "react";
import MainContent from "./components/MainContent/MainContent";
import NewIdeaView from "./components/NewIdeaView/NewIdeaView";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";

const categories = ["Video/Edit", "Coding", "Social Media"];

const ideas = [
  {
    id: "idea-1",
    title: "Creator workflow dashboard",
    description:
      "A focused workspace for planning edit batches, collecting raw concepts, and tracking which experiments are ready to publish.",
    inspiration:
      "Inspired by calm browser sidebars, creative studio boards, and the feeling of moving through projects without clutter.",
    category: "Video/Edit",
    createdAt: "2026-04-08",
  },
  {
    id: "idea-2",
    title: "Prompt playground for app concepts",
    description:
      "A simple surface for testing product prompts, saving useful outputs, and turning rough sparks into clearer software ideas.",
    inspiration:
      "Notebook margins, sticky notes on a monitor, and the quick iteration feel of prototyping in small loops.",
    category: "Coding",
    createdAt: "2026-04-07",
  },
  {
    id: "idea-3",
    title: "Series concept bank",
    description:
      "A place to collect recurring themes, opening hooks, and repeatable content formats for short-form social posts.",
    inspiration:
      "Moodboards, creator calendars, and those moments when one good angle could become a whole series.",
    category: "Social Media",
    createdAt: "2026-04-06",
  },
  {
    id: "idea-4",
    title: "Editing style experiments",
    description:
      "Capture transitions, pacing notes, and visual rhythm ideas for future edits without losing them in scattered notes.",
    inspiration:
      "Fast cuts paired with clean interfaces that still feel soft, premium, and easy to scan.",
    category: "Video/Edit",
    createdAt: "2026-04-05",
  },
];

function App() {
  const [currentView, setCurrentView] = useState("browse");
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [draftCategory, setDraftCategory] = useState(categories[0]);

  const visibleIdeas = ideas.filter((idea) => idea.category === activeCategory);
  const highlightedCategory =
    currentView === "create" ? draftCategory : activeCategory;

  const handleCategorySelect = (category) => {
    if (currentView === "create") {
      setDraftCategory(category);
      return;
    }

    setActiveCategory(category);
  };

  const handleCreateIdea = () => {
    setDraftCategory(activeCategory);
    setCurrentView("create");
  };

  const handleCancelCreate = () => {
    setCurrentView("browse");
  };

  const handleSaveIdea = () => {};

  return (
    <div className={styles.appShell}>
      <div className={styles.appFrame}>
        <Sidebar
          appName="Idea Organizer"
          categories={categories}
          activeCategory={highlightedCategory}
          onCategorySelect={handleCategorySelect}
          onCreateIdea={handleCreateIdea}
        />
        {currentView === "create" ? (
          <NewIdeaView
            categories={categories}
            selectedCategory={draftCategory}
            onCategoryChange={setDraftCategory}
            onCancel={handleCancelCreate}
            onSave={handleSaveIdea}
          />
        ) : (
          <MainContent
            activeCategory={activeCategory}
            ideas={visibleIdeas}
            totalIdeas={visibleIdeas.length}
          />
        )}
      </div>
    </div>
  );
}

export default App;
