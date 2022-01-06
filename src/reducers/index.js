import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headerNavbar from './headernavbarReducer';
import user from './userReducer';
import shop from './shopReducer'
import products from './productReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user,
  shop,
  products
});

export default rootReducer;