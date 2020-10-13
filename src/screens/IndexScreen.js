import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../contexts/BlogContext';
import {Feather} from '@expo/vector-icons'

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <Feather style={styles.icon} name="trash" />
          </View>
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  row:{
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    paddingVertical:20,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:'green'
  },
  title:{
    fontSize:18
  },
  icon:{
    fontSize:24
  }
});

export default IndexScreen;
