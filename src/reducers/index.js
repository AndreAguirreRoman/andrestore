import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headerNavbar from './headernavbarReducer';
import user from './userReducer';
import shop from './shopReducer'
import products from './productReducer';
import addresses from './userReducer'

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user,
  shop,
  products,
  addresses
});

export default rootReducer;