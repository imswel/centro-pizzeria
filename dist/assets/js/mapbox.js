mapboxgl.accessToken = 'pk.eyJ1IjoiaW1zd2VsIiwiYSI6ImNrNTE1dThxazBscDYzZXFucDFsZnFnaTIifQ.T4HFwTvFB3WqO59kbaJMQQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/imswel/ck517e4if01qw1cqwio0czta8',
  center: [4.348547, 50.847639],
  zoom: 17
});
map.on("load", function() {
  map.loadImage(
    "../assets/img/icon/mappointer-icon.png",
    function(error, image) {
      if (error) throw error;
      map.addImage("poi", image);
      map.addLayer({
        id: "points",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [4.348547, 50.847639]
                }
              }
            ]
          }
        },
        layout: {
          "icon-image": "poi",
          "icon-size": 0.08
        }
      });
    }
  );
});
