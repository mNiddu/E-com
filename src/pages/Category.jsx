import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions ,Grid} from '@mui/material';
import axios from 'axios';
import { useEffect,useState} from "react";
import { Link } from 'react-router-dom';

export default function Category() {
  const [categories, setCategories] = useState([]); // Correctly declare state

  useEffect(() => {
    //  alert("hiiiiiiii")
    axios.get("https://dummyjson.com/products/categories")
   
      .then((res) => {
        // alert("hi")
        console.log(res,"res");
        setCategories(res.data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(categories, "categories");
  return (
    

    <Grid container spacing={2} 
    style={{
    margin:"10px",
    padding:"10px",
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    flexWrap:"wrap"
    }}>
      
    


    {categories.map((item,i)=>{
      
      return(
        <Grid item xs={12}sm={6}md={4}>
        <Card sx={{ maxWidth: 345,backgroundColor:"#FF9933" }}>   
      <CardActionArea>
        <CardContent>
          <Link to={`/cat-product/${item.name}`}>
          
          <Typography gutterBottom variant="h5" component="div">
            {item.name} 
          </Typography></Link>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
    </Grid>
      )
    })}
    </Grid>

    

  );
}