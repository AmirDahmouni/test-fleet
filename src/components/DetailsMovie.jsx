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
import Rating from '@mui/material/Rating';

export default function DetailsMovie()
{
  const context = useContext(GlobalContext)
    return(
      context.SelectedMovie ?
   (
    <Card style={{margin:"5px"}}>
     <h2 className="text-truncate font-size-14 mb-1" style={{margin:"30px"}}>Details Movie</h2>
      <div>
        <CardImg
          alt="Card image cap"
          src={`${process.env.REACT_APP_BASE_PATH}/${context.SelectedMovie.poster_path}`}
          style={{width:"40%",margin:"5px 30px",borderRadius:"5px",height:"350px"}}
        />
        <h2 className="text-truncate font-size-14 mb-1" style={{display:"inline", fontSize:"20px" }}>{context.SelectedMovie.title}</h2>
        
      </div>
     
    <CardBody style={{margin:"10px"}}>
    <Rating name="read-only" value={context.SelectedMovie.vote_average/2} readOnly />
    <CardTitle tag="h5" style={{display:"inline"}}>
        ( {context.SelectedMovie.vote_count} reviews)
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
        Adult : {context.SelectedMovie.adult ? "true" : "false"}
      </CardSubtitle>
      <CardText>
        {context.SelectedMovie.overview}
      </CardText>
    </CardBody>
  </Card>) : 
      <Card style={{margin:"15px"}}>
        <h2 className="text-truncate font-size-14 mb-1" style={{fontSize:"50px",margin:"100px" }}>Choose Your Movie NOW !</h2>
        <CardImg
          alt="Card image cap"
          src="./welcome.png"
          style={{width:"80%",margin:"100px",borderRadius:"10px",height:"400px"}}
        />
        </Card>
    );
}