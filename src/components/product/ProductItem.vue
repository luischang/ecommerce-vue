<template>
  <q-card class="product-card">
    <q-card-section>
      <q-img :src="product.imageUrl" alt="Product Image" class="product-image" />
    </q-card-section>
    <q-card-section>
      <q-card-title class="text-h6">{{ product.description }}</q-card-title>
      <q-card-subtitle class="text-subtitle1">Precio: ${{ product.price }}</q-card-subtitle>
      <q-btn color="primary" label="Añadir al carrito" @click="addToCart" class="full-width q-mt-md" />
    </q-card-section>
  </q-card>

</template>

<style>
.product-card {
  width: 300px;
}

.product-card q-card-section {
  height: 100px;
  overflow: hidden;
}
</style>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // Aquí puedes definir los datos necesarios para el producto
    }
  },
  methods: {
    // Aquí puedes definir los métodos necesarios para el producto
    addToCart() {
      this.$emit('add-to-cart', this.product);
    }
  }
}
</script>
