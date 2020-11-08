import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../contexts/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  // navigation.setOptions({
  //   headerRight: () =>
  //     <TouchableOpacity onPress={() =>
  //       navigation.navigate('Create')}>
  //       <Feather name="plus" size={30} />
  //     </TouchableOpacity>
  // })

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}-{item.id} </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </>
  );
};

// IndexScreen.navigationOptions = () =>{
//   return {
//     headerRight: () => (
//       <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//         <Feather name="plus" size={30} />
//       </TouchableOpacity>
//     ),
//   };
// }

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'green'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
