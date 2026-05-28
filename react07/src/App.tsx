import './App.css'
import NavBar from "./components/NavBar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Posts from "./pages/Posts.tsx";
import About from "./pages/About.tsx";
import PostDetalle from "./pages/PostDetalle.tsx";
import Comments from './pages/Comments.tsx';
import Users from "./pages/Users.tsx";
import UserDetail from "./pages/UserDetail.tsx";
import UserPosts from "./pages/UserPosts.tsx";
import ToDos from "./pages/ToDos.tsx";
import UserAlbums from "./pages/UserAlbums.tsx";

function App() {


  return (
    <>
      <NavBar/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<PostDetalle/>}/>
            <Route path="/posts/:id/comments" element={<Comments/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/:id" element={<UserDetail/>}/>
            <Route path="/users/:id/posts" element={<UserPosts/>}/>
            <Route path="/users/:id/todos" element={<ToDos/>}/>
            <Route path="/users/:id/albums" element={<UserAlbums/>}/>
        </Routes>
    </>
  )
}

export default App
