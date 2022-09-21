<template>
  <v-container fluid class="">
    <footer style="border-radius: 15px;">
      <span class="MyId">Leaderboards</span>
    </footer>

    <v-card color="brown-lighten-5" class="border-rounded mx-auto" style="width: 720px">
      <v-table style="border-color: black;">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in Users" :key="user.key">
            <td>{{ user.email }}</td>
            <td>{{ user.score }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script>
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { ref, onUnmounted } from "vue";

// const db = getFirestore();
// const userRef = collection(db, "users");

export default {
  data() {
    return {
      Users: [],
      db: getFirestore(),
    };
  },
  created() {
    getDocs(collection(getFirestore(), "users")).then((snap) => {
      this.Users = [];
      snap.forEach((doc) => {
        this.Users.push({
          key: doc.id,
          email: doc.data().email,
          score: doc.data().score,
        });
        console.log(this.Users);
      });
    });
  },
  methods: {},
};
</script>