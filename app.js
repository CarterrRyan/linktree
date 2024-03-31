const app = Vue.createApp({
    data(){
        return{
            url:'',
            avatar:'/resources/profile-avatar.png',
            showAbout:false,
            email: 'cartertodd123@gmail.com',
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
        toggleAbout(){
            this.showAbout=!this.showAbout;
        }
    }
})
app.mount('#app')   