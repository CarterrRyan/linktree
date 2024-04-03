const app = Vue.createApp({
    data(){
        return{
            url:'',
            avatar:'/resources/profile-avatar.png',
            showAbout:false,
            showEmail:false,
            email: 'cartertodd123@gmail.com',
            userEmail:'',
            emailBody:'',
            bodyLength:0,
        }
    },
    methods:{
        github(){
            axios.get('https://guarded-bastion-04501-1bab4507eb4c.herokuapp.com/api/github')
            .then(response =>{
                window.location.href = response.data.url;
            })
            .catch(error =>{
                console.log('Error fetching Github url',error);
            });
        },
        twitter(){
            axios.get('https://guarded-bastion-04501-1bab4507eb4c.herokuapp.com/api/twitter')
            .then(response =>{
                window.location.href  = response.data.url;
            })
            .catch(error=>{
                console.log('Error fetching twitter url',error);
            });
        },
        linkedin(){
            axios.get('https://guarded-bastion-04501-1bab4507eb4c.herokuapp.com/api/linkedIn')
            .then(response=>{
                window.location.href = response.data.url;
            })
            .catch(error=>{
                console.log('Error fetching linkedIn url',error);
            });
        },
        toggleAbout(){
            this.showAbout=!this.showAbout;
        },
        toggleEmail(){
            this.showEmail=!this.showEmail;
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
        },
        sendEmail(){
            axios.post('https://guarded-bastion-04501-1bab4507eb4c.herokuapp.com/api/email',{
                userEmail:this.userEmail,
                body:this.emailBody,
            })
            .then(response=>{
                console.log(response.data);
            })
            .catch(error=>{
                console.log('Error sending email',error);
            })
            
        },
        updateBodyLength(){
            this.bodyLength = this.emailBody.length;
        }
    }
})
app.mount('#app')   