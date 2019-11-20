<template>
  <div id="app">


<!--      <yandex-map-->
<!--              :coords="[54.62896654088406, 39.731893822753904]"-->
<!--              zoom="10"-->
<!--              style="width: 600px; height: 600px;"-->
<!--              :cluster-options="{-->
<!--    1: {clusterDisableClickZoom: true}-->
<!--  }"-->
<!--              :behaviors="['ruler']"-->
<!--              :controls="['trafficControl']"-->
<!--              :placemarks="placemarks"-->
<!--      map-type="hybrid"-->
<!--      @map-was-initialized="initHandler"-->
<!--      >-->

<!--      <ymap-marker-->
<!--              marker-type="placemark"-->
<!--              :coords="[54.7, 39.7]"-->
<!--              hint-content="Hint content 1"-->
<!--              :balloon="{header: 'header', body: 'body', footer: 'footer'}"-->
<!--              :icon="{color: 'green', glyph: 'cinema'}"-->
<!--              cluster-name="1"-->
<!--      ></ymap-marker>-->

<!--      <ymap-marker-->
<!--              marker-type="placemark"-->
<!--              :coords="[54.6, 39.8]"-->
<!--              hint-content="Hint content 1"-->
<!--              :balloon="{header: 'header', body: 'body', footer: 'footer'}"-->
<!--              :icon="{color: 'green', glyph: 'cinema'}"-->
<!--              cluster-name="1"-->
<!--      ></ymap-marker>-->

<!--      <ymap-marker-->
<!--              marker-type="circle"-->
<!--              :coords="[54.62896654088406, 39.731893822753904]"-->
<!--              circle-radius="1600"-->
<!--              hint-content="Hint content 1"-->
<!--              :marker-fill="{color: '#000000', opacity: 0.4}"-->
<!--              :marker-stroke="{color: '#ff0000', width: 5}"-->
<!--              :balloon="{header: 'header', body: 'body', footer: 'footer'}"-->
<!--      ></ymap-marker>-->

<!--      </yandex-map>-->








<!--      <yandex-map class="map-style" :coords="coords"  zoom="11">-->
<!--          <ymap-marker-->
<!--                  marker-id="123"-->
<!--                  :coords="coords"-->
<!--                  :icon="markerIcon"-->
<!--          />-->
<!--          <ymap-marker-->
<!--                  marker-type="circle"-->
<!--                  :coords="[54, 39]"-->
<!--                  circle-radius="1600"-->
<!--                  hint-content="Hint content 1"-->
<!--                  :marker-fill="{color: '#000000', opacity: 0.4}"-->
<!--                  :marker-stroke="{color: '#ff0000', width: 5}"-->
<!--                  :balloon="{header: 'header', body: 'body', footer: 'footer'}"-->
<!--          ></ymap-marker>-->
<!--          <ymap-marker-->
<!--                  marker-type="polygon"-->
<!--                  :coords="[[-->
<!--                  [54.0624340, 38.9186890],-->
<!--                  [54.0636400, 38.9976532],-->
<!--                  [54.0366965, 39.058057],-->
<!--                  [54.0169804, 38.9749939],-->
<!--                  [54.0624340, 38.9166290]],-->
<!--                  []]"-->
<!--                  hint-content="Hint content 1 polygon"-->
<!--                  :marker-fill="{color: '#000000', opacity: 0.6}"-->
<!--                  :marker-stroke="{color: '#7CFC00', width: 3}"-->
<!--                  :balloon="{header: 'header polygon', body: 'body polygon', footer: 'footer polygon'}"-->
<!--          ></ymap-marker>-->
<!--      </yandex-map>-->
      <div id="map" style="width: 100%; height: 800px;"></div>
  </div>
</template>

<script>
    // import  {yandexMap, ymapMarker}  from 'vue-yandex-maps'


export default {


    name: 'app',
  data() {
    return {
        coords: [54, 39],
        markerIcon: {
            layout: 'default#imageWithContent',
            imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
            imageSize: [43, 43],
            imageOffset: [0, 0],
            content: '123 v12',
            contentOffset: [0, 15],
            contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        }
    }
  },
  components: {
      // yandexMap,
      // ymapMarker
  },
  // methods: {
  //   src: function() {
  //     return this.url+"&origin="+this.original+"&destination="+this.destination;
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
    .map-style {
        width: 600px;
        height: 600px
    }
</style>
