import React,{useContext} from "react"
import GlobalContext from "../GlobalContext"
import {Input} from "reactstrap"
import axios from "axios"

export default function SearchBar()
{
  const context = useContext(GlobalContext)

  const searchMovie=(name)=>{
    if(name.length!=0)
    {
      axios.get(`${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`)
      .then(response=>{
      context.setMovies(response.data.results)
      })
      .catch(err=>console.log(err.message))
    }
    else {
      axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1}`)
    .then(response=>{
      context.setMovies(response.data.results)
    })
    .catch(err=>console.log(err.message))
    }
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