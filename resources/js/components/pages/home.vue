<template>
    <div class="container py-5">
        <h2>Our Productsddd</h2>
        <div class="row">
            <div class="col-3 mb-3" v-for="product in   products  " :key="product.id">
                <div class="card">
                    <img :src="product.image" class="card-img-top"
                        style="height: 150px; object-fit: cover; overflow: hidden" alt="...">
                    <div class="card-body">
                        <div class="mb-2 d-flex justify-content-between">
                            <label class="badge badge-danger mb-3"> </label>
                            <h4></h4>
                        </div>
                        <h5 class="card-title">
                            {{ product.title }}
                        </h5>
                        <p> {{ product.description, 40 }}</p>
                        <router-link class="navbar-brand textcolor"
                            :to="{ name: 'details', params: { slug: product.slug } }">read</router-link>


                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            next_page_url: null,
            apiCallLoaded: false,
        }

    },
    methods: {
        async loadProducts() {
            let { data } = await axios.get('/api/products');
            this.products = data.data;
            this.next_page_url = data.next_page_url;
            this.apiCallLoaded = true;
        },
        async loadMoreProducts(url) {
            let { data } = await axios.get(url);

            let products = data.data;
            products.forEach(element => {
                this.products.push(element);
            });
            // this.products.concat();
            this.next_page_url = data.next_page_url;
        },
    },
    mounted() {
        this.loadProducts();
    }

} 
</script>