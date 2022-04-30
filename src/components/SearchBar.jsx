import React,{useContext} from "react"
import GlobalContext from "../GlobalContext"
import {Input} from "reactstrap"

export default function SearchBar()
{
  const context = useContext(GlobalContext)

  const searchMovie=(name)=>{
    
  }


    return (
        <div className="search-box chat-search-box py-4">
        <div className="position-relative">
          <Input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e)=>searchMovie(e.target.value)}
          />
          <i class="bx bx-search-alt"></i>
        </div>
      </div>
    )
}