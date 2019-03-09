<template>
    <fieldset>
        <legend>{{ title }}</legend>
        <slot></slot>
    </fieldset>
</template>

<script>
export default {
    name: 'MyFieldset',
    props: [ 'title' ],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    fieldset {
        padding: 20px;
        margin-bottom: 50px;
        border:1px solid rgba(0, 0, 0, .1);
    }
</style>
