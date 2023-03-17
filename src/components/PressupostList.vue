<template>
  <div class="mt-5 mt-md-0">
    <div class="ordenar row flex-column flex-lg-row justify-content-around align-items-baseline">
      <input class="col-12 col-lg-5 rounded-3 mb-3" type="text" placeholder="Buscador" v-model="buscar">
      <div class="col-12 col-lg-7 d-flex justify-content-end align-items-baseline">
        <p class="text-center align-self-center"><b>Ordenar por | </b></p>
        <button class="btn btn-secondary mx-1 mb-3" :class="{'btn-dark': tipo == 2}" @click="alfabeticamente">Nombre</button>
        <button class="btn btn-secondary mb-3" :class="{'btn-dark': tipo == 3}" @click="fecha">Fecha</button>
        <button class="btn btn-secondary ms-1 mb-3" :class="{'btn-dark': tipo == 1}" @click="reinicio">Reiniciar</button>
      </div>
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
      tipo: 1,
      buscar: ''
    };
  },
  methods: {
    alfabeticamente() {
      this.copia = [...this.presupuestos].sort((a, b) => a.presupuesto.localeCompare(b.presupuesto));
      this.tipo = 2;
      this.filtrar(this.buscar, true);
    },
    fecha() {
      this.copia = [...this.presupuestos].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      this.tipo = 3;
      this.filtrar(this.buscar, true);
    },
    reinicio() {
      this.copia = [...this.presupuestos];
      this.tipo = 1;
      this.filtrar(this.buscar, true);
    },
    filtrar(valor, ordenar = false){
      let nuevo = [...this.presupuestos];

      if(this.tipo == 2){
        if(!ordenar){
          this.alfabeticamente()
        }
        nuevo = this.copia; 
      } else if(this.tipo == 3){
        if(!ordenar){
          this.fecha()
        } 
        nuevo = this.copia; 
      }

      this.copia = nuevo.filter(item => item.presupuesto.toLowerCase().includes(valor.toLowerCase()))
    }
  },
  watch: {
    presupuestos(){
      if (this.tipo == 1) this.reinicio();
      else if (this.tipo == 2) this.alfabeticamente();
      else if (this.tipo == 3) this.fecha();
    },
    buscar(valor){
      this.filtrar(valor);
    }
  },
};
</script>

<style scoped>
/* .ordenar button:focus {
  background: #000;
} */
</style>