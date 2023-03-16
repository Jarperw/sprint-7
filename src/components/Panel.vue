<template>
  <div>
    <div class="caja text-center py-4 border border-3 border-dark rounded-4">
      <div class="paginas">
        <label for="paginas">Número de páginas</label>
        <button @click="paginas++">
          <img src="../assets/plus-solid.svg" />
        </button>
        <input id="paginas" type="number" v-model="paginas" />
        <button @click="paginas--">
          <img src="../assets/minus-solid.svg" />
        </button>
      </div>
      <div class="idiomas">
        <label for="idiomas">Número de idiomas</label>
        <button @click="idiomas++">
          <img src="../assets/plus-solid.svg" />
        </button>
        <input id="idiomas" type="number" v-model="idiomas" />
        <button @click="idiomas--">
          <img src="../assets/minus-solid.svg" />
        </button>
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
  width: 18em;
  right: 0.1em;
  animation-name: caja;
  animation-duration: 1s;
}

@keyframes caja {
  0% { width: 0; height: 0; }
  100% { width: 18em; height: 10.5em; }
}

.paginas,
.idiomas {
  margin: 1.1em;
  animation-name: info;
  animation-duration: 1s;
}

@keyframes info {
  0% { opacity: 0; width: 3em; }
  70% { opacity: 0; font-size: small; }
  100% { opacity: 5; }
}

label {
  margin-right: 0.5em;
}

input[type="number"] {
  width: 15%;
  border: none;
  vertical-align: middle;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

button {
  border-radius: 30% !important;
  padding: 0.1em 0.3em;
  background: #ff7300;
  border: #ff7300;
}

button:hover {
  background: #ff5500;
  border: #ff5500;
}

button:active {
  background: #ff7300;
  border: #ff7300;
}

img {
  width: 1.3em;
  margin-bottom: 0.13em;
}
</style>