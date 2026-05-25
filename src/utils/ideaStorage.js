const STORAGE_KEY = "idea-organizer:ideas";

function canUseLocalStorage() {
  try {
    return typeof window !== "undefined" && Boolean(window.localStorage);
  } catch {
    return false;
  }
}

export function loadIdeas() {
  if (!canUseLocalStorage()) {
    return [];
  }

  try {
    const savedIdeas = window.localStorage.getItem(STORAGE_KEY);

    if (!savedIdeas) {
      return [];
    }

    const parsedIdeas = JSON.parse(savedIdeas);

    return Array.isArray(parsedIdeas) ? parsedIdeas : [];
  } catch {
    return [];
  }
}

export function saveIdeas(ideas) {
  if (!canUseLocalStorage()) {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
  } catch {
    // The app should keep working if storage is blocked or full.
  }
}
