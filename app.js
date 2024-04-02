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
            axios.get('/api/github')
            .then(response =>{
                this.url = response.data.url;
            })
            .catch(error =>{
                console.log('Error fetching Github url',error);
            });
        },
        twitter(){
            this.url ='https://twitter.com/CarterrRyan';
        },
        linkedin(){
            this.url='https://www.linkedin.com/in/carter-todd-b85a03292/';
        },
        toggleAbout(){
            this.showAbout=!this.showAbout;
        },
        copyToClipboard(){
            navigator.clipboard.writeText(this.email)
           .then(()=>
            {
                alert('Email copied to clipboard');
            })
            .catch((err)=>
            {
                alert('Failed to copy email to clipboard');
            });
        }
    }
})
app.mount('#app')   