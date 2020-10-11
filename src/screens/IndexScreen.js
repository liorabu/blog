import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../contexts/BlogContext';

export default IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext)
    return (
        <View>
            <Text>index Screeen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data={data}
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem={({ item }) =>
                    <Text>{item.title}</Text>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

