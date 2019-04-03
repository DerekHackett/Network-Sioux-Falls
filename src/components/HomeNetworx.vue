<template>
      <v-container fluid class="Home-Networx" style="max-height: 100vh;">
        
        <v-layout align-start justify-end column fill-height>
            <v-flex> 
                <div class="text-xs-center">
                <img style="width:400px;height:auto;" src="@/assets/images/Unify_Logo.png" alt="">
                
                </div>
            </v-flex>
          <v-layout>
            <v-flex align-self-end> 
                <div class="headline font-weight-black black--text text-xs-left mb-3">Presents:</div>
                <div  class="display-3 font-weight-black black--text text-xs-center">Network Sioux Falls</div>
                <div class="display-2 font-weight-black black--text text-xs-center">Advances in A.I.</div>
                <div class="display-1 font-weight-black light-blue--text text--darken-4 text-xs-center mb-3">Sioux Falls Tech Mingle</div>
                <div class="headline font-weight-bold grey--text text--lighten-1 text-xs-center">April 24th - Zeal Center for Entrepreneurship</div>
                <div class="headline font-weight-bold grey--text text--lighten-1 text-xs-center">5pm - Hors d'oeuvres & Cocktails</div>
                <div class="headline font-weight-bold grey--text text--lighten-1 text-xs-center">6:30 - Speakers</div>
                <router-link to="/rsvp">
                        <a class="headline font-weight-bold blue--text text--lighten-1 text-xs-center" >Click To RSVP</a>
                </router-link>
            </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script> 
export default {
    name: 'HomeNetworx'
};
</script>

<style scoped>
.Home-Networx {
    background: url('../assets/images/invite.png');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>