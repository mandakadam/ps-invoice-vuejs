<template>
  <form @submit="handleSubmit ">
    <div class="container no-print">
    <div class="d-flex justify-content-between ">
        <h3>Invoice</h3>
        <div>
          <button class="btn btn-outline-secondary btn-sm" @click="$router.go(-1)"><b-icon-arrow-left /> Back</button>
        </div>
    </div>
    </div>

  <div class="invoice-box">
      <!-- {{dataSource}} -->
    <table width="100%">
      <tr>
        <td width="120" align="center">
          <img id="image" src="@/assets/img/logo1.jpg" alt="logo" width="100" />
        </td>
        <td width="290" valign="top">
          <h4 style="color:#3F51B5 !important; font-size:17px">Ponmariappan Soundrapandian</h4>
          <p>
            <b>Address:</b> Flat No. 302, Plot No. 67,<br /> Hari Om Residency, Taj Road, <br />Seawoods, Navi Mumbai - 400706.
          </p>

          <p>
            <b>Email:</b> ponmariappan1@gmail.com<br />
            <b>Mob:</b> 9619801438<br />
          </p>
        </td>
        <td width="2%">&nbsp;</td>
        <td valign="top" class="page-wrap">
          <h2 class="page-head">Invoice</h2>
          <table class="tbl" width="100%">
            <tr>
              <td width="40%" class="meta-head">Invoice #</td>
              <td><input :disabled="scope=='modify'" required class="input" type="number" name="" v-model="dataSource.invoice_no" /></td>
            </tr>
            <tr>
              <td class="meta-head">Date</td>
              <td><input required class="input" type="date" value="" v-model="dataSource.invoice_date"  /></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <div style="padding:5px 10px; border: solid 1px #f44336; margin-top:10px">
      <table width="100%">
        <tr>
          <td width="60%" valign="top">
            <div>
              <b>Bill To: </b>
              <span id="name" style="color: #f44336 !important;">{{
                dataSource.name
              }}</span>
            </div>
            <div v-if="dataSource.contact">
              <b>Contact: </b>
              <span>{{ dataSource.contact }}</span>
            </div>
            <div v-if="dataSource.address">
              <b>Address: </b>
              <span>{{ dataSource.address }}</span>
            </div>

            <div v-if="dataSource.gst">
              <b>GST Number: {{ dataSource.gst }} </b>
            </div>
            <div v-if="dataSource.pan">
              <b>PAN Number: {{ dataSource.pan }} </b>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <table cellpadding="0" cellspacing="0" class="tbl">
      <tr>
        <th style="text-align:left">Item</th>
        <th style="text-align:right">Unit Cost</th>
        <th style="text-align:right">Quantity</th>
        <th style="text-align:right">Price</th>
      </tr>

      <tr v-for="(item, index) in dataSource.items" :key="index">
        <td width="40%">
            <div style="display:flex">
                <div>
                    <button
                        class="button  no-print"
                        @click="deleteRow(item)"
                        title="Remove row"
                    >
                        X
                    </button>
                </div>
            <textarea class="input" cols="30" rows="1" v-model="item.description"></textarea>
            </div>
        </td>
        <td style="text-align:right">
          <input
            style="text-align:right"
            class="input"
            type="text"
            v-model="item.price"
          />
        </td>
        <td style="text-align:right">
          <input
            style="text-align:right"
            class="input"
            type="text"
            v-model="item.quantity"
          />
        </td>
        <td style="text-align:right" width="20%">
          <b>{{ (item.price * item.quantity) | currency }}</b>
        </td>
      </tr>

      <tr class="no-print">
        <td colspan="4">
          <button type="button" class="button btn-add-row" @click="addRow">Add row</button>
        </td>
      </tr>
    </table>

    <table cellpadding="0" cellspacing="0" class="tbl">
      <tr class="total">
        <td class="total-value">
          <b
            >Rs. <span>{{ total | currency }}</span></b
          >
          <div class="inWords" name="">{{ total | toWords }} Only</div>
        </td>
      </tr>
    </table>

    <h4 class="page-head">Payment Information</h4>
    <table width="100%">
      <tr>
        <td width="50%">
          <p style="line-height: 20px;">
            <b>Name:</b> Ponmariappan Soundrapandian<br />
            <b>AC No:</b> 006310310000380<br />
            <b>IFSC CODE:</b> BKID0000009<br />
            <b>Bank:</b> Bank Of India<br />
            <b>Branch:</b> CHEMBUR<br />
            <b>Pan No:</b> BTTPS7819A
          </p>
        </td>

        <td style=" text-align:right">
          <br />
          <div style="position:relative;" v-if="showSign">
            <button
              class="button no-print"
              @click="showSign = false"
              title="Remove Sign"
            >
              X
            </button>
            <div>Thank you!</div>
            <div class="sign_wrp">
              <a href="javascript:void(0);" rel="nofollow"
                ><img width="150" src="@/assets/img/sign.jpg"
              /></a>
            </div>
            <div>Ponmariappan Soundrapandian</div>
          </div>
        </td>
      </tr>
    </table>
  
    <div class="no-print">
        <div class="d-flex">
        <button v-if="scope=='create'" type="submit" class="btn btn-primary mr-3">Create Invoice</button>
        <div v-else>
        <button type="submit" class="btn btn-success mr-3">Update Invoice</button>
        <button class="btn btn-primary mr-3" @click="printInvoice">Print Invoice</button>
        </div>
        <router-link class="btn btn-outline-danger  mr-3" to="/clients">Close</router-link>
        </div>
    </div>
  </div>
  </form>
