<template>
    <section class="container">
            <div class="d-flex justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                        <h3 class="mr-3">{{ $route.params.id ? $route.query.name : 'Invoice'}}</h3>
                        <input type="text" class="form-control" v-model="search" placeholder="Search Client" />
                        <div class="btn btn-default"><b-icon-search /></div>
                    </div>
                    <div>
                    <button class="btn btn-outline-secondary btn-sm mr-3" @click="$router.go(-1)"><b-icon-arrow-left /> Back</button>
                    <router-link class="btn btn-success btn-sm" replace :to="`/generate_invoice/${$route.params.id}`">
                    <b-icon-bookmark-plus />  Generate Invoice
                    </router-link>
                    </div>
                </div>
                

            <b-list-group  v-if="filteredList.length">
                <b-list-group-item class="d-flex justify-content-between" v-for="(item, index) in filteredList" :key="index">
                    <b>{{ $route.params.id ?  'Invoice No.' : item.name}} #{{item.invoice_no}}</b>
                    <div>
                        <b-btn variant="outline-danger" size="sm" @click="deleteInvoice(item.invoice_ref)">
                            <b-icon-trash />
                            Delete Invoice
                        </b-btn>
                        <router-link class="btn btn-primary btn-sm ml-3"  replace :to="`/generate_invoice/${item.client_id}/${item.invoice_ref}`">
                        <b-icon-pencil /> Modify Invoice
                        </router-link>
                    </div>
                </b-list-group-item>
            </b-list-group>
            <b-alert class="text-center" v-else show variant="warning">
                No invoice available
            </b-alert>

    </section>
</template>
<script>
export default {
    data(){
        return{
            dataSource: [],
             search:"",
        }
    },
    created(){
       this.fetchData()
    },
    computed: {
       filteredList() {
            return this.dataSource.filter(a => {
                return a.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    watch:{
         $route(to, from) {
            this.fetchData();
        }
    },
    methods:{
         fetchData() {
            this.$store.commit("loading", true);
            const filter = this.$route.params.id ?   {"filters": {"client_id": this.$route.params.id}} : {}
            this.$http
            .post(`/api/client_details/read`, { ...filter } )
            .then((res) => {
                this.dataSource = res.data
                this.$store.commit("loading", false);
            })
            .catch((error) => {
                this.showError(error);
            });
        },
        deleteInvoice(id){
             this.$bvModal.msgBoxConfirm('Are you sure?')
            .then(value => {
                if(value){
                    this.$store.commit("loading", true);
                    this.$http
                    .delete(`/api/client_details/delete/${id}`)
                        .then((res) => {
                            this.showSuccess(res);
                            return this.fetchData();
                        })
                        .catch((error) => {
                            this.showError(error)
                    }); 
                }
            })
            .catch(err => {
               this.$store.commit("loading", false);
            })
        }
    }
}
</script>