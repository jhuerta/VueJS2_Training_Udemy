<template>
    <div class="container">
        <form>
            <span v-show='!isSubmitted'>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model.lazy='userData.email'>
                                Value: {{userData.email}}
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.number='userData.password'>
                                Value: {{userData.password}}
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model='userData.age'>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model='userData.message'></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    v-model='userData.sendMail'
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    v-model='userData.sendMail'
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                v-model='userData.gender'
                                type="radio"
                                id="male"
                                value="Male"> Male
                    </label>
                    <label for="female">
                        <input
                                v-model='userData.gender'
                                type="radio"
                                id="female"
                                value="Female"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model='userData.priority'
                            >
                        <option v-for="option in options"
                        :selected='option=="orange"'

                        >{{option}}</option>
                    </select>
                </div>
            </div>
            </span>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            v-show='!isSubmitted'
                            class="btn btn-primary"
                            @click.prevent='submitted'>Submit!
                    </button>

                    <button v-show='isSubmitted'
                            class="btn btn-warning"
                            @click.prevent='isSubmitted = false'>Reset
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <h3>Custom Controller</h3>
                <blinker v-model='userData.blinkerValue'></blinker>
            </div>
            </div>
        </form>
        <hr>
        <div class="row" v-show='isSubmitted'>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{userData.email}}</p>
                        <p>Password:{{userData.password}}</p>
                        <p>Age:{{userData.age}}</p>
                        <p style='white-space: pre'>Message:{{userData.message}} </p>
                        <p><strong>Send Mail?</strong>



                        </p>
                        <ul>
                            <li v-for="(ind,val) in userData.sendMail">{{ind}}: {{val}}</li>
                        </ul>
                        <p><b>Gender: </b>{{userData.gender}}</p>
                        <p><b>Priority: </b>{{userData.priority}}</p>
                        <p><b>Switched: </b>{{userData.blinkerValue}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    import Switch from './switch.vue'
    export default {
        data: function() {
            return {
                userData: {
                email: '',
                password: '',
                age: 27,
                message:'abc',
                sendMail: [],
                gender:'Male',
                priority: 'yellow',
                blinkerValue: true
                },
                options: ['red','blue','yellow','green','brown','orange'],
                isSubmitted: false,
            }
        },
        components: {
            blinker: Switch
        },
        methods:
        {
            submitted() {
                this.isSubmitted = true;
                console.log('is submitted!!!!');
            }
        }
    }
</script>

<style>

</style>
