<template> <!--  {}  -->
  <div class="blog">
    <h1>This is an Blog page</h1>
    <br/>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name : 'Contact_single', params: {id: job.id}}">
      <h2 style="padding:20px 0">{{ job.title }}</h2>
      </router-link>
      <hr/>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Contact',
  data(){
    return{
      jobs:[]
    }
  },
  mounted(){
    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(data => this.jobs = data)
    .catch(err => console.log(err.message))
  }
}
  
</script>

