<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container">
            <router-link class="navbar-brand textcolor" :to="{ name: 'home' }">LogoName</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="navbar-brand textcolor" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="navbar-brand textcolor" :to="{ name: 'category' }">Category</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="navbar-brand textcolor" :to="{ name: 'product' }">Product</router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.textcolor {
    color: #ffff;

}
</style>