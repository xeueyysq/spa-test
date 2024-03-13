function initMap() {
    let center = [56.736345, 37.162183];
  
    function init() {
      let map = new ymaps.Map('map', {
        center: center,
        zoom: 13
      });
  
      map.controls.remove('geolocationControl');
      map.controls.remove('searchControl');
      map.controls.remove('trafficControl');
      map.controls.remove('typeSelector');
      map.controls.remove('fullscreenControl');
      map.controls.remove('rulerControl');
    }
  
    ymaps.ready(init);
  }  