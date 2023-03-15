<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
        <p>¿Que quieres hacer?</p>
        <label>
          <input type="checkbox" value="500" v-model.number="precios"/>
          Una paguina web (500€)
        </label>
        <label>
          <input type="checkbox" value="300" v-model.number="precios"/>
          Una consultoria SEO (300€)
        </label>
        <label>
          <input type="checkbox" value="200" v-model.number="precios"/>
          Una campaña de Google Ads (200€)
        </label>
        <p>Precio: {{ suma }}€</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      precios: [],
      total: "",
    };
  },
  computed: {
    suma(){
      return this.total = this.precios.reduce((contador, valor)=> contador + valor, 0)
    }
  },
};
</script>


<style scoped>
label {
  display: block;
  margin-top: 0.6em;
  margin-bottom: 0.6em;
}
</style>