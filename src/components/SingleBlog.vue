<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>作者：{{ blog.author }}</p>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories" :key="category">
                {{ category }}
            </li>
        </ul>
        <button @click="deleteSingleBlog()">删除</button>
        <router-link :to="'/edit/' + id">编辑</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "single-blog",
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        //vue-resource版本
        /* this.$http.get("https://vuedemo-b60b9-default-rtdb.firebaseio.com/posts/" + this.id + ".json")
        .then((data)=>{
            return data.json();
        })
        .then((data)=>{
            this.blog = data;
        }) 
        */

        //vue-axios版本
        axios.get("/posts/" + this.id + ".json")
            .then((data) => {
                this.blog = data.data;
            })

    },
    methods: {
        deleteSingleBlog() {
            // this.$http.delete("https://vuedemo-b60b9-default-rtdb.firebaseio.com/posts/" + this.id + ".json")   //vue-resource版本
            axios.delete("/posts/" + this.id + ".json")           //vue-axios版本
                .then(response => {
                    this.$router.push({ path: '/' })
                })
        }
    }
}
</script>

<style scoped>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>
