<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-12 col-sm-7 col-md-5 col-lg-4 col-xxl-3">
        <p>¿Qué quieres hacer?</p>
        <label>
          <input type="checkbox" value="500" v-model.number="precios" />
          Una página web (500 €)
        </label>

        <Panel v-if="precios.includes(500)" @total="totalPanel = $event"></Panel>

        <label>
          <input type="checkbox" value="300" v-model.number="precios" />
          Una consultoria SEO (300 €)
        </label>
        <label>
          <input type="checkbox" value="200" v-model.number="precios" />
          Una campaña de Google Ads (200 €)
        </label>
        <p>Precio: {{ suma }}€</p>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from "../components/Panel.vue";

export default {
  components: { Panel },
  name: "Home",
  data() {
    return {
      precios: [],
      total: 0,
      totalPanel: 0,
    };
  },
  computed: {
    suma() {
      if(!this.precios.includes(500)) this.totalPanel = 0;
      return this.total = this.precios.reduce((contador, valor)=> contador + valor, this.totalPanel)
    },
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