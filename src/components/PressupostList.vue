<template>
  <div class="mt-5 mt-md-0">
    <div class="ordenar d-flex justify-content-end">
      <p class="text-center align-self-center"><b>Ordenar por | </b></p>
      <button class="btn btn-secondary mx-1 mb-3" @click="alfabeticamente">Nombre</button>
      <button class="btn btn-secondary mb-3" @click="fecha">Fecha</button>
      <button class="btn btn-secondary ms-1 mb-3" @click="reinicio">Reiniciar</button>
    </div>

    <b-alert show v-for="(item, index) in copia" :key="index" variant="secondary">
      <div class="mx-2 mx-lg-5 d-flex flex-column flex-sm-row align-items-center justify-content-sm-around">
        <span><b>Presupuesto: </b>{{ item.presupuesto | mayuscula }}</span>
        <span><b>Cliente: </b>{{ item.cliente | mayuscula }}</span>
        <span><b>Precio: </b>{{ item.total }} €</span>
      </div>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "PressupostList",
  props: ["presupuestos"],
  filters: {
    mayuscula(valor) {
      return valor.charAt(0).toUpperCase() + valor.slice(1);
    },
  },
  data() {
    return {
      copia: this.presupuestos,
      orden: 1
    };
  },
  methods: {
    alfabeticamente() {
      this.copia = [...this.presupuestos].sort((a, b) => a.presupuesto.localeCompare(b.presupuesto));
      this.orden = 2;
    },
    fecha() {
      this.copia = [...this.presupuestos].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      this.orden = 3;
    },
    reinicio() {
      this.copia = [...this.presupuestos];
      this.orden = 1;
    },
  },
  watch: {
    presupuestos(){
      if (this.orden == 1) this.reinicio();
      else if (this.orden == 2) this.alfabeticamente();
      else if (this.orden == 3) this.fecha();
    }
  },
};
</script>

<style scoped>
.ordenar button:focus {
  background: #000;
}
</style>