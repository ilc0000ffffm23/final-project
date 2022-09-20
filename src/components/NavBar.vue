<template>
    <nav class="nav">
        <v-toolbar app style="background-color: #0f2027;">
            <v-app-bar-nav-icon color="white" @click='toggleDrawer'></v-app-bar-nav-icon>
            <v-toolbar-title>
                
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- dropdown menu -->
            <v-menu open-on-hover color="#2b3a40">
                <template v-slot:activator="{ props }">
                    <v-btn color="white" v-bind="props">
                        Dropdown
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" router :to="item.path"
                        :prepend-icon="item.icon">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" flat
                color="black">
                <v-icon color="yellow">mdi-star</v-icon>
                <span>Click for Fun</span>
            </v-btn>

            <v-btn @click="handleSignOut" v-if="isLoggedIn" color="black">
                <v-icon color="white">mdi-logout</v-icon>
                <strong><span>Sign Out</span></strong>
              </v-btn>
        


        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" style="background: url('../img/dr.jpg') no-repeat center center fixed !important;
            background-size: cover;">
            <center>
                <br>
                <v-list-item-title>
                    <h3>Vue Panel</h3>
                </v-list-item-title>
            </center>
            <br>
            <v-divider></v-divider>
            <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon"
                color="white">
                <v-list-item-title>{{ item.title }}</v-list-item-title>

            </v-list-item>

        </v-navigation-drawer>
    </nav>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const drawer = ref(false)

const isLoggedIn = ref(false);

const items = ref([
    { title: 'Home', icon: 'mdi-home', path: '/' },
    { title: 'Calculator', icon: 'mdi-calculator-variant', path: '/calc' },
    { title: 'Quiz Pro Quo', icon: 'mdi-lightbulb-on', path: '/quiz' },
    { title: 'About the App', icon: 'mdi-folder-information', path: '/aboutapp' }
   
])

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      const info = user.email;
      console.log(info);
    } else {
      isLoggedIn.value = false;
      console.log("not logged in");
    }
  });
});
function toggleDrawer() {
  return (drawer.value = !drawer.value);
}
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/signin");
  });
};
</script>
  
<style scoped>
h3 {
    color: white;
}

span {
    color: white;
}

.nav {
    font-size: 24px;
}
</style>