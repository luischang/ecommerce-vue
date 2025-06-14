<template>
  <div class="register-container">
    <h2 class="form-title">Registro de Usuario</h2>
    <q-form @submit.prevent="registerUser" class="q-gutter-md form-box">
      <q-input v-model="form.firstName" label="Nombre" required />
      <q-input v-model="form.lastName" label="Apellido" required />
      <q-input v-model="form.email" label="Email" type="email" required />
      <q-input
        v-model="form.password"
        :type="showPassword ? 'text' : 'password'"
        label="Contraseña"
        required
      >
        <template v-slot:append>
          <q-icon
            :name="showPassword ? 'visibility' : 'visibility_off'"
            class="cursor-pointer"
            @click="togglePassword"
          />
        </template>
      </q-input>
      <q-btn label="Registrar" type="submit" color="primary" class="full-width" />
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      showPassword: false,
    }
  },
  methods: {
    registerUser() {
      // Aquí puedes manejar el registro, por ejemplo enviar a un API
      console.log('Datos de registro:', this.form)
      let endpointURL = '/api/v1/user/signup'
      this.$api
        .post(endpointURL, this.form)
        .then((response) => {
          console.log('Registro exitoso:', response)
          this.$q.notify({
            type: 'positive',
            message: 'Registro exitoso. Por favor, verifica tu correo electrónico.',
          })
          this.$router.push('/login') // Redirigir al login después del registro
        })
        .catch((error) => {
          console.error('Error en el registro:', error)
          this.$q.notify({
            type: 'negative',
            message: 'Error al registrar el usuario. Inténtalo de nuevo.',
          })
        })
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },
  },
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}
.form-box {
  min-width: 320px;
  max-width: 400px;
  width: 100%;
  background: white;
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.form-title {
  text-align: center;
  margin-bottom: 24px;
  font-weight: 600;
  color: #333;
}
</style>
