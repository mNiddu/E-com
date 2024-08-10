import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { useEffect,useState} from "react";
import axios from 'axios';

export default function SingleProduct() {
    const {id}=useParams()
    console.log(id);
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data.products)
        })
        .catch((err)=>{
            console.log(err);
        })
    })
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:'30px 60px',justifyContent:'center'}}>
        {products?.map((item,i)=>{
            return(
<Card sx={{ maxWidth: 400}}>
      <CardMedia
        sx={{ height: 340,objectFit:'contain'}}
        image={item.thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#bd3376"}}>
          {item.title}
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant ="h5" color="text.secondary" sx={{color:"green", fontWeight:'bold'}}>
          Price:${item.price}
        </Typography>
      </CardContent>
      <CardActions>
       <Link to={`/single/${item.id}`}> <Button size="small" variant='outlined' color='success' style={{width:'100%' }}>View More</Button></Link>

      </CardActions>
    </Card>
            )
        })}
    
</div>
  )
}
