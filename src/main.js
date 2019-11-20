import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
//
// var DG;
//
// DG.then(function() {
//   var map,
//       coords1 = [
//         [43.25846,76.92455],
//         [43.25715,76.92309],
//         [43.24843,76.91936],
//         [43.25268,76.92567]
//       ],
//       coords2 = [
//         [43.2595,76.93455],
//         [43.25915,76.92309],
//         [43.2493,76.92946],
//         [43.25768,76.9367]
//       ],
//       coords3 = [
//         [43.260846,76.93455],
//         [43.26015,76.93309],
//         [43.25043,76.92936],
//         [43.25368,76.93567]
//       ],
//       polygons = DG.featureGroup();
//
//   map = DG.map('map', {
//     center: [54.98, 82.89],
//     zoom: 13
//   });
//
//   // Добавление многоугольников в группу
//   DG.polygon(coords1, {color: "blue"}).addTo(polygons);
//   DG.polygon(coords2, {color: "red"}).addTo(polygons);
//   DG.polygon(coords3, {color: "green"}).addTo(polygons);
//
//   // Добавление группы на карту
//   polygons.addTo(map);
//
//   // Подстройка границ карты
//   map.fitBounds(polygons.getBounds());
//
//   map.locate({setView: true, watch: true})
//       .on('locationfound', function(e) {
//         DG.marker([e.latitude, e.longitude]).addTo(map);
//       })
//       .on('locationerror', function() {
//         DG.popup()
//             .setLatLng(map.getCenter())
//             .setContent('Доступ к определению местоположения отключён')
//             .openOn(map);
//       });
// });