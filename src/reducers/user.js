function user(state={
  data: {
    loading: true,
    avatar_url: '',
    create_at: '',
    loginname: '',
    score: '',
    recent_replies: [],
    recent_topics: []
  },
  loading: true
},action){
  switch(action.type){
    case 'USER_UPDATE':
      return {
        data: state.data,
        loading: true
      }
    case 'USER_UPDATE_SUCC':
      return {
        data: action.data.data,
        loading: false
      }
    case 'USER_UPDATE_ERROR':
      return {
        data: {
          loading: true,
          avatar_url: '',
          create_at: '',
          loginname: '',
          score: '',
          recent_replies: [],
          recent_topics: []
        },
        loading: false
      }
    default:
      return state
  }
}

export default user;
