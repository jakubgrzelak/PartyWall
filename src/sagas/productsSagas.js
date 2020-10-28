import { call, put } from 'redux-saga/effects';
import partyWallApi from '../api';
import { navigate } from '../navigators/navigationActions';
import { CREATE_PRODUCT_SUCCESS, PRODUCT_REQUEST_FAILURE } from '../redux/products/types';

export function* createProduct(action) {
    try {
      const { data }= yield call(partyWallApi.products.createProduct, action.data);
      yield put({ type: CREATE_PRODUCT_SUCCESS, data });
      navigate('Home');
    } catch ({ response: { data: { message }}}) {
      yield put({ type: PRODUCT_REQUEST_FAILURE, message: e });
    }
}