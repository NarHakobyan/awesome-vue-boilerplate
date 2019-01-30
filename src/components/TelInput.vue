<template>
    <vue-tel-input v-bind="$attrs" v-on="$listeners"></vue-tel-input>
</template>

<script>
import VueTelInput from 'vue-tel-input';
export default {
    name: 'TelInput',
    components: {
        VueTelInput,
    },
    inheritAttrs: false,
};
</script>

<style>
@import '~vue-tel-input/dist/vue-tel-input.css';
</style>
