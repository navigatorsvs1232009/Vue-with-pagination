<template>
    <div id="app">
        <v-table
        
      
/>

    </div>
    </template>

<script>
import {mapActions, mapGetters} from 'vuex'
import vTable from './components/table/v-table.vue'


export default {
  name: 'App',
  components: {
    vTable
  },
  data: () => {
    return {}
  },
  computed: {
...mapGetters([
  'USERS'
])
  },
methods: {
  ...mapActions([
    'GET_USERS_FROM_API'
  ])
},
mounted(){
  this.GET_USERS_FROM_API()
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
