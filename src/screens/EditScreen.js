import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../contexts/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = props => {
    const id = props.route.params.id;
    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content,()=>props.navigation.pop());
        }}
    />
};

const styles = StyleSheet.create({
});

export default EditScreen;