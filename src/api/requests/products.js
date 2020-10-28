import { basePost } from '.';
import { PRODUCTS_URL } from '../urls/productsUrls';

export default {
  createProduct: (data) => basePost({ url: PRODUCTS_URL, data }),
}