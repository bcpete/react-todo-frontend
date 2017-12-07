export default (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        token: action.token
      };
    case 'LOGOUT':
      return {
        
      };
    case 'REGISTER':
      return {
        token: action.token
      };
    default:
      return state;
  }
};