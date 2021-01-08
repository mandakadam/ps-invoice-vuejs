<template>
  <div class="container">
      <b-alert class="text-center" show variant="warning">
          <router-link to="/clients">Clients</router-link>
          <router-link to="/invoice_list">Invoice</router-link>
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
