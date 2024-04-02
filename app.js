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
            axios.get('/api/twitter')
            .then(response =>{
                this.url = response.data.url;
            })
            .catch(error=>{
                console.log('Error fetching twitter url',error);
            });
        },
        linkedin(){
            axios.get('/api/linkedIn')
            .then(response=>{
                this.url=response.data.url;
            })
            .catch(error=>{
                console.log('Error fetching linkedIn url',error);
            });
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