<template>
    <section class="container">
        <div class="d-flex justify-content-between mb-3 flex-column flex-lg-row">
            <div class="d-flex align-items-center mb-2 mb-lg-0">
                <input type="text" class="form-control" v-model="search" placeholder="Search Client" />
                <div class="btn btn-default"><b-icon-search /></div>
            </div>
            <b-btn variant="success" size="sm"  @click="modalShow = !modalShow"><b-icon-plus /> Create Client</b-btn>
        </div>
        <b-list-group class="accordion" role="tablist" v-if="filteredList.length">
            <b-list-group-item v-for="(item, index) in filteredList" :key="index">
                <div  class="d-flex justify-content-between flex-column flex-lg-row">
                        <div class="mb-2 mb-lg-0"  v-b-toggle="`accordion-${index}`">{{index+1}}. <b>{{item.name}}</b></div>
                        <div>

                            <button class="btn btn-outline-danger btn-sm" @click="deleteClient(item.client_id)"><b-icon-trash /> <span class="d-none d-lg-inline-block">Delete</span></button>

                            <button class="btn btn-outline-secondary btn-sm ml-3"  @click="modifyClient(item)"><b-icon-pencil  /> <span class="d-none d-lg-inline-block">Modify</span></button>

                            <router-link class="btn btn-outline-success btn-sm ml-3" :to="`/invoice_list/${item.client_id}?name=${item.name}`"><b-icon-filter-left /> <span class="d-none d-lg-inline-block">View Invoices</span></router-link>

                            <router-link class="btn btn-primary btn-sm ml-3" :to="`/generate_invoice/${item.client_id}`"><b-icon-bookmark-plus /> <span class="d-none d-lg-inline-block">Generate Invoice</span></router-link>
                            
                        </div>
                </div>
                <b-collapse :id="`accordion-${index}`" accordion="my-accordion" role="tabpanel">
                    <div class="mt-3">
                        <p><b>Address:</b> {{item.address || "-"}}</p>
                        <p><b>Contact:</b> {{item.contact || "-"}}</p>
                        <p><b>GST:</b> {{item.gst || "-"}}</p>
                    </div>
                </b-collapse>
            </b-list-group-item>
        </b-list-group>
         <b-alert class="text-center" v-else show variant="warning">
            No Client Found
        </b-alert>
        

        <b-modal
        id="modal-create-client"
        title="Submit Your Name"
        v-model="modalShow"
        >

        <form ref="form" @submit.stop.prevent="handleSubmit">
            <button id="form_submit" type="submit" class="btn btn-default" style="position: absolute;"></button>

            <b-form-group label="Client Id">
                <b-form-input v-model="form.client_id" required disabled ></b-form-input>
            </b-form-group>
            <b-form-group label="Name">
                <b-form-input v-model="form.name" required ></b-form-input>
            </b-form-group>
            <b-form-group label="Address" >
                <b-form-input v-model="form.address"></b-form-input>
            </b-form-group>
            <b-form-group label="GST" >
                <b-form-input v-model="form.gst"></b-form-input>
            </b-form-group>
            <b-form-group label="Contact" >
                <b-form-input 
                v-model="form.contact"
                ></b-form-input>
            </b-form-group>
        </form>
        
        <template #modal-footer="{ cancel }">
        <label v-if="scope=='create'" class="btn btn-success btn-sm" for="form_submit">
            Create
        </label>
        <label v-else class="btn btn-success btn-sm" for="form_submit">
            Update
        </label>
        <b-button size="sm" variant="danger" @click="cancel()">
            Cancel
        </b-button>
        </template>
        
        </b-modal>
    </section>
</template>
<script>
export default {
    data(){
        return{
            dataSource:[],
            search:"",
            form:{},
            modalShow: false,
            scope:"create"
        }
    },
    created(){
        this.fetchData()
    },
    filters: {
        currency(value) {
            return value.toFixed(2);
        },
    },
    watch:{
        "form.name"(newval){
            if(this.scope=="create" && newval)
            this.form.client_id = newval.toLowerCase().replace(/[^A-Z0-9]/ig, "_")
        },
        modalShow(newval){
            if(newval == false){
                this.scope = "create"
                this.form = {}
            }
        }
    },
    computed: {
       filteredList() {
            return this.dataSource.filter(a => {
                return a.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods:{
        fetchData(){
             this.$store.commit("loading", true);

             this.$http.post('/api/clients/read')
            .then((res) => {
                this.dataSource = res.data
                this.$store.commit("loading", false);
            })
             .catch((error) => {
                this.showError(error);
            });
        },
        handleOk(e) {
            e.preventDefault()
            this.handleSubmit();
        },
        handleSubmit() {
            if(this.scope == "create"){
                this.createClient()
            }
            else{
                this.updateClient()
            }
        },
        deleteClient(id){
             this.$bvModal.msgBoxConfirm('Are you sure?')
            .then(value => {
                if(value){
                    this.$store.commit("loading", true);

                    this.$http
                    .delete(`/api/clients/delete/${id}`)
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
                // An error occurred
            })
        },
        createClient(){
            this.$store.commit("loading", true);

             this.$http.post('/api/clients/create', this.form)
            .then((res) => {
                this.showSuccess(res);

                this.modalShow = false;
                this.form = {}
                this.fetchData();
            })
            .catch((error) => {
                this.showError(error)
            });
        },
        modifyClient(item){
            this.scope = "modify"
            this.form =  {...item}
            this.modalShow = true
        },
        updateClient(){
            this.$store.commit("loading", true);
            this.$http
            .put(`/api/clients/update/${this.form.client_id}`, this.form)
            .then((res) => {
                this.showSuccess(res);
                this.modalShow = false
                this.fetchData();

            })
            .catch((error) => {
                this.showError(error)
            });
        },
    }
}
</script>