import Link from 'next/link';

export default function Page() {
  return (
    <div className="p-2">
      <Link href={'/products/5516'}>Go the product detail page</Link>
    </div>
  );
}
