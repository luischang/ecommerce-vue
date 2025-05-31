<template>
  <q-card class="q-pa-lg q-mx-auto" style="max-width: 400px">
    <q-card-section>
      <div class="text-h5 text-center q-mb-md">Iniciar Sesión</div>
      <q-form @submit.prevent="iniciarSesion">
        <q-input
          v-model="email"
          label="Email"
          type="email"
          filled
          class="q-mb-md"
          :rules="[(val) => !!val || 'El email es requerido']"
        />
        <q-input
          v-model="password"
          label="Contraseña"
          type="password"
          filled
          class="q-mb-md"
          :rules="[(val) => !!val || 'La contraseña es requerida']"
        />
        <q-btn label="Login" color="primary" type="submit" class="full-width" />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.full-width {
  width: 100%;
}
</style>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    iniciarSesion() {
      // Aquí puedes agregar la lógica real de login
      this.$q.notify({
        type: 'info',
        message: `Email: ${this.email}, Password: ${this.password}`,
      })
    },
  },
}
</script>
