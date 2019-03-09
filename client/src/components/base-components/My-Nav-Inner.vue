<template>
    <ul>
        <li v-for="(nav, index) in navs" :key="index">
            <router-link :to="nav.path">
                {{ nav.title }}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'MyNavInner',
    props: [ 'navs' ],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    ul {
        margin-top: 15px;
        float: left;
    }
    li {
        display: inline-block;
    }
    a {
        text-decoration: none;
        color: rgb(160, 160, 160);
        font-size: 120x;
    }
</style>
