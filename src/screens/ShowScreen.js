import React, { useContext } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Context } from '../contexts/BlogContext';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = props => {
    const { state } = useContext(Context);


    const blogPost = state.find((blogPost) => blogPost.id == props.route.params.id)
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
};


const styles = StyleSheet.create({

});

export default ShowScreen;