</template>
<script>
var converter = require("number-to-words");
import "@/assets/css/invoice.scss";

export default {
  data() {
    return {
      dataSource: {
          invoice_date: new Date(),
          status: 0,
          items: [{ description: "Image Retouching", quantity: 1, price: 300 }],
          scope:"create"
      },
      showSign: true,
    };
  },
  created() {
    console.log(this.$route.params)
    this.fetchClientData()

    if(this.$route.params.invoice_ref){
      this.modifyRead()
      this.scope = "modify"
    }
    else{
        this.fetchData();
         this.scope = "create"
    }

  },
  computed: {
    total() {
     const _total = this.dataSource.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      this.dataSource.total = _total
      return _total
    },
  },
  filters: {
    currency(value) {
      if (!value) return "";
      return value.toFixed(2);
    },
    toWords(value) {
      if (!value) return "";
      return converter.toWords(value);
    },
  },
  watch:{
    $route(to, from) {
     window.location.reload()
    },
    'dataSource.invoice_no'(newval){
      this.dataSource.invoice_ref = `${this.dataSource.client_id}_${newval}`
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      if(this.scope == "create"){
          this.createInvoice()
      }
      else{
        this.updateInvoice()
      }
    },
    fetchClientData(){
             this.$store.commit("loading", true);

             return this.$http.post(`/api/clients/read/${this.$route.params.id}`)
            .then((res) => {
              this.$store.commit("loading", false);
              this.dataSource = {...this.dataSource, ...res.data};
            })
             .catch((error) => {
                this.showError(error);
            });
        },
    fetchData() {
      const today = this.dataSource.invoice_date || new Date();
      this.dataSource.invoice_date = new Date(today.getTime()-(today.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]

      this.$store.commit("loading", true);

      this.$http
        .post(`/api/clients/read/${this.$route.params.id}`)
        .then((res) => {
          this.$store.commit("loading", false);
          this.dataSource = {...this.dataSource, ...res.data};
        })
        .catch((error) => {
            this.showError(error);
        });
    },
    modifyRead() {
     
      this.$store.commit("loading", true);

      this.$http
        .post(`/api/client_details/read/${this.$route.params.invoice_ref}`)
        .then((res) => {
            this.$store.commit("loading", false);
             this.dataSource = {...this.dataSource, ...res.data};

            const today =  new Date(this.dataSource.invoice_date);
            this.dataSource.invoice_date = new Date(today.getTime()-(today.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]

        })
        .catch((error) => {
            this.showError(error);
        });
    },
    createInvoice(){
        for(var i in this.dataSource){
            delete this.dataSource['_id']
            delete this.dataSource['__v']
        }
        
        this.$store.commit("loading", true);
        this.$http
        .post(`/api/client_details/create`, this.dataSource)
        .then((res) => {
            this.showSuccess(res);

            this.scope = "modify"
            this.$bvModal.msgBoxOk('Action completed')
              .then(value => {
                if(value){
                    this.$router.push({path:`/generate_invoice/${this.$route.params.id}/${this.dataSource.invoice_ref}`});
                }
              })
              .catch(err => {
                // An error occurred
              })

        })
        .catch((error) => {
            this.showError(error)
        });
    },
    updateInvoice(){
        this.$store.commit("loading", true);

        this.$http
        .put(`/api/client_details/update/${this.$route.params.invoice_ref}`, this.dataSource)
        .then((res) => {
           this.showSuccess(res);
        })
        .catch((error) => {
           this.showError(error)
        });
    },
    addRow() {
      this.dataSource.items.push({
        description: "Image Retouching",
        quantity: 1,
        price: 0,
      });
    },
    deleteRow(i) {
      const index = this.dataSource.items.indexOf(i);
      if (index > -1) {
        this.dataSource.items.splice(index, 1);
      }
    },
    printInvoice: function() {
      this.updateInvoice();
      window.print();
    },
  },
};
</script>
