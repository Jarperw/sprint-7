<template>
  <div class="mt-5 mt-md-0">
    <b-alert
      show
      v-for="(item, index) in presupuestos"
      :key="index"
      variant="secondary"
    >
      <div class="mx-5 d-flex justify-content-around">
        <span><b>Presupuesto: </b>{{ item.presupuesto | mayuscula }}</span>
        <span><b>Cliente: </b>{{ item.cliente | mayuscula}}</span>
        <span><b>Precio: </b>{{ item.total }} €</span>
      </div>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "PressupostList",
  props: ["presupuestos"],
  filters:{
    mayuscula(valor){
        return valor.charAt(0).toUpperCase() + valor.slice(1)
    }
  }
};
</script>