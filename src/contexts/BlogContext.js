import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':

      return [...state, { id: Math.floor(Math.random() * 99999), title: `Blog Post #${state.length + 1}` }];
    case 'delete_blogpost':
      return state.filter(blogpost => blogpost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost,deleteBlogPost },
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