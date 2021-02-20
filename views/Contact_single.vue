<template> <!--  {}  -->
<div v-if="job">
  <h1>{{ job.title }}</h1>
  <p>ID = {{ id }}</p><!-- $route è l'oggetto che ti permette di vedere i parametri dell'URL  -->
</div>
</template>

<script>
export default {
  name:'Contact_single',
  props:['id'],
    data(){
    return{
      job: null
      }
      
  },
    mounted(){
    fetch('http://localhost:3000/jobs/' + this.id)
    .then(res => res.json())
    .then(data => this.job = data)
    .catch(err => console.log(err.message))
  }
  //data(){
    //return{
      //id: this.$route.params.id,
    //}
  //}
}
</script>

<style>

</style>