<template>
      <v-container fluid class="Home-Networx" style="max-height: 100vh;">

        <v-layout align-start justify-end column fill-height class="info-container">
            <v-flex>
                <div>
                    <img class="unify-logo" src="@/assets/images/Unify_Logo.png" alt="">
                </div>
            </v-flex>
          <v-layout>
            <v-flex align-self-end>
                <div class="headline font-weight-black black--text text-xs-left mb-3 mt-2">Presents:</div>
                <div class="display-3 black--text font-weight-black" style="letter-spacing: 5px!important; line-height: 35px!important;">NETWORK</div>
                <div class="display-2 black--text mb-3" style="font-family: monospace!important; letter-spacing: 5px!important;">Sioux Falls</div>
                <div class="display-1 font-weight-black black--text">Advances in A.I.</div>
                <div class="display-1 font-weight-black light-blue--text text--darken-4 mb-3">Sioux Falls Tech Mingle</div>
                <div class="headline font-weight-bold grey--text text--lighten-1">April 24th - Zeal Center for Entrepreneurship</div>
                <div class="headline font-weight-bold grey--text text--lighten-1">5pm - Hors d'oeuvres & Cocktails</div>
                <div class="headline font-weight-bold grey--text text--lighten-1">6:30 - Speakers</div>
                <div class="mt-2">
                    <router-link to="/rsvp">
                            <a class="headline font-weight-bold blue--text text--lighten-1" >RSVP Here</a>
                    </router-link>
                </div>
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
.unify-logo {
    width: 85%;
    max-width: 400px;
    height: auto;
}

@media (min-width: 768px) {
    .info-container {
        width: 35%;
    }
}

.Home-Networx {
    background: url('../assets/images/invite.png');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>