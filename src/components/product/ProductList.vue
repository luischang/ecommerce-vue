<template>
  <h6>Lista de Productos</h6>
  <div class="product-list">
    <div class="product-grid">
      <div class="product-item" v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}

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
export default {
  name: 'ProductList',
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
      this.products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
        { id: 4, name: 'Product 4', price: 400 },
        { id: 5, name: 'Product 5', price: 500 },
        { id: 6, name: 'Product 6', price: 600 },
      ];
    },
  }
}

</script>
