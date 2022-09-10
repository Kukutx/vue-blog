import ShowBlogs from './components/ShowBlogs.vue'
import AddBlogs from './components/AddBlogs.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'
export default[
    {path:"/",component:ShowBlogs},
    {path:"/add",component:AddBlogs},
    {path:"/blog/:id",component:SingleBlog},  //设置blog的多重分页，id为网页的整数编号
    {path:"/edit/:id",component:EditBlog}     //设置blog的多重分页，id为网页的整数编号
]