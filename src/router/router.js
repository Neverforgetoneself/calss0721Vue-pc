import vue from "vue"
import vueRouter from "vue-router"

import Home from "../views/Home"
import Login from "../views/Login"
import Search from "../views/Search"
import Register from "../views/Register"
vue.use(vueRouter)

export default  new vueRouter({
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/login",
            component:Login
        },
       
        {
            path:"/search",
            component:Search
        },
       
        {
            path:"/register",
            component:Register
        }
    ]
})