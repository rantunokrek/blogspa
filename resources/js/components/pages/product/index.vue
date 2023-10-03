<template>
    <div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 :to="{ name: '/product' }" class="card-header"> Product List</h5>
                            <router-link :to="{ name: 'create-product' }" class="btn btn-primary">Create
                                Product</router-link>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th style="width:100px" scope="col">Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Img</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Description</th>
                                        <th style="width:170px" scope="col">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="product in products" :key="product.id">
                                        <td style="width:100px" scope="row">{{ product.id }}</td>
                                        <td scope="row">{{ product.title }}</td>
                                        <td scope="row">
                                            <div class="div" style=" max-width: 120px; max-height:120px overflow:hidden">
                                                <img :src="product.image" alt="" class="img-fluid">
                                            </div>
                                        </td>
                                        <td scope="row">{{ product.price }}</td>
                                        <td scope="row">
                                            <span v-if="product.category"> {{ product.category.name }}</span>
                                            <span v-else>{{ product.category_id }} </span>


                                        </td>
                                        <td scope="row">{{ product.description }}</td>

                                        <td style="width:170px">
                                            <router-link :to="{ name: 'edit-product', params: { id: product.id } }"
                                                class="btn btn-primary btn-sm">Edit</router-link>

                                            <a href="#" @click.prevent="deleteProduct(product.id)"
                                                class="btn btn-danger btn-sm">Delete</a>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            products: [],

        }
    },
    methods: {
        loadProducts() {

            axios.get('/api/product').then(response => {
                this.products = response.data;
            });


        },
        deleteProduct(id) {
            axios.delete(`/api/product/${id}`).then(response => {
                if (response.status === 200) {
                    this.loadProducts();
                    this.$toast.success({
                        title: 'success',
                        message: 'Product Delete succeessfylly'
                    });
                }
            });
        }


    },
    mounted() {
        console.log('hello');
        this.loadProducts()
    }
}

</script>

<style scoped></style>