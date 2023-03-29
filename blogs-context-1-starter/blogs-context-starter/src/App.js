import { Header } from "./components/Header";
import { Blogs } from "./components/Blogs";
import {AppContext } from "./context/AppContext";
import { Pagination } from "./components/Pagination";
import "./App.css";
import { useContext, useEffect } from "react";
export default function App() {
  const{fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{fetchBlogPosts()},[]);
  return(
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}
