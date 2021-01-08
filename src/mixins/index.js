export const Globalmixin = {
    methods: {
        showSuccess(res){
            this.$store.commit("loading", false);
            if(res){
                const msg = (res && res.data && res.data.msg) ? res.data.msg : res
                return this.$bvToast.toast(msg, {
                    title: "Success",
                    variant: "success",
                    autoHideDelay: 1000,
                    solid: true
                })
            }
        },
        showError(error){
            this.$store.commit("loading", false);
            if(error){
                const msg = (error && error.response && error.response.data && error.response.data.msg) ? error.response.data.msg : res
                return this.$bvToast.toast(msg, {
                    title: "Error",
                    variant: "danger",
                    autoHideDelay: 1000,
                    solid: true
                })
            }
        },
        
    }
}