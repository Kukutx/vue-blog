import axios from 'axios'

//此文件用于配置axios的默认配置

//默认头
const instance = axios.create({
    baseURL:'https://vuedemo-b60b9-default-rtdb.firebaseio.com'
})

//配置默认头
// instance.defaults.headers.common['Authorization']= 'Toke'             //需要去定义             
// instance.defaults.headers.post['Content-type']= 'application/urlencode'   
// instance.defaults.headers.get['Accepts']= 'application/json'   

export default instance