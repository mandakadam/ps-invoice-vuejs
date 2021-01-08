<template>
    <section class="container">
            <div class="d-flex justify-content-between mb-3 flex-column flex-lg-row">
                    <div class="d-flex flex-column flex-lg-row">
                        <h3 class="mr-3 text-capitalize" style="white-space: nowrap;">{{ $route.params.id ? $route.query.name : 'Invoice'}}</h3>
                        
                        <div class="d-flex mb-2 mb-lg-0">
                            <input type="text" class="form-control" v-model="search" placeholder="Search Client" />
                            <div class="btn btn-default"><b-icon-search /></div>
                        </div>
                    </div>
                    <div class="d-none d-lg-inline-block">
                    <button class="btn btn-outline-secondary btn-sm" @click="$router.go(-1)"><b-icon-arrow-left /> Back</button>
                 </div>
            </div>
                

            <b-list-group  v-if="filteredList.length">
                <b-list-group-item class="d-flex justify-content-between flex-column flex-lg-row" v-for="(item, index) in filteredList" :key="index">
                    <b class="mb-2 mb-lg-0">{{ $route.params.id ?  'Invoice No.' : item.name}} #{{item.invoice_no}}</b>
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
           if(this.dataSource.length){
                return this.dataSource.filter(a => {
                    console.log(a)
                    return a.invoice_no.toString().toLowerCase().includes(this.search.toLowerCase())
                })
           }
           else{
               return []
           }
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