<template>
    <div class="userinfo">
        <navbar></navbar>
        <img src="../assets/back.jpg" alt="" class="backimg">
        <div>
            <user-detail></user-detail>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
import userDetail from '../components/userComponent/userDetail.vue'
    export default {
        data(){
            return{
                model:{}
            }
        },
        components:{
            Navbar,
            userDetail
        },
        methods:{
            async UserinfoData(){
                 const res = await this.$http.get('/user/'+ localStorage.getItem('id'),{
                     headers:{
                         'Authorization':'Bearer' + localStorage.getItem('token')
                     }
                 });
                 console.log(res);
            }
        },
        created(){
            this.UserinfoData()
        }
    }
</script>

<style lanf='less' scoped>
.backimg{
    width: 100%;
    height: 100px;
}

</style>