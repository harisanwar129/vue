<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Profile</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="container">
        <div class="row header mb-5 p-3">
            <div class="col-lg-12">
                 <h2 >What I do Today?</h2>   
            </div>
        </div>
        <div class="row content">
            <div class="col-lg-12">
                 <div class="pekerjaan-rumah">
                    <div class="row">
                          <div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id" class="mb-4 tugas col-lg-12 text-left">
                             <div class="form-check">
                   <ItemTugas v-bind:tugasSaya="tugasSaya" />
                 </div>
               </div>
              </div>
            </div>
        </div>  
    </div>
    </div>  
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import ItemTugas from "@/components/ItemTugas.vue";
export default {
  name:"app",
  data:function () {
    return{
      tugas:[
        {
          id:1,
          namaTugas:"membersihkan toilet ",
          isDone:false
        },
         {
          id:2,
          namaTugas:"ngoding ",
          isDone:false
        }
      ]
    };
  },
components:{
  ItemTugas
}
};

</script>
<style>
 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header{
  background: blue;

}
.header h2{
  margin:0;
}
.tugas .item{
  font-size:20px;

}
.item-completed{
  color:blue;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
