document.addEventListener("DOMContentLoaded", function() {
  loadPage('resume');  
  startTimer();
});

function loadPage(page) {
  fetch(`./pages/${page}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
      if (page === 'map') {
        initMap();
      }
      history.pushState(null, null, '?page=' + page);
    });
}