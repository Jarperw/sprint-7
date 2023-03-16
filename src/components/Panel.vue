<template>
  <div>
    <div class="caja text-center py-4 border border-3 border-dark rounded-4">
      <div class="paginas">
        <label for="paginas">Número de páginas</label>
        <input id="paginas" type="number" v-model="paginas" />
      </div>
      <div class="idiomas">
        <label for="idiomas">Número de idiomas</label>
        <input id="idiomas" type="number" v-model="idiomas" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  data() {
    return {
      paginas: 1,
      idiomas: 1,
      contador: 0,
    };
  },
  methods: {
    calcular() {
      this.contador = this.paginas * this.idiomas * 30;
      this.$emit("total", this.contador);
    },
  },
  watch: {
    paginas(valor) {
      if (valor < 1) this.paginas = 1;
      this.calcular();
    },
    idiomas(valor) {
      if (valor < 1) this.idiomas = 1;
      this.calcular();
    },
  },
  created() {
    this.calcular();
  },
};
</script>

<style>
.caja {
  position: relative;
  width: 24.5em;
  right: 0.1em;
}

.paginas,
.idiomas {
  margin: 1.1em;
}

label {
  margin-right: 0.5em;
}

input[type="number"] {
  height: 1.6em;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>