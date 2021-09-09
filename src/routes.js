import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

const routes=[
    {path:"/"  , component:HomePage ,exact:true} ,
    {path:"/about-us",component:AboutUsPage} ,
    {path:"/profile", component:ProfilePage} ,
    {component:NotFoundPage} //shold be last item of array due to SWitch

]

export default routes