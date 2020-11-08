import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':

      return [...state,
      {
        id: Math.floor(Math.random() * 99999),
        title: action.payload.title,
        content: action.payload.content
      }];
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

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    { callback && callback(); }
  };
};

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blogPost', payload: { id, title, content } });
    { callback && callback(); }
  }
}

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'Test title', content: 'Test content', id: 1 }]
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