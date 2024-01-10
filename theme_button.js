
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