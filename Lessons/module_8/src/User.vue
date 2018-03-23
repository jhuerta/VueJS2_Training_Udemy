<template>
  <div>
    <div>
      <h1>Rafa</h1>
      <div>{{myAge}}</div>
      <div v-once>{{times3()}}</div>

    </div>
    <div class="main-user">
    <h1> I'm the user! </h1>
    <div>
    <input type="text" v-model="tmpName">
    <button @click='changeName'>Change Name</button>
    </div>

    <div>
    <input type="text" v-model="tmpAddress">
    <button @click='changeAddress'>Change Address</button>
    </div>


    <div>
    <b>Name: </b>{{name}}
    </div>

    <div>
    <b>Address: </b>{{address}}
    </div>
   
    </div>
    <div >
      <user-details @newAge='age = $event' :name='name' :age_param='age' :change_name_method='changeName'></user-details>
      <user-address 
          :param_address='address' 
          :age_param='age' 
          @addressWasResetEvent='address = $event'>
      </user-address>
      
    </div>
    
  </div>
</template>

<script>
import UserDetails from './user_details.vue'
import UserAddress from './user_address.vue'
export default {
  data: function() {
    return {
      myAge: 35,
      age: 40,
      name: '',
      tmpName: '',
      address: 'abdsf',
      lastname: 10,
      tmpAddress: ''
    }
  },
  computed:
  {
  
  },
  methods : {
    times3: function(){
      this.lastname = this.lastname*3;
      return this.lastname;
    },
    changeName: function(event, newName)
    {
      this.name = newName || this.tmpName;
    },
    changeAddress: function()
    {
      this.address = this.tmpAddress;
    }
  },
  components: {
    'user-details': UserDetails,
    'user-address': UserAddress
  }

}
</script>

<style scoped>
.main-user {
  margin: 15px;
  background-color: cyan;
  height: 200px;
  border: blue 3px solid;
}

</style>
