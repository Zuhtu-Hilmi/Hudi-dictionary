const dictionary = {
    "example": "örnek",
    "one": "bir",
    "two": "iki",
    "three": "üç",
    "four": "dört",
    "five": "beş",
    "six": "altı",
    "seven": "yedi",
    "eight": "sekiz",
    "nine": "dokuz",
    "ten": "on",
    "apple": "elma",
    "book": "kitap",
    "computer": "bilgisayar",
    "happy": "mutlu",
    "sad": "üzgün",
    "angry": "sinirli",
    "friend": "arkadaş",
    "sun": "güneş",
    "water": "su",
    "house": "ev",
    "dictionary": "sözlük"
  };
  
  
  function searchDictionary() {
    const wordInput = document.getElementById('kelime').value;
    const definition = dictionary[wordInput.toLowerCase()];
  
    // Eğer kelime input boş ise, tüm girişleri temizle
    if (!wordInput.trim()) {
      clearWordList();
      return;
    }
  
    const wordListContainer = document.getElementById('wordList');
  
    // Clear previous entries
    clearWordList();
  
    if (definition) {
      const wordEntry = document.createElement('div');
      wordEntry.classList.add('word');
      wordEntry.innerHTML = `<h2 style="color: red;">${wordInput}</h2><hr><p><strong>Definition:</strong> ${definition}</p>`;
      wordListContainer.appendChild(wordEntry);
    } else {
      const notFoundEntry = document.createElement('div');
      notFoundEntry.classList.add('word');
      notFoundEntry.innerHTML = `<h2 style="color: red;">${wordInput}</h2><p>Word not found.</p>`;
      wordListContainer.appendChild(notFoundEntry);
    }
  }
  
  function clearWordList() {
    const wordListContainer = document.getElementById('wordList');
    wordListContainer.innerHTML = "";
  }
  
  //////////////////////////*document.getElementById('changeThemeButton').onclick = *///////////////////////////////////////////////

if (localStorage.getItem("selectedTheme") == "light_style.css") {
  document.getElementById('theme').href = "light_style.css";
} else {
  document.getElementById('theme').href = "dark_style.css";
}

  function changeTheme() {
    const currentHref = document.getElementById('theme').href;
    
    if (currentHref.endsWith("dark_style.css")) {
      document.getElementById('theme').href = "light_style.css";
      localStorage.setItem("selectedTheme", "light_style.css");
    } else {
      document.getElementById('theme').href = "dark_style.css";
      localStorage.setItem("selectedTheme", "dark_style.css");
    }
  };