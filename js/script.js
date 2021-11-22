var mailList = new Vue({
    el:"#container",
    data:{
    mails : [],
    },

    mounted(){
        const self = this;    
        for(let i = 0; i < 10; i++){

            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risultato){
            self.mails.push(risultato.data.response)
            });
        }
    }
})