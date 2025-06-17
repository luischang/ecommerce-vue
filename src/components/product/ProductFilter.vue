<template>
  <h6>Filtros</h6>
  <div class="category-filter">
    <q-select v-model="selectedCategory" :options="categories" option-value="id" option-label="description"
      label="Categoría" filled class="q-mb-md" @update:model-value="onChange" />
  </div>

  <div class="price-filter">
  </div>

</template>


<style></style>
<script>
export default {
  name: 'ProductFilter',
  emits: ['category-changed'],
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
    // Método para manejar el cambio de categoría
    onChange() {
      // Aquí puedes manejar el cambio de categoría, por ejemplo, filtrando productos
      console.log('Categoría seleccionada:', this.selectedCategory);
      this.$emit('category-changed', this.selectedCategory.id);
    },
    // Aquí puedes definir los métodos necesarios para los filtros
    loadCategories() {
      // Simulación de carga de categorías
      // this.categories = [
      //   { id: 1, description: 'Electronics' },
      //   { id: 2, description: 'Books' },
      //   { id: 3, description: 'Clothing' },
      // ];
      let endpointURL = '/api/v1/Categories'
      // Get token from localStorage
      let token = JSON.parse(localStorage.getItem('user')).token;

      this.$api.get(endpointURL, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.error('Error loading categories:', error);
          this.$q.notify({
            type: 'negative',
            message: 'Error al cargar las categorías',
          });
        });
    },
  }
}

</script>
