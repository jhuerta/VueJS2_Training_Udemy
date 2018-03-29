<template>

  <div class="container">

    
    <div class="row">
      <div class="col-xs-12">


  <div  class="blueborder">
    <input type="radio" id="choice_author" name="displaytype" value="author" v-model='displaychoice'>
    <label for="choice_author">Author</label>

    <input type="radio" id="choice_maincontent" name="displaytype" value="maincontent" v-model='displaychoice'>
    <label for="choice_maincontent">Content</label>

    <input type="radio" id="choice_main_body" name="displaytype" value="quote" v-model='displaychoice'>
    <label for="choice_main_body">Main Body</label>
  </div>

<div class="blueborder">
  Below the dynamic component

  <keep-alive>
<component  :is='displaychoice'>
</component>  
</keep-alive>
</div>
  

        

    <quote class="blueborder">
      <span slot='title'>
        <div>
          <h1>{{quoteText}}</h1>
        </div>
      </span>
      <span slot='title'>
        <div>
          This is the subtitle I want ot use
        </div>
      </span>

      <span slot='content'>
        <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam facilis velit maxime facere ad. Quibusdam cum ipsum minus perspiciatis illo dolorem ea, consectetur molestiae corporis alias eos laudantium ad esse?</p>
      </div>
      </span>

      <span>
        <div>
      <p>This slot has no name</p>
      </div>
      </span>
    </quote>
  </div>
  </div>
  <input v-model="newQuote" placeholder="Set title here">
  <button @click=assignQuote>Set the title</button>
  </div>

</template>

<script>
import Quote from './components/Quote.vue'
import MainContent from './components/MainContent.vue'
import Author from './components/Author.vue'

export default {
  data: function()
  {
    return {
      displaychoice:'author',
      quoteText:'Default Title',
      newQuote:''
    }
  },
  components:
  {
    quote: Quote,
    author: Author,
    maincontent: MainContent,
  },
  methods:  {
    assignQuote(){
      this.quoteText = this.newQuote;

    }
  }

}
</script>

<style scoped>
  .blueborder {
    border: 3px solid STEELBLUE;
    box-shadow: 3px 3px 6px STEELBLUE;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
</style>
