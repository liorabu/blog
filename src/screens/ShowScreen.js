import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../contexts/BlogContext';

const ShowScreen =props=>{
 
    const {state}=useContext(Context);

    const blogPost=state.find((blogPost)=>blogPost.id==props.route.params.id)
return(
     <Text>{blogPost.title}</Text>
)
};

const styles= StyleSheet.create({

});

export default ShowScreen;