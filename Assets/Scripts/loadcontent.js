function loadMarkdown(filePath, elementId) {
  const el = document.getElementById(elementId);
  if (!el) return; // <- stop if the element doesn't exist

  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error('HTTP error ' + response.status);
      return response.text();
    })
    .then(md => {
      el.innerHTML = marked.parse(md);
    })
    .catch(error => console.error('Error loading markdown:', error));
}

function loadHTML(filePath, elementId) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
}

/* ---- Calls for Main pages ---- */
loadMarkdown('/Markdown/HomePage.md', 'HomePage');

/* ---- Calls for Artwork ----*/
loadMarkdown('/Markdown/Artwork/index.md', 'Artwork');
loadMarkdown('/Markdown/Artwork/ScratchBoard.md', 'Scratch');
loadMarkdown('/Markdown/Artwork/Paintings.md', 'Paint');
loadMarkdown('/Markdown/Artwork/Photography.md', 'Photo');


/* ---- Calls for Currently Showing ----*/
loadMarkdown('/Markdown/CurrentlyShowing/CurrentlyShowing.md', 'CurrentlyShowing');

/* ---- Calls for Available Work ----*/
loadMarkdown('/Markdown/AvailableWork/AvailableWork.md', 'AvailableWork');

/* ---- Calls for About Artist ---- */
loadMarkdown('/Markdown/AboutArtist/ArtistStatement.md', 'ArtistStatement');
loadMarkdown('/Markdown/AboutArtist/Bio.md', 'Bio');

/* --- Calls for Contact ----*/
loadMarkdown('/Markdown/Contact/Contact.md', 'Contact');

/* ---- Calls for other files ---- */
loadHTML('/Assets/header.html', 'header');
