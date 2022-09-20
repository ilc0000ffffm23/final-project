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
              <v-btn to="/calc" color="orange-lighten-2" variant="outlined" >
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
                <v-expansion-panel-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex
                  ea commodo consequat.
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
          <br>
          <v-card class="mx-auto" max-width="344" color="#2b3a40" style="color: white">
            <v-img src="../img/calc.jpg" height="200px" cover></v-img>
  
            <v-card-title class="ml-1">
              Basic Calculator
            </v-card-title>
  
            <v-card-subtitle class="ml-1">
              Something to compute?
            </v-card-subtitle>
  
            <v-card-actions class="ml-2">
              <v-btn color="orange-lighten-2" variant="outlined">
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
                <v-expansion-panel-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex
                  ea commodo consequat.
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
  
        <v-col class="font-weight-bold">
          <v-card class="mx-auto" max-width="344" color="#2b3a40" style="color: white">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
  
            <v-card-title class="ml-1">
              Top western road trips
            </v-card-title>
  
            <v-card-subtitle class="ml-1">
              1,000 miles of wonder
            </v-card-subtitle>
  
            <v-card-actions class="ml-2">
              <v-btn color="orange-lighten-2" variant="outlined">
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
                <v-expansion-panel-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex
                  ea commodo consequat.
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
  
        <v-col order="last" class="font-weight-bold">
          <v-card class="mx-auto" max-width="344" color="#2b3a40" style="color: white">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
  
            <v-card-title class="ml-1">
              Top western road trips
            </v-card-title>
  
            <v-card-subtitle class="ml-1">
              1,000 miles of wonder
            </v-card-subtitle>
  
            <v-card-actions class="ml-2">
              <v-btn color="orange-lighten-2" variant="outlined">
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
                <v-expansion-panel-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex
                  ea commodo consequat.
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
  
  
  