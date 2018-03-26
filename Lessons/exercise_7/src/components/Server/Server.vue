<template>
	<div :style='{ "background-color": server.color,"cursor": "zoom-in"}' @mouseover='showStatus(server)'>
		Server #{{ server.index }} ({{server.status}})
	</div>
</template>

<script>

import Vue from 'vue';
import { eventBus } from './../../main';

export default {
	props: {
		'server': Object},
	methods: {
    showStatus(server)
    {
      eventBus.$emit('displayStatus',server);
    }
}
}

</script>