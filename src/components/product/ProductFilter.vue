<template>
  <h6>Filtros</h6>
  <div class="category-filter">
    <q-select v-model="selectedCategory" :options="categories" option-value="id" option-label="description"
      label="Categoría" filled class="q-mb-md" />

  </div>

  <div class="price-filter">



  </div>

</template>


<style></style>
<script>
export default {
  name: 'ProductFilter',
  data() {
    return {
      // Aquí puedes definir los datos necesarios para los filtros
      categories: [],
      selectedCategory: null,
    }
  },
  mounted() {
    // Cargar las categorías al montar el componente
    this.loadCategories();
  },
  methods: {
    // Aquí puedes definir los métodos necesarios para los filtros
    loadCategories() {
      // Simulación de carga de categorías
      this.categories = [
        { id: 1, description: 'Electronics' },
        { id: 2, description: 'Books' },
        { id: 3, description: 'Clothing' },
      ];
    },
  }
}

</script>
