<template>
  <h6>Lista de Productos</h6>
  <div class="product-list">
    <div class="product-grid">
      <div class="product-item" v-for="item in filteredProducts" :key="item.id">
        <ProductItem :product="item" />

      </div>
    </div>
  </div>

</template>

<style>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>

<script>
import ProductItem from 'src/components/product/ProductItem.vue'
export default {
  name: 'ProductList',
  computed: {
    // Aquí puedes definir las propiedades computadas necesarias para la lista de productos
    filteredProducts() {
      console.log('Categoria filtrada:', this.categoriaFiltrada);
      console.log('Productos:', this.products);

      if (this.categoriaFiltrada) {
        return this.products.filter(product => product.categoryId === this.categoriaFiltrada);
      }
      return this.products;

    }
  },
  props: {
    categoriaFiltrada: {
      type: Number,
      default: null,
    },
  },
  components: {
    ProductItem,
  },
  data() {
    return {
      // Aquí puedes definir los datos necesarios para la lista de productos
      products: [],
    }
  },
  mounted() {
    // Cargar los productos al montar el componente
    this.loadProducts();
  },
  methods: {
    // Aquí puedes definir los métodos necesarios para la lista de productos
    loadProducts() {
      // Simulación de carga de productos
      let endpointURL = '/api/v1/Products'
      let token = JSON.parse(localStorage.getItem('user')).token;
      this.$api.get(endpointURL, {
        headers: { 'Authorization': `Bearer ${token}` },
      })
        .then((response) => {
          console.log('Productos cargados:', response.data);
          this.products = response.data;
        })
        .catch((error) => {
          console.error('Error loading products:', error);
          this.$q.notify({
            type: 'negative',
            message: 'Error al cargar los productos',
          });
        });

      // this.products = [
      //   { id: 1, name: 'Product 1', price: 100 },
      //   { id: 2, name: 'Product 2', price: 200 },
      //   { id: 3, name: 'Product 3', price: 300 },
      //   { id: 4, name: 'Product 4', price: 400 },
      //   { id: 5, name: 'Product 5', price: 500 },
      //   { id: 6, name: 'Product 6', price: 600 },
      // ];
    },
  }
}

</script>
