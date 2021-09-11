import Blogs from "./components/Blogs";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";

const routes=[

    {path:"/blog/:id", component:Blogs} ,
    {path:"/blog", component:BlogPage} ,
    {path:"/post/:id?", component:PostPage} , //we can id pas to it or nothing , id shold be number 
    {path:"/about-us",component:AboutUsPage} ,
    {path:"/profile", component:ProfilePage} ,
     //shold be last item of array due to SWitch
    {path:"/"  , component:HomePage ,exact:true} ,
    {component:NotFoundPage},



]

export default routes