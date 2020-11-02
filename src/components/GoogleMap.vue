<template>
    <div>
        <MglMap
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :center="[-47.0439, -22.8951]"
        :minZoom="zoom"
        class="map">
          <MglNavigationControl position="top-right" />
          <MglGeolocateControl position="top-right" />
          <MglMarker v-for="(map,index) in maps" :key="index"  :coordinates="map.coordinates" color="yellow">
              <img alt="Happy" src="../assets/local.png" class="marker" slot="marker">
              <MglPopup>
                    <div>
                      <h2 class="titlePopup">{{map.title}}</h2>
                    </div>
              </MglPopup>
          </MglMarker>
        </MglMap>
    </div>
</template>
<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglGeolocateControl, MglNavigationControl, MglMarker, MglPopup } from 'vue-mapbox'
export default {
  name: 'GoogleMap',
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker,
    MglPopup
  },
  data () {
    return {
      accessToken: 'pk.eyJ1IjoiYXRpbGFyYW1wYXpvIiwiYSI6ImNrZ3pyb3NtYTAyZmcycW93cnc5ajE3YmQifQ.5M4HZoaNomKH1KPZruXovA',
      mapStyle: 'mapbox://styles/atilarampazo/ckgzsqsf21mn119qjbsrgc3yu',
      maps: [
        { coordinates: [-47.0439, -22.8951], title: 'Minha Cada' },
        { coordinates: [-47.0536945, -22.8837398], title: 'Casa da Mãe' },
        { coordinates: [-47.05002593, -22.8813769], title: 'Supermercado Taquaral' }
      ],
      zoom: 12
    }
  },
  created () {
    this.mapbox = Mapbox
  }
}
</script>
