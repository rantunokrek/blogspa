<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="card-header"> Create Product</h5>
                            <router-link :to="{ name: 'create-product' }" class="btn btn-primary">Product
                                List</router-link>
                        </div>
                        <div class="card">
                            <div class="row">
                                <div class="col-6 offset-3">
                                    <form @submit.prevent="createProduct">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Product Title</label>
                                            <input v-model="productForm.title" type="text" name="title" class="form-control"
                                                :class="{ 'is-invalid': productForm.errors.has('title') }">
                                            <has-error :form="productForm" field="title"></has-error>

                                            <label for="exampleInputEmail1">Product Slug</label>
                                            <input v-model="productForm.slug" type="text" name="slug" class="form-control"
                                                :class="{ 'is-invalid': productForm.errors.has('slug') }">
                                            <has-error :form="productForm" field="slug"></has-error>
                                            <div class="form-group">
                                                <label for="">Select Product Category</label>
                                                <select name="category_id" class="form-control"
                                                    v-model="productForm.category_id"
                                                    :class="{ 'is-invalid': productForm.errors.has('category_id') }">
                                                    <option style="display:none;" value="" selected>Select Category</option>
                                                    <option :value="category.id" v-for="category in categories"
                                                        :key="category.id"> {{ category.name }}
                                                    </option>
                                                </select>
                                                <has-error :form="productForm" field="category_id"></has-error>
                                            </div>

                                            <label for="exampleInputEmail1">Product Price</label>
                                            <input v-model="productForm.price" type="text" name="price" class="form-control"
                                                :class="{ 'is-invalid': productForm.errors.has('price') }">
                                            <has-error :form="productForm" field="price"></has-error>

                                            <label for="exampleInputEmail1">Product Image</label>
                                            <input type="file" @change="onImageChange" class="form-control">


                                            <label for="exampleInputEmail1">Product description</label>
                                            <textarea v-model="productForm.description" type="text" name="description"
                                                class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>



                                        </div>

                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary">Create Product</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script >

import { objectToFormData } from 'object-to-formdata';
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

export default {
    data() {

        return {
            productForm: new Form({
                title: '',
                slug: '',
                price: '',
                category_id: '',
                image: '',
                description: ''

            }),
            categories: [],

        }
    },
    methods: {
        createProduct() {

            this.productForm.post('/api/product', {
                transformRequest: [function (data, headers) {
                    return objectToFormData(data)
                }],
                onUploadProgress: e => {
                    // Do whatever you want with the progress event
                    console.log(e)
                }
            }).then(({ data }) => {
                this.productForm.title = '';
                this.productForm.slug = '';
                this.productForm.price = '';
                this.productForm.image = '';
                this.productForm.description = '';
                this.$toast.success({
                    title: 'success',
                    message: 'Product uploaded succeessfylly'
                });
            });

        },
        onImageChange(e) {
            const file = e.target.files[0]
            // Do some client side validation...
            this.productForm.image = file
        },
        loadCategories() {
            axios.get('/api/category').then(response => {
                this.categories = response.data;
            })
        }
    },
    mounted() {
        this.loadCategories();
    }
}
</script>

<style lang="scss" scoped></style>