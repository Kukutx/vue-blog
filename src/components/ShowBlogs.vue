<template>
  <div v-theme:column="'theme'" id="show-blogs">
    <!-- <h1>Show - Blogs</h1> -->
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.title">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>
        {{ blog.content | snippet }}
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import axios from '../axios.auth'     //使用自建的axios默认配置
export default {
  name: 'show-blogs',
  data() {
    return {
      blogs: [],
      search: ""
    }
  },
  created() {
    // this.$http.get("https://vuedemo-b60b9-default-rtdb.firebaseio.com/posts.json")      //vue-resource版本
    axios.get("/posts.json")              //vue-axios版本
      .then((data) => {
        //vue-resource版本
        //return data.json();

        //vue-axios版本
        return data.data;
      }).then((data) =>{
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      })
  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  },
  filters: {
    "to-uppercase": function (value) {     //转换大写
      return value.toUpperCase();
    }
  }
}
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a {
  color: #444;
  text-decoration: none;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
