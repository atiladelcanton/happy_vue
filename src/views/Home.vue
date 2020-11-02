<template>
  <div class="home">
    <div class="container">
      <div class="row">
      <div class="col-md-4">
        <h1><img alt="Happy" src="../assets/logo.png" class="logo"></h1>
        <!-- INICIO CHAMADA -->
        <div class="chamada">
          <h2>Leve felicidade para o mundo</h2>
        </div>
        <!-- FINAL CHAMADA -->
        <p class="sub-chamada">Visite orfanatos e mude o dia de muitas crianças.</p>
      </div>  <!-- FINAL COL-MD-4 -->
      <div class="col-md-8">
          <img src="../assets/childrens.png"  alt="Imagem Crianças"  class="childrens float-left"/>
          <div class="side-right">
              <span>
                <strong>Campinas</strong>
                São Paulo
            </span>
            <router-link to="/localization" class="btn-happy btn-gold pull-right">></router-link>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
