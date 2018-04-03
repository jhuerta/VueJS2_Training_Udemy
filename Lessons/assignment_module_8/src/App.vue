<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <hr>
                <h1>Dynamically Loaing Component</h1>
                <button class="btn btn-primary" @click='componentName="appBlue"'>Load Blue Template</button>
                <button class="btn btn-success" @click='componentName="appGreen"'>Load Green Template</button>
                <button class="btn btn-danger" @click='componentName="appRed"'>Load Red Template</button>
                
                <component  :is='componentName'>This is the <span class='slot'>COLORED</span> button</component>  
                <hr>
                <app-blue>This is the <span class='slot'>BLUE</span> button</app-blue>
                <app-green>This is the <span class='slot'>GREEN</span> button</app-green>
                <app-red>This is the <span class='slot'>RED</span> button</app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){return {
            componentName:'appBlue'
        }},
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
