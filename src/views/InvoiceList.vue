<template>
    <section class="container">
            <div class="d-flex justify-content-between">
                <h3>{{ $route.params.id ? $route.query.name : 'Invoice'}}</h3>
                <div>
                <button class="btn btn-outline-secondary btn-sm mr-3" @click="$router.go(-1)"><b-icon-arrow-left /> Back</button>
                <a class="btn btn-success btn-sm" :href="`/generate_invoice/${$route.params.id}`">
                  <b-icon-bookmark-plus />  Generate Invoice
                </a>
                </div>
            </div>

            <b-list-group  v-if="dataSource.length">
                <b-list-group-item class="d-flex justify-content-between" v-for="(item, index) in dataSource" :key="index">
                    <b>{{ $route.params.id ?  'Invoice No.' : item.name}} #{{item.invoice_no}}</b>
                    <div>
                        <b-btn variant="outline-danger" size="sm" @click="deleteInvoice(item.invoice_ref)">
                            <b-icon-trash />
                            Delete Invoice
                        </b-btn>
                        <a class="btn btn-primary btn-sm ml-3" :href="`/generate_invoice/${item.client_id}/${item.invoice_ref}`">
                        <b-icon-pencil /> Modify Invoice
                        </a>
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
        }
    },
    created(){
       
       this.fetchData()
    },
    watch:{
         $route(to, from) {
            this.fetchData();
        }
    },
    methods:{
         fetchData() {
            const filter = this.$route.params.id ?   {"filters": {"client_id": this.$route.params.id}} : {}
            this.$http
            .post(`/api/client_details/read`,
            {
                ...filter
            }, 
            {
            headers: { "auth-token": sessionStorage.getItem("sessionid") },
            })
            .then((res) => {
                this.dataSource = res.data
            });
        },
        deleteInvoice(id){
             this.$bvModal.msgBoxConfirm('Are you sure?')
            .then(value => {
                if(value){
                    this.$http
                    .delete(`/api/client_details/delete/${id}`,
                        {
                        headers: { "auth-token": sessionStorage.getItem("sessionid") },
                        })
                        .then((res) => {
                            this.$bvToast.toast(res.data.msg, {
                                title: "Success",
                                variant: "success",
                                solid: true
                            })
                            return this.fetchData();
                        })
                        .catch((error) => {
                            this.$bvToast.toast(error.response.data.msg, {
                                title: "Error",
                            variant: "danger",
                            solid: true
                        })
                    }); 
                }
            })
            .catch(err => {
                // An error occurred
            })
        }
    }
}
</script>