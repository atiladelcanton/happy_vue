<template>
    <div class="localization">
        <div class="container-fluid">
            <div class="row full-height">
                <div class="col-md-3 side sidebar">
                    <h1><img alt="Happy" src="../assets/local.png"></h1>
                    <h2>Escolha um orfanato no mapa</h2>
                    <h3>Muitas crianças estão esperando a sua visita :)</h3>
                        <span class="city">
                            <strong>Campinas</strong>
                            São Paulo
                        </span>
                </div>
                <div class="col-md-9 map">
                        <router-link to="/new-orphanage" class="btn-happy btn-happy-sm btn-gold btn-add">+</router-link>
                        <google-map />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GoogleMap from '../components/GoogleMap'
export default {
  name: 'Localization',
  components: {
    GoogleMap
  }
}
</script>
