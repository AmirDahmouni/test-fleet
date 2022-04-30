import React, { useState, useEffect,useContext } from 'react';
import { Link } from "react-router-dom"
import {TabPane,Media} from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"
import ReactStars from "react-rating-stars-component";
import GlobalContext from "../GlobalContext"

import axios from "axios"

export default function ListMovies ()
{
  
   const context = useContext(GlobalContext)
   
   const [listMovies,setListMovies]=useState([])    

   useEffect(()=>{
    
    axios.get("movies.json")
    .then(response=>{
      context.setMovies(response.data)
      setListMovies(response.data.results.sort((a,b)=>new Date(b.release_date) - new Date(a.release_date)))
    })
    .catch(err=>console.log(err.message))
    
   },[])

   const movieDetailsOpen=(id)=>{
     context.setSelectedMovie(listMovies.find(movie=>movie.id==id))
     window.scrollTo({top: 0, behavior: 'smooth'});
   }
    return (
      listMovies &&
        <TabPane>
        <div>
          <h5 className="font-size-14 mb-3">Recent {listMovies.length-1}</h5>
          <ul className="list-unstyled chat-list">
            <PerfectScrollbar >
              {listMovies.map(movie => (
                <li
                onClick={() =>movieDetailsOpen(movie.id)}
                  style={{margin:"30px"}}
                  key={movie.id}
                  className="active">
                  <Link to="#" />
                    <Media>
                      <div className="align-self-center me-3">
                        <i
                          className={
                            movie.status === "online"
                              ? "mdi mdi-circle text-success font-size-10"
                              : movie.status ===
                                "intermediate"
                              ? "mdi mdi-circle text-warning font-size-10"
                              : "mdi mdi-circle font-size-10"
                          }
                        />
                      </div>
                      <div className="align-self-center me-3">
                        <img
                        style ={{width:"70px",height:"70px"}}
                          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                          className="rounded-circle avatar-xs"
                        />
                      </div>

                      <Media className="overflow-hidden" body>
                        <h5 className="text-truncate font-size-14 mb-1">
                          {movie.title}
                        </h5>
                        <div className="font-size-11">
                          <i className="mdi mdi-monitor-eye">Released {movie.release_date.substring(0,4)}</i>
                        </div>
                        <p className="text-truncate mb-0">
                        <ReactStars count={movie.vote_average} color="#ffd700" size={24} />  
                        </p>
                      </Media>
                      <div className="font-size-11">
                      <i className="mdi mdi-monitor-eye">{movie.popularity}</i>
                      </div>
                    </Media>
                </li>
              ))}
            </PerfectScrollbar>
          </ul>
        </div>
      </TabPane>
    )
}