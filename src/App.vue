<template>
    <div id="app">
        <b-navbar toggleable="sm"  type="dark" variant="dark" sticky class="mb-3">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">Ponmariappan</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav  v-if="authenticated">
        <b-navbar-nav  class="ml-auto">
            <b-nav-item to="/invoice_list">All Invoice</b-nav-item>
            <b-nav-item to="/clients">Clients</b-nav-item>
            <b-nav-text><router-link to="/login" v-on:click.native="logout()" replace>Logout</router-link></b-nav-text>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>

    <div class="pb-3">
        <router-view @authenticated="setAuthenticated" />
    </div>

    <transition name="bounce" v-if="isLoading">
        <div class="loading">
            <!-- {{refCount}} -->
            <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
        </div>
    </transition>

    </div>
</template>

<script>
import { mapState } from "vuex";

    export default {
        name: 'App',
        data() {
            return {
                authenticated: false
            }
        },
        watch:{
           
        },
        computed: {
            ...mapState(["isLoading", "refCount"]),
        },
        mounted() {
            if(!sessionStorage.getItem('sessionid')) {
                this.authenticated = false
                this.$router.replace({ name: "login" });
            }else{
               this.authenticated = true
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
                sessionStorage.removeItem('sessionid')
            }
        }
    }
</script>
