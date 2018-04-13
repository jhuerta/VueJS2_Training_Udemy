<template>
<div class="row">
  <h3>Quotes Progress</h3>
  <div class="col-sm-12">
  <div class="progress">
    <div  class="progress-bar" 
          role="progressbar" 
          aria-valuemin="0" 
          aria-valuemax="100" 
          style="width:10%" 
          v-bind:style="{ width: width}">

          {{this.quote_perc}} quotes

    </div>
  </div>
  </div>
</div>
</template>
<script>
export default {

  computed:
  {
    width(){
      return this.quote_perc*10 + '%';
    }
  },
    props:
  {
      quote_perc:0,
    },
}
</script>

<style scoped>
  .sr-only{
    color: white;
  }
</style>