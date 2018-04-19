<template>
    <div class="container">
        <form v-if='!submitted'>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    

    <fullaname v-model='userInfo.fullName'></fullaname>
  <div class="form-group">
    <label for="emailex">Email address</label>
    <input type="email" class="form-control" id="emailex" aria-describedby="emailHelp" placeholder="Enter email" v-model='userInfo.mail'>
  </div>
  <div class="form-group">
    <label for="passwordex">Password</label>
    <input type="password" class="form-control" id="passwordex" placeholder="Password" v-model='userInfo.password'>
  </div>

<div class="form-check">
    <label for="saveData">Save Data? </label>
  <input class="form-check-input" type="radio" name="saveData" id="yesRadio" value="yes" v-model='userInfo.saveData'>
  <label class="form-check-label" for="yesRadio">
    Yes
  </label>

  <input class="form-check-input" type="radio" name="saveData" id="noRadio" value="no" v-model='userInfo.saveData'>
  <label class="form-check-label" for="noRadio">
    No
  </label>

</div>


  <button type="submit" class="btn btn-primary" @click.prevent='submitData'>Submit</button>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if='submitted'>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userInfo.fullName}}</p>
                        <p>Mail: {{userInfo.mail}}</p>
                        <p>Password: {{userInfo.password}}</p>
                        <p>Store in Database?: {{userInfo.saveData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Fullname from './fullname.vue'
    export default {
        data: function(){
            return {
                submitted: false,
                userInfo : {
                name: '',
                lastname: '',
                mail: '',
                password: '',
                saveData: 'no',
                fullName: 'Juan Huerta'
                }
            }
        },
        methods: {
            submitData() {
                this.submitted = true;
            }
        },
        components:
        {
            fullaname: Fullname
        }
    }
</script>

<style>
</style>
