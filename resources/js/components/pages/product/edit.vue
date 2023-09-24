<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="card-header"> Edit Product</h5>
                            <router-link :to="{ name: 'product' }" class="btn btn-primary">Product
                                List</router-link>
                        </div>
                        <div class="card">
                            <div class="row">
                                <div class="col-6 offset-3">
                                    <form @submit.prevent="saveProduct">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Product Title</label>
                                            <input v-model="productForm.title" type="text" name="title" class="form-control"
                                                :class="{ 'is-invalid': productForm.errors.has('title') }">
                                            <has-error :form="productForm" field="title"></has-error>

                                            <label for="exampleInputEmail1">Product Slug</label>
                                            <input v-model="productForm.slug" type="text" name="slug" class="form-control"
                                                :class="{ 'is-invalid': productForm.errors.has('slug') }">
                                            <has-error :form="productForm" field="slug"></has-error>

                                            <label for="exampleInputEmail1">Product Price</label>
                                            <input v-model="productForm.price" type="text" name="price" class="form-control"
                                                :class="{ 'is-invalid': productForm.errors.has('price') }">
                                            <has-error :form="productForm" field="price"></has-error>

                                            <div class="row">
                                                <div class="col-8">
                                                    <label for="exampleInputEmail1">Product Image</label>
                                                    <input type="file" @change="onImageChange" class="form-control">
                                                </div>
                                                <div class="col-4">
                                                    <div style="width:100%;
                                                  max-height:150px; overflow:hidden">
                                                        <img :src="image" alt="" class="img-fluid">
                                                    </div>

                                                </div>
                                            </div>


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
                image: '',
                description: '',
                _method: 'put'
            }),
            image: '',

        }
    },
    methods: {
        loadProductData() {
            let id = this.$route.params.id;
            axios.get(`/api/product/${id}/edit`).then(response => {
                let product = response.data;
                this.productForm.title = product.title;
                this.productForm.slug = product.slug;
                this.productForm.price = product.price;
                this.productForm.description = product.description;
                this.image = product.image;



            });
        },
        saveProduct() {
            let id = this.$route.params.id;
            this.productForm.post('/api/product/' + id, {
                transformRequest: [function (data, headers) {
                    return objectToFormData(data)
                }],
                onUploadProgress: e => {
                    // Do whatever you want with the progress event
                    console.log(e)
                }
            }).then(({ data }) => {
                this.image = data.image;

                this.$toast.success({
                    title: 'success',
                    message: 'Product update succeessfylly'
                });
            });

        },
        onImageChange(e) {
            const file = e.target.files[0]
            // Do some client side validation...
            this.productForm.image = file
        },
    },
    mounted() {
        this.loadProductData();
    }
}
</script>

<style lang="scss" scoped></style>