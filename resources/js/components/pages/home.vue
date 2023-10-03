<template>
    <div class="container py-5">
        <h2>Our Productsddd</h2>
        <div class="row">
            <div class="col-3 mb-3" v-for="product in products" :key="product.id">
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
                        <button type="button" class="btn btn-primary"> read more</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-5">
            <pre>
                {{ products }}
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
        }

    },
    methods: {
        async loadProducts() {
            let { data } = await axios.get('/api/products');
            this.products = data.data;
        }
    },
    mounted() {
        this.loadProducts();
    }

} 
</script>