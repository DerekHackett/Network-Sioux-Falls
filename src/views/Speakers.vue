<template>
  <v-container>
        <v-layout align-start justify-end column fill-height class="info-container">
            <v-flex>
                <div>
                    <a href="https://www.unifyconsulting.com/about/" target="_blank">
                    <img class="unify-logo" src="@/assets/images/Unify_Logo.png" alt="">
                    </a>
                </div>
                <div class="headline font-weight-black black--text text-xs-left mb-3 mt-2">Presents:</div>
            </v-flex>
          </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <!-- <v-img src="@/assets/images/ClayCampbell.jpg"></v-img> -->
          <v-img class="profilePic" :src="require('../assets/images/ClayCampbell.jpg')"/>

          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0 font-weight-black">Clay Campbell</h2>
              <h6 class="title mb-0 font-italic">Director of Innovation & Applied A.I.</h6>
              <div>Clay Campbell is the Director of Innovation and Applied A.I. for Unify Consulting in Seattle, WA. A Madison, SD native, Clay has spent over a decade working with some of the largest companies on the planet solving some of their hardest problems. Most notably he has established himself as a thought leader in the field of Applied A.I. He spends his free time building self-driving cars and treasure hunting.</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
       <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img class="profilePic" :src="require('../assets/images/Justin.jpg')"/>

          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0 font-weight-black">Justin Smith, Ph.D.</h2>
              <h5 class="title mb-0 font-italic">Enterprise Director of Data Analytics</h5>
              <div>Experienced leader with a demonstrated history of working in healthcare and civic & social organization industries. Skilled in Advanced Analytics (Machine Learning, Data Science), Public Speaking, Data Translator, Curriculum Development, Molecular Biology, Neuroscience. Strong thought leading professional with a Doctor of Philosophy (Ph.D.) focused in Neuroscience from The University of South Dakota.</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img class="profilePic" :src="require('../assets/images/Irving.jpg')"/>

          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0 font-weight-black">Irving De la Cruz</h2>
              <h4 class="title mb-0 font-italic">Director, Solutions Engineering & Architecture</h4>
              <div>Irving De la Cruz is the Director of Solutions Engineering & Architecture for Unify Consulting in Seattle, WA. Irving brings more than 22 years of professional software engineering expertise in several industries including media and entertainment, telecommunications, and nuclear energy production.</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Speakers",
      metaInfo:{
        title: 'Speakers'
    }
};
</script>
<style scoped>
.profilePic {
  width: 85%;
  max-width: 400px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.unify-logo {
    width: 50%;
    max-width: 400px;
    height: auto;
    display: block;
    margin: 0 0;
}
</style>