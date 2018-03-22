<template>
    <div>
        <span v-for='(server,index) in 5' :key="index">
            <h3> **** {{index}} **** </h3>
            <server-status></server-status></span>
    </div>
	
</template>

<script >
import ServerStatus from './ServerStatus.vue';

  export default{
    components: {
        'server-status': ServerStatus
    }
  }
</script>

<style>

</style>
