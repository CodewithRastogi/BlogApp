import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext=createContext();
export default function AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);
    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        try{
           
            const result=await fetch(url);
            const output=result.json();
            console.log(output);
            setPosts(output.posts);
            setPage(output.page);
            setTotalPages(output.totalPages);
    
        }
        catch(err)
        {
            alert("Page not found");
            setPosts([]);
            setPage(1);
            setTotalPages(null);
        }
        setLoading(false);
   
    }
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }
    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}