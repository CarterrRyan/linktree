const app = Vue.createApp({
    data(){
        return{
            url:'',
            avatar:'/resources/profile-avatar.png'
        }
    },
    methods:{
        github(){
            this.url = 'https://github.com/CarterrRyan';
        },
        twitter(){
            this.url ='https://twitter.com/CarterrRyan';
        },
        linkedin(){
            this.url='https://www.linkedin.com/in/carter-todd-b85a03292/';
        },
    }
})
app.mount('#app')   