import { Metadata } from 'next/types';
import ProductDetail from './product-detail';

export const metadata: Metadata = {
  title: 'ezone',
  description: 'متجر الكتروني مختص بمنتجات الهواتف وكماليته',
  openGraph: {
    images: `https://ik.imagekit.io/a01bjbmceb/FavIcon/6_b0fd721f-992c-41fc-9cf8-f945a8f5bc41.png`,
  },
};

export default async function Page(props: { params: Record<string, string> }) {
  const params = await props.params;

  return <ProductDetail productId={params.id} />;
}
