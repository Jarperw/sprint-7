<template>
  <div class="container-fluid mt-5">
    <div class="row">

      <div class="col-12 col-md-5 col-lg-4 col-xxl-3">  
        <form @submit.prevent="addPresupuestos()">
          <div class="nombre d-flex mb-1">
            <label for="nom"><b>Presupuesto:</b></label>
            <input class="ms-2" type="text" id="nom" placeholder="Nombre Presupuesto" v-model="presupuesto" required>
          </div>
          <div class="cliente d-flex mb-3">
            <label for="clie"><b>Cliente:</b></label>
            <input class="ms-5" type="text" id="clie" placeholder="Nombre Cliente" v-model="cliente" required>
          </div>
          <button class="btn btn-dark mb-5">Guardar Presupuesto</button>
        </form>
          <div class="servicios">
            <p><b>Servicios: </b></p>
            <p>¿Qué quieres hacer?</p>
            <label>
              <input type="checkbox" value="500" v-model.number="precios" v-model="web" @change="checkWeb($event)"/>
              Una página web (500 €)
            </label>
            <Panel 
              v-if="precios.includes(500)" 
              @total="totalPanel = $event"
              @paginas="paginas = $event"
              @idiomas="idiomas = $event"
              @modificadoPaginas="modificadoPaginas"
              @modificadoIdiomas="modificadoIdiomas"
            ></Panel>
            <label>
              <input type="checkbox" value="300" v-model.number="precios" v-model="seo" @change="checkSeo($event)"/>
              Una consultoria SEO (300 €)
            </label>
            <label>
              <input type="checkbox" value="200" v-model.number="precios" v-model="ads" @change="checkAds($event)"/>
              Una campaña de Google Ads (200 €)
            </label>
            <p>Precio: {{ suma }} €</p>
            <small :v-show="error" class="text-danger">{{error}}</small>
          </div>
      </div>

      <div class="col-12 col-md">
        <Pressupost-list :presupuestos="presupuestos"></Pressupost-list>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from "../components/Panel.vue";
import PressupostList from '../components/PressupostList.vue';

export default {
  components: { Panel, PressupostList },
  name: "Home",
  data() {
    return {
      precios: [],
      total: 0,
      totalPanel: 0,
      presupuesto: '',
      cliente: '',
      presupuestos: [],
      error: '',
      paginas: 1,
      idiomas: 1,
      web: false,
      seo: false,
      ads: false
    };
  },
  computed: {
    suma() {
      if(!this.precios.includes(500)) this.totalPanel = 0;
      return this.total = this.precios.reduce((contador, valor)=> contador + valor, this.totalPanel)
    }
  },
  methods: {
    addPresupuestos(){
      if(this.total > 0){
        this.presupuestos.push(
          { presupuesto: this.presupuesto, cliente: this.cliente, total: this.total, fecha: new Date().getTime()}
        );
        this.error = '';
        this.presupuesto = '';
        this.cliente = '';
        this.precios = [];
      }else{
        this.error = 'Elige minimo un servicio';
      }
    },
    addQuery(){
      this.$router.replace({
        query:{
          paginaWeb: this.web,
          campaniaSeo: this.seo,
          campaniaAds: this.ads,
          paginas: this.paginas,
          idiomas: this.idiomas
        }
      })
    },
    checkWeb(e) {
      this.addQuery()
    },
    checkSeo(e) {
      this.addQuery()
    },
    checkAds(e) {
      this.addQuery()
    },
    modificadoPaginas(){
      this.addQuery()
    },
    modificadoIdiomas(){
      this.addQuery()
    }, 
  },
  watch: {
    web(newValue) {
      if(newValue && !this.precios.includes(500)){
        this.precios.push(500);
      }else if(!newValue && this.precios.includes(500)){
        
      }
    },
    seo(newValue) {
      if(newValue && !this.precios.includes(300)){
        this.precios.push(300);
      }else if(!newValue && this.precios.includes(500)){

      }
    },
    ads(newValue) {
      if(newValue && !this.precios.includes(200)){
        this.precios.push(200);
      }else if(!newValue && this.precios.includes(500)){

      }
    },
  },
  mounted(){
      if (this.$route.query.paginaWeb === "true") {
          this.web = true;
        }
        if (this.$route.query.campaniaSeo === "true") {
          this.seo = true;
        }
        if (this.$route.query.campaniaAds === "true") {
          this.ads = true;
        }
  },
};
</script>

<style scoped>
.servicios label {
  display: block;
  margin-top: 0.6em;
  margin-bottom: 0.6em;
}

.nombre input, 
.cliente input, 
select{
  border: none;
  border-bottom: 1px solid #aaa;
  outline: none;
}
</style>