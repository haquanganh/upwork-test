'use client';

import { fetchProductDetail } from '@/app/api/app';
import { CDN_URL } from '@/config/constants';
import { useGlobalContext } from '@/contexts/shop-context';
import { ProductDetail, RelatedProduct } from '@/types/app';
import { faCartPlus, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const ProductDetailComp = ({ productId }: { productId: string }) => {
  const { shopInfo } = useGlobalContext();
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(
    null
  );

  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);

  useEffect(() => {
    if (shopInfo?.Id) {
      (async () => {
        const shopInfoRes = await fetchProductDetail(productId, {
          Sid: shopInfo?.Id?.toString(),
        });
        const productData = (await shopInfoRes.json()).Data;
        setProductDetail(productData?.Product as ProductDetail);
        setRelatedProducts(productData?.RelatedProducts as RelatedProduct[]);
      })();
    }
  }, [shopInfo]);

  return (
    <div className="mt-5 mb-[48px]">
      <div className="flex items-center mx-auto justify-center pt-6 mb-6">
        <button className="ml-3 rounded border border-gray-300 bg-gray-100 px-3 py-1 leading-7 font-bold text-gray-600 hover:bg-gray-200 cursor-pointer">
          <i className="pi pi-arrow-right" />
        </button>
        <span className="text-2xl/loose text-gray-500 font-bold">
          ماكينة فرم اللحوم
        </span>
        <i className="pi pi-copy mr-2 py-0.25 px-1.5" />
        <i className="pi pi-share-alt mr-2" />
      </div>
      <div className="mb-4 border border-gray-200 bg-white p-6 shadow-md rounded gap-4 flex flex-col">
        {productDetail?.CoverImg && (
          <img
            className="max-h-[400px] rounded-md max-w-full h-auto object-contain"
            src={`${CDN_URL}/Prods/${productDetail?.CoverImg}`}
            alt={productDetail?.Name || 'Product image'}
            loading="lazy"
          />
        )}
        <div>
          <div className="text-3xl font-bold">
            <span className="line-through ml-2">
              {productDetail?.Caprice} د.ل
            </span>
            <span className="text-red-600">{productDetail?.SPrice} د.ل</span>
          </div>
          <div className="flex text-lg gap-2 mt-3 mb-3">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="pi pi-star" />
            ))}
          </div>
          <p className="text-sm">التقييمات (0) | كتابة تعليق</p>
          <hr className="mt-4 mb-4 block min-w-full border-t border-gray-300" />
          <p className="text-center font-semibold mb-2">مقاس</p>
          <div className="mb-2 text-sm leading-5 flex gap-2  mt-4">
            <div className="min-w-10 h-10 px-2 flex items-center justify-center border border-gray-500 rounded-full mb-3 cursor-pointer">
              2XS
            </div>
            <div className="min-w-10 h-10 px-2 flex items-center justify-center border border-gray-500 rounded-full mb-3 cursor-pointer">
              XS
            </div>
          </div>
          <button className="min-w-full rounded border-gray-400 hover:bg-gray-200 bg-gray-100 border px-4 py-2 font-bold shadow-md cursor-pointer flex items-center justify-center gap-2">
            أضـــف للسلة
            <FontAwesomeIcon icon={faCartPlus} className="fa-fw" />
          </button>
          <button className="min-w-full rounded hover:bg-[#b22923] border-[#dc2626] bg-[#d44f41] border px-4 py-2 font-bold shadow-md mt-4 cursor-pointer text-white flex items-center justify-center gap-2">
            إشتري الآن
            <FontAwesomeIcon icon={faMoneyBill} className="fa-fw" />
          </button>
        </div>
      </div>
      <div className="mb-4 border border-gray-200 bg-white p-6 shadow-md rounded">
        <p className="mb-6 text-lg leading-7 font-bold">تفاصيل المنتج</p>
        <p dangerouslySetInnerHTML={{ __html: productDetail?.Description! }} />
      </div>
      {relatedProducts?.length > 0 && (
        <div className="mb-4 border border-gray-200 bg-white p-6 shadow-md">
          <p className="mb-6 text-lg leading-7 font-bold">منتجات شبيهة</p>
          <div className="grid grid-cols-2 gap-4">
            {relatedProducts?.map((product) => (
              <div
                key={product.Id}
                className="relative border shadow-sm rounded-lg border-[#e5e7eb] text-sm"
              >
                <div className="h-36 rounded-t-lg w-full overflow-hidden">
                  <img
                    src={`${CDN_URL}/Prods/${product.CoverImg}`}
                    alt=""
                    className="my-auto h-full w-full object-cover"
                  />
                </div>
                <p className="text-hide-dots px-4 md:px-5 pt-5 font-bold font-600-smaller text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                  {product.Name}
                </p>
                <p className="flex justify-between px-4 md:px-5 pb-4 font-bold">
                  {product.Sprice} د.ل
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailComp;
