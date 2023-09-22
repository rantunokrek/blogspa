<template>
    <div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="card-header"> Product Category</h5>
                            <router-link :to="{ name: 'create-category' }" class="btn btn-primary">Create
                                Category</router-link>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th style="width:100px" scope="col">Id</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th style="width:170px" scope="col">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="category in categories" :key="category.id">
                                        <td style="width:100px" scope="row">{{ category.id }}</td>
                                        <td scope="row">{{ category.name }}</td>
                                        <td scope="row">{{ category.slug }}</td>
                                        <td style="width:170px">
                                            <router-link :to="{ name: 'edit-category', params: { id: category.id } }"
                                                class="btn btn-primary btn-sm">Edit</router-link>

                                            <a href="#" @click.prevent="deleteCategoory(category.id)"
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
            categories: [],

        }
    },
    methods: {
        loadCategories() {

            axios.get(`/api/category`).then(response => {
                this.categories = response.data;
            });


        },
        // deleteCategoory(category) {
        //     axios.delete(`/api/category/${category.id}`).then(response => {
        //         this.$toast.success({
        //             title: 'success',
        //             message: 'category deleted succeessfylly'
        //         });

        //     });
        //     let index = this.categories.indexOf(category);
        //     this.categories.splice(index, category)
        // }
        deleteCategoory(id) {
            axios.delete(`/api/category/${id}`).then(response => {
                if (response.status === 200) {
                    this.loadCategories();
                }
            });
        }


    },
    mounted() {
        this.loadCategories()
    }
}

</script>

<style scoped></style>