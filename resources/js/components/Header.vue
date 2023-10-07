<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container">
            <router-link class="navbar-brand textcolor" :to="{ name: 'home' }">LogoName</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto" v-if="auth">
                    <li class="nav-item active">
                        <router-link class="navbar-brand textcolor" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="navbar-brand textcolor" :to="{ name: 'category' }">Category</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="navbar-brand textcolor" :to="{ name: 'product' }">Product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="navbar-brand textcolor" :to="{ name: 'dashboard' }">Dashboard</router-link>
                    </li>


                </ul>

                <ul class="navbar-nav ml-auto" v-else="auth">
                    <li class="nav-item">
                        <router-link class="navbar-brand textcolor" :to="{ name: 'login' }">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="navbar-brand textcolor" :to="{ name: 'user-signup' }">SignUp</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import Axios from 'axios';

export default {
    methods: {
        // logout() {
        //     axios.post('/logout').then(response => {
        //         this.$router.push({ name: 'login' });
        //         this.$toast.success({
        //             title: 'success',
        //             message: 'LogOut  succeess'
        //         });
        //     });
        // }
    },
    computed: {
        auth() {
            return this.$store.getters.getAuthenticated;

        }
    }
}

</script>

<style lang="scss" scoped>
.textcolor {
    color: #ffff;

}
</style>