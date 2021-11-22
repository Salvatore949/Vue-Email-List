var mailList = new Vue({
    el:"#container",
    data:{
     mail : "",
    },
    mounted(){
        for(i = 0; i < 10; i++){
            const self = this;
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risultato){
            console.log(risultato.data.response)
            });
        }
    }
})