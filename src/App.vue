<template>
    <v-app>
        <!-- <app-navigation></app-navigation> -->

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
// import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        // AppNavigation
    },
        metaInfo: {
            titleTemplate: '%s | Network Sioux Falls',
                htmlAttrs: {
                    lang: 'en',
                    amp: undefined
                },
                
    }
};
</script>

<style>
</style>