import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const reducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    // case 'add_blogpost':

    //   return [...state,
    //   {
    //     id: Math.floor(Math.random() * 99999),
    //     title: action.payload.title,
    //     content: action.payload.content
    //   }];
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);

    case 'edit_blogPost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;

      });
    default:
      return state;
  }
};

const getBlogPosts= dispatch =>{
  return async()=>{
    const response= await jsonServer.get('/blogposts');
    dispatch({type:'get_blogposts',payload:response.data});
    console.log(await response.data)
  }
}

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', {title,content});
    { callback && callback(); }
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`,{title,content});
    dispatch({ type: 'edit_blogPost', payload: { id, title, content } });
    { callback && callback(); }
  }
}

export const { Context, Provider } = createDataContext(
  reducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);

/*
-----------------------------
shallow copy

data = 1;
data2 = 3

**data = 4**

{ 4 }



[     ]
[12H, [[][][][]]     ]
[11H, 3   ]
[10H,   []   ]

*/



/*
---------------------

context/redux - store (state globaly)
{
  posts: [],
  user: ...
}

state.posts = "...";

setState({
  ....
})


event (deleteButtonPressed) -> action (delete_blogpost) -> reducer -> update UI (render)
                                  /functions/

*/

/*
---------------

this.state = {
  data: 3,
  value: 4,
  lior: 5,
}

const obj = {
  ...state,
  value: 10
}

---------------------

*/