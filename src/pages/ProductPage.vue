<template>
  <div class="product-page">
    <div class="product-filter q-ml-md q-mr-xl">
      <ProductFilter @category-changed="actualizarCategoria" />
    </div>
    <div class="product-list">
      <ProductList :categoriaFiltrada="categoriaFiltrada" />
    </div>

  </div>

</template>

<style>
.product-page {
  display: flex;
  justify-content: space-between;
}

.product-filter {
  width: 25%;
}

.product-list {
  width: 75%;
}
</style>

<script>
import ProductFilter from 'src/components/product/ProductFilter.vue'
import ProductList from 'src/components/product/ProductList.vue'
export default {
  name: 'ProductPage',
  components: { ProductFilter, ProductList },
  data() {
    return {
      // Aquí puedes definir los datos necesarios para la página de productos
      categoriaFiltrada: null,
    }
  },
  methods: {
    actualizarCategoria(categoriaId) {
      // Aquí puedes manejar el cambio de categoría, por ejemplo, filtrando productos
      console.log('Categoría seleccionada:', categoriaId);
      this.categoriaFiltrada = categoriaId;
      // Puedes emitir un evento o realizar una acción para actualizar la lista de productos
    },
    // Aquí puedes definir los métodos necesarios para la página de productos
  }
}

</script>
