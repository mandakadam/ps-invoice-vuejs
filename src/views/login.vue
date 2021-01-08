<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        label="Email address:"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Your Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          v-model="form.password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>

     <b-form-group> 
      <b-button type="reset" variant="danger" class="mr-3">Reset</b-button>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form-group>

    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const self = this;
  
      this.$http.post('api/user/login', this.form)
      .then((res) => {
            if(res && res.data.status == "success" && res.data.token){
              sessionStorage.setItem("sessionid", res.data.token);
              this.$emit("authenticated", true);
              this.$bvToast.toast("Logged in successfully", {
                  title: "Success",
                  variant: "success",
                  solid: true
              })
              setTimeout(function(){
                self.$router.replace({ name: "clients"});
              },1000)
            }
        }).catch((error) => {
          console.log(error.response.data)
           this.$bvToast.toast(error.response.data.msg, {
              title: "Error",
              variant: "danger",
              solid: true
          })

      });
      

      // if(user && user.data.status == "success" && user.data.token){
      //     sessionStorage.setItem("sessionid", user.data.token);
      //     this.$emit("authenticated", true);
      //     this.$router.replace({ name: "about"});
      // }else {
      //     console.log("The username and / or password is incorrect");
      // }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
