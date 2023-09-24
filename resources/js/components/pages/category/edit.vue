<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="card-header"> Edit Category {{ categoryForm.name }}</h5>
                            <router-link :to="{ name: 'category' }" class="btn btn-primary">Category
                                List</router-link>
                        </div>
                        <div class="card">
                            <div class="row">
                                <div class="col-6 offset-3">
                                    <form @submit.prevent="updateCategory">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Category Name</label>
                                            <input v-model="categoryForm.name" type="text" name="name" class="form-control"
                                                :class="{ 'is-invalid': categoryForm.errors.has('name') }">
                                            <has-error :form="categoryForm" field="name"></has-error>

                                        </div>

                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary">Update</button>
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

import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

export default {
    data() {
        return {
            categoryForm: new Form({
                name: '',

            }),

        }
    },
    methods: {
        updateCategory() {
            let id = this.$route.params.id;
            this.categoryForm.put(`/api/category/${id}`).then(() => {

                this.$toast.success({
                    title: 'success',
                    message: 'category update succeessfylly'
                })
            })
        },
        loadCategory() {
            let id = this.$route.params.id;
            axios.get(`/api/category/${id}/edit`).then(response => {
                this.categoryForm.name = response.data.name;

            });
        }

    },
    mounted() {
        this.loadCategory();
    }
}
</script>

<style lang="scss" scoped></style>