import Blogs from "./components/Blogs";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

const routes=[

    {path:"/blog/:id", component:Blogs} ,
    {path:"/blog", component:BlogPage} ,
    {path:"/about-us",component:AboutUsPage} ,
    {path:"/profile", component:ProfilePage} ,
    {path:"/"  , component:HomePage ,exact:true} ,
    {component:NotFoundPage}, //shold be last item of array due to SWitch


]

export default routes