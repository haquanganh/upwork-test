import { API_URL } from '@/config/constants';
import { getCurrentDomain } from '@/utils/app';

const fetchShopInfo = () => {
  return fetch(`${API_URL}/shop/getRequestShopId`, {
    referrer: getCurrentDomain(),
  });
};

const fetchProductDetail = (
  productId: string,
  headers: Record<string, string>
) => {
  return fetch(`${API_URL}/ShopProducts/ProductDetail/${productId}`, {
    headers,
  });
};

export { fetchShopInfo, fetchProductDetail };
