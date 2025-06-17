<template>
  <div class="login-container">
    <q-card class="q-pa-lg q-mx-auto form-box">
      <q-card-section>
        <div class="text-h5 text-center q-mb-md">Iniciar Sesión</div>
        <q-form @submit.prevent="iniciarSesion">
          <q-input v-model="email" label="Email" type="email" filled class="q-mb-md"
            :rules="[(val) => !!val || 'El email es requerido']" />
          <q-input v-model="password" label="Contraseña" type="password" filled class="q-mb-md"
            :rules="[(val) => !!val || 'La contraseña es requerida']" />
          <q-btn label="Login" color="primary" type="submit" class="full-width q-mb-md" />
        </q-form>
        <div class="text-center">
          <router-link to="/register" class="register-link">¿No tienes cuenta? Regístrate aquí</router-link>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.full-width {
  width: 100%;
}

.login-container {
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
}

.register-link {
  color: #1976d2;
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
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
      let endpointURL = '/api/v1/user/signin'
      let userData = {
        email: this.email,
        password: this.password,
      }
      this.$api
        .post(endpointURL, userData)
        .then((response) => {
          console.log('Inicio de sesión exitoso:', response)
          //Guadar los datos del usuario en el localStorage
          localStorage.setItem('user', JSON.stringify(response.data))
          this.$q.notify({
            type: 'positive',
            message: 'Inicio de sesión exitoso.',
          })
          this.$router.push('/product') // Redirigir al listado de productos después del login
        })
        .catch((error) => {
          console.error('Error en el inicio de sesión:', error)
          this.$q.notify({
            type: 'negative',
            message: 'Error al iniciar sesión. Verifica tus credenciales.',
          })
        })
    },
  },
}
</script>
