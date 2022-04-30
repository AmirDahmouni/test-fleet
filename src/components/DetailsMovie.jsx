import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from "reactstrap"
import React,{useContext} from "react"
import GlobalContext from "../GlobalContext"
import ReactStars from "react-rating-stars-component";

export default function DetailsMovie()
{
  const context = useContext(GlobalContext)
    return(
      context.SelectedMovie ?
   (
    <Card style={{margin:"15px"}}>
     <h2 className="text-truncate font-size-14 mb-1" style={{margin:"30px"}}>Details Movie</h2>
      <div>
        <CardImg
          alt="Card image cap"
          src={`https://image.tmdb.org/t/p/original/${context.SelectedMovie.poster_path}`}
          style={{width:"40%",margin:"5px 30px",borderRadius:"10px",height:"400px"}}
        />
        <h2 className="text-truncate font-size-14 mb-1" style={{display:"inline", fontSize:"20px" }}>{context.SelectedMovie.title}</h2>
        
      </div>
     
    <CardBody style={{margin:"10px"}}>
    <ReactStars count={context.SelectedMovie.vote_average} color="#ffd700" size={24} />
    <CardTitle tag="h5" style={{display:"inline"}}>
        ( {context.SelectedMovie.vote_count} votes)
      </CardTitle>
      <CardTitle tag="h5">
        {context.SelectedMovie.original_title}
      </CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        <i className="mdi mdi-monitor-eye">views : {context.SelectedMovie.popularity}</i>
       
      </CardSubtitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        Language : {context.SelectedMovie.original_language.toUpperCase()}
      </CardSubtitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        Released : {context.SelectedMovie.release_date}
      </CardSubtitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        {context.SelectedMovie.adult ? true : false}
      </CardSubtitle>
      <CardText>
        {context.SelectedMovie.overview}
      </CardText>
    </CardBody>
  </Card>) : <p>no movie selected </p>
    );
}