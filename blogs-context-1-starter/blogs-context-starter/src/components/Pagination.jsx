import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export   const Pagination=()=>{
 const{page,totalPages,handlePageChange}=useContext(AppContext);
 return(
    <div>
        <div>       
            <div>
            {
                page>1 &&(
                    <button onClick={()=>handlePageChange(page-1)}>
                        Previous
                    </button>
                )
            }
            {
                page<totalPages &&(
                    <button onClick={()=>handlePageChange(page+1)}>
                        Next
                    </button>
                )
            }
            </div>
            <p> Page {page} of {totalPages}</p>
        </div>
 
    </div>
 );
}