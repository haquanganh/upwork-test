import { CDN_URL } from '@/config/constants';

const Footer = () => {
  return (
    <div className="mt-5 h-auto w-full mb-16 bg-white pt-10 pb-3 rounded-t-[50px] shadow-lg px-4">
      <div className="flex gap-3 flex-col">
        <p className="md:text-xl text-lg text-center md:text-right font-bold">
          ezone
        </p>
        <p className="leading-loose px-5 md:px-0 text-center md:text-right">
          متجر الكتروني مختص بمنتجات الهواتف وكماليته{' '}
        </p>
        <div className="social-icons flex justify-center md:justify-start align-items-center mt-2">
          <i className="pi pi-instagram text-gray-500 text-sm inline-flex justify-start items-center border-white gap-2 rounded-full p-3 transition-colors duration-100 ease-in-out hover:bg-white hover:text-blue-500 cursor-pointer" />
          <i className="pi pi-facebook text-gray-500 text-sm inline-flex justify-start items-center border-white gap-2 rounded-full p-3 transition-colors duration-100 ease-in-out hover:bg-white hover:text-blue-500 cursor-pointer" />
        </div>
      </div>
      <p className="mb-5 mt-4 md:mt-0 font-bold text-center"> تواصل معنا </p>
      <div className="flex flex-wrap items-start justify-center  gap-2">
        <a className="whitespace-nowrap">
          <i className="pi pi-phone pl-1 text-sm"></i>
          <span>0920000000</span>
        </a>
        <a className="whitespace-nowrap">
          <i className="pi pi-phone pl-1 text-sm"></i>
          <span> 0910000000 </span>
        </a>
        <a className="whitespace-nowrap">
          <i className="pi pi-envelope pl-1 text-sm"></i>
          <span>sephax.walou@gmail.com</span>
        </a>
      </div>
      <p className="mb-5 mt-6 font-bold text-center">طرق الدفع</p>
      <div className="flex flex-wrap items-start justify-center gap-4">
        <img
          className="transition-all duration-300 max-h-5"
          src={`${CDN_URL}/Assets/Partners/debit-card.png`}
          alt="بطاقة مصرفية"
          title="بطاقة مصرفية"
        />
        <img
          className="transition-all duration-300 max-h-5"
          src={`${CDN_URL}/Assets/Partners/mobicash.png`}
          alt="موبي كاش"
          title="موبي كاش"
        ></img>
        <img
          className="transition-all duration-300 max-h-5"
          src={`${CDN_URL}/Assets/Partners/masrefi-pay.png`}
          alt="مصرفي باي"
          title="مصرفي باي"
        ></img>
        <img
          className="transition-all duration-300 max-h-5"
          src={`${CDN_URL}/Assets/Partners/yosr-pay.png`}
          alt="يسر باي"
          title="يسر باي"
        ></img>
        <img
          className="transition-all duration-300 max-h-5"
          src={`${CDN_URL}/Assets/Partners/nab4pay.png`}
          alt="ناب 4 باي"
          title="ناب 4 باي"
        ></img>
        <img
          className="transition-all duration-300 max-h-5"
          src={`${CDN_URL}/Assets/Partners/sadad.png`}
          alt="سداد"
          title="سداد"
        ></img>
      </div>
      <hr className="font-normal text-inherit border-t border-gray-200 mt-5" />
      <div className="flex items-center pt-2 text-xs">
        <a href="">سياسية الإستبدال والإسترجاع</a>
        <div className="flex items-center gap-2 mr-6">
          <span>صُنع بواسطة</span>
          <a className="text-gray-500 transition-all duration-300 gap-2 flex items-center">
            <img
              width={22}
              height={22}
              src="https://sandbox.ezone.ly/assets/img/ezone.ico"
              alt=""
            />
            <span>إيزون</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
