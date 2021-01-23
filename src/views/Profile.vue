<template>
  <div class="profile">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="media text-left">
                <img src="../assets/haris.jpg" class="user-pic mr-3">
                <div class="media-body">
                    <h5 class="mt-0">{{firstName}} {{lastName}}</h5>
                    {{description}} 
                </div>
        </div>
            </div>
            </div>
        </div>                
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'Profile',
  data: function(){
    return{
        firstName:'Haris',
        lastName:'Anwar',
        description:'Saya anak ke dua dari tiga bersaudara, saya Alumni dari SMK negeri 1 Cipnas dan Kuliah di Univeristas Surya kancana,jurusan Teknik Informatika'
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
<style scoped>
.user-pic{
  border-radius: 200%;
  height: 80px;
  width: 80px;
  
}
</style>