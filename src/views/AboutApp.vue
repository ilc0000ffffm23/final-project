<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col order="first" class="font-weight-bold">
        <v-card class="mx-auto" max-width="344" color="#2b3a40" style="color: white">
          <v-img src="../img/calc.jpg" height="200px" cover></v-img>

          <v-card-title class="ml-1">
            Basic Calculator
          </v-card-title>

          <v-card-subtitle class="ml-1">
            Something to compute?
          </v-card-subtitle>

          <v-card-actions class="ml-2">
            <v-btn to="/calc" color="orange-lighten-2" variant="outlined">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

          </v-card-actions>

          <div class="text-subtitle-2 mb-2"></div>

          <v-expansion-panels>
            <v-expansion-panel v-for="i in 1" :key="i">
              <v-expansion-panel-title>
                Learn More
              </v-expansion-panel-title>
              <v-expansion-panel-text style="text-align: justify;">
                A simple calculator made in javascript with all basic mathematical operators.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
        <br>
        <v-card class="mx-auto" max-width="344" color="#2b3a40" style="color: white">
          <v-img src="../img/vuet.jpg" height="200px"></v-img>

          <v-card-title class="ml-1">
            About Vuetify
          </v-card-title>

          <v-card-subtitle class="ml-1">
            Want to know more about Vuetify?
          </v-card-subtitle>

          <v-card-actions class="ml-2">
            <v-btn to="/calc" color="orange-lighten-2" variant="outlined">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

          </v-card-actions>

          <div class="text-subtitle-2 mb-2"></div>

          <v-expansion-panels>
            <v-expansion-panel v-for="i in 1" :key="i">
              <v-expansion-panel-title>
                Learn More
              </v-expansion-panel-title>
              <v-expansion-panel-text style="text-align: justify;">
                Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>

      <v-col class="font-weight-bold">
        <v-card class="mx-auto" max-width="344" color="#2b3a40" style="color: white">
          <v-img src="../img/str.jpg" height="200px" cover></v-img>

          <v-card-title class="ml-1">
            String App
          </v-card-title>

          <v-card-subtitle class="ml-1">
            Ready for some cool stuff?
          </v-card-subtitle>

          <v-card-actions class="ml-2">
            <v-btn to="/string" color="orange-lighten-2" variant="outlined">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

          </v-card-actions>

          <div class="text-subtitle-2 mb-2"></div>

          <v-expansion-panels>
            <v-expansion-panel v-for="i in 1" :key="i">
              <v-expansion-panel-title>
                Learn More
              </v-expansion-panel-title>
              <v-expansion-panel-text style="text-align: justify;">
                A simple String converter that uses regex functions to replace vowerls, consonants and count the number of words and integers.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
        <br>
        <v-card class="mx-auto" max-width="344" color="#2b3a40" style="color: white">
          <v-img src="../img/me.jpg" height="200px" cover></v-img>

          <v-card-title class="ml-1">
            About the Developer
          </v-card-title>

          <v-card-subtitle class="ml-1">
            Know more about the Developer
          </v-card-subtitle>

          <v-card-actions class="ml-2">
            <v-btn to="/aboutme" color="orange-lighten-2" variant="outlined">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

          </v-card-actions>

          <div class="text-subtitle-2 mb-2"></div>

          <v-expansion-panels>
            <v-expansion-panel v-for="i in 1" :key="i">
              <v-expansion-panel-title>
                Learn More
              </v-expansion-panel-title>
              <v-expansion-panel-text style="text-align: justify;">
                Explore more about the Developer.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>

      <v-col order="last" class="font-weight-bold">
        <v-card class="mx-auto" max-width="344" color="#2b3a40" style="color: white">
          <v-img src="../img/quiz.jpg" height="200px" cover></v-img>

          <v-card-title class="ml-1">
            Quiz Pro Quo
          </v-card-title>

          <v-card-subtitle class="ml-1">
            Ready to learn more cool stuffs?
          </v-card-subtitle>

          <v-card-actions class="ml-2">
            <v-btn to="/quiz" color="orange-lighten-2" variant="outlined">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

          </v-card-actions>

          <div class="text-subtitle-2 mb-2"></div>

          <v-expansion-panels>
            <v-expansion-panel v-for="i in 1" :key="i">
              <v-expansion-panel-title>
                Learn More
              </v-expansion-panel-title>
              <v-expansion-panel-text style="text-align: justify;">
                A quiz app that made possible using opentDB api and axios dependencies.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>



    </v-row>
  </v-container>
</template>
  
<script>
export default {
  data: () => ({
    alignments: [
      'start',
      'center',
      'end',
    ],
  }),
}
</script>
  
<style scoped>

</style>
  
  
  