<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>博客</router-link>       <!--跳转到链接 基于 a 标签-->
                <router-link to="/add" exact>写博客</router-link>  <!--exact 是vue的防止切换样式重复（具体可以参考官网）在导航切换问题上, 切换到别的路由的时候,激活样式都一直存在的，加上就解决了-->
            </li>
        </ul>
    </nav>
</template>

<script>

</script>

<style scoped>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav{
    background: crimson;
    padding: 30px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: rgba(255, 255, 255, 0.8);
    color: #444;
}
</style>
