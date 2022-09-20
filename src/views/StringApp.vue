<template>
    <v-container fluid>
        <v-card class="mx-auto font-weight-bold" color="blue-grey-darken-1" style="width:800px">
            <center>
                <v-card-title class="font-weight-bold">String Manipulator </v-card-title>
            </center>
            <v-divider></v-divider>
            <v-container>
                <v-text-field color="#80cbc4" label="Enter a String" v-model="text" clearable :clear-icon-cb="onClearClicked">
                </v-text-field>
                <v-btn class="font-weight-bold" @click="doResult" color="#b0bec5" style="margin: 5px; color: black;">Results</v-btn>

                <br>
                <br>
                <v-row>
                    <v-col>Vowels:{{ vowels }}</v-col>
                    <v-col>Numbers: {{ numbers }} </v-col>
                    <v-col>Consonants: {{ consonants }}</v-col>
                    <v-col>Modified: {{ converted }}</v-col>
                </v-row>
            </v-container>

        </v-card>
    </v-container>


</template>
  
<script setup>
import { ref } from 'vue'

const text = ref()
const vowels = ref(0)
const numbers = ref(0)
const consonants = ref(0)
const converted = ref()

function doResult() {
    vowels.value = text.value.match(/[aeiou]/gi).length; // match to AEIOU
    numbers.value = text.value.match(/\d/g)?.length || 0; //match to digits otherwise 0
    consonants.value = text.value.match(/[bcdfghjklmnpqrstvwxyz]/gi).length; //match to consonant
    converted.value = text.value.replace(/[aeiou]/gi, '*');
    return vowels.value, numbers.value, consonants.value, converted.value
}


</script>
  