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

export default function DetailsMovie()
{
  const context = useContext(GlobalContext)
    return(
      context.SelectedMovie ?
   (
    <Card style={{margin:"15px"}}>
    <CardImg
      alt="Card image cap"
      src={`https://image.tmdb.org/t/p/original/${context.SelectedMovie.poster_path}`}
      
      style={{width:"50%",margin:"50px",borderRadius:"10px",height:"400px"}}
    />
    <CardBody style={{margin:"40px"}}>
      <CardTitle tag="h5">
        {context.SelectedMovie.title}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       subtitle
      </CardSubtitle>
      <CardText>
        {context.SelectedMovie.overview}
      </CardText>
    </CardBody>
  </Card>) : <p>no movie selected </p>
    );
}