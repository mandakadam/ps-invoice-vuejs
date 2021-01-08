<template>
  <div class="container">
      <b-alert class="text-center" show variant="warning">
          <router-link class="btn btn-primary mr-3" to="/clients">Clients</router-link>
          <router-link class="btn btn-secondary" to="/invoice_list">Invoice</router-link>
      </b-alert>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  }
}
</script>
