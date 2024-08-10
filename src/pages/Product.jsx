import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import {useState,useEffect} from "react";
import { Box, TextField } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);
  const [products,setProducts]=useState([])

  useEffect(()=>{
    axios
    .get('https://dummyjson.com/products')
    .then((res) => {
        console.log(res);
        setProducts(res.data.products)
      })
      .catch((error)=>{
        console.log(error);
      })
  },[]);
  console.log(products,"productsDetail");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const handleSearch=(e)=>{
  let data=e.target.value
  data=data.toLowerCase()
  console.log(data);
  axios.get(`https://dummyjson.com/products/search?q=${data}`)
  .then((res)=>{
    console.log(res);
    setProducts(res.data.products)
  }).catch((error)=>{
    console.log(error);
  })
}
  return (
    <>
    <Typography gutterBottom variant="h3" component="div" sx={{color:"#040000",textAlign:'center',margin:'10px',display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'center',alignItems:"center"}}>
         Products
    </Typography>
      <Box sx={{ 
         display: 'flex',
         alignItems: 'flex-end' ,
         justifyContent:"flex-end",
         marginRight:"150px"
         }}
         >
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Search Products" variant="standard" sx={{width:"500px",color:"#ff0011"}}
        onChange={handleSearch}
         />
      </Box>

    <div style={{display:'flex',flexWrap:'wrap',gap:'30px 60px',justifyContent:'center',margin:"10px",alignItems:"flex-end"}}>


    
    {products.length>0?products.map((item,index)=>{
      return(
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader={item.category}
        sx={{color:"darkRed",fontWeight:"bold"}}
      />
      <CardMedia
      sx={{ height: 340,objectFit:'contain'}}
        component="img"
        height="194"
        image={item.thumbnail}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>

        <Typography variant ="h5" color="text.secondary" sx={{color:"green", fontWeight:'bold'}}>
          Price:${item.price}
        </Typography>



      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{color:"#bd3376"}} />
        </IconButton>
        <IconButton aria-label="share" sx={{color:"#bd3376"}}>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div style={{display:"flex",gap:"20px"}}>

          <Typography paragraph sx={{color:"#bd3376"}}>Brand:
          {item.brand}
          </Typography>
          </div>
          
          <div style={{display:"flex",gap:"20px"}}>

          <Typography paragraph sx={{color:"#bd3376"}}>Rating:
          {item.rating}
          </Typography>
          <Typography paragraph sx={{color:"#bd3376"}}>Shipping:
          {item.shippingInformation}
          </Typography>
          </div>
        </CardContent>
      </Collapse>
    </Card>
    
      )
   
    }):"No data found"}
    </div>
    </>
    
    
  );
}
