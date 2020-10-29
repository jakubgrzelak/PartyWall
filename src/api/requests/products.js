import { baseDelete, basePost } from '.';
import { PRODUCTS_URL, productUrl } from '../urls/productsUrls';

export default {
  createProduct: (data) => basePost({ url: PRODUCTS_URL, data }),
  deleteProduct: (data) => baseDelete({ url: productUrl(data) }),
}