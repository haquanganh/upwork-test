const BottomBar = () => {
  return (
    <div className="fixed z-50 w-full h-16 bg-white border border-gray-200 bottom-0 dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm">
      <div className="grid grid-cols-5 h-full">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group cursor-pointer"
        >
          <i className="pi pi-home !text-sm"></i>
          <span className="text-xs pb-1">الرئيسية</span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group cursor-pointer"
        >
          <i className="pi pi-percentage !text-sm text-red-600"></i>
          <span className="text-xs pb-1">التخفيضات</span>
        </button>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 font-medium rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
          >
            <i className="pi pi-shopping-cart text-white pb-1"></i>
          </button>
        </div>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group cursor-pointer"
        >
          <i className="pi pi-credit-card !text-sm"></i>
          <span className="text-xs pb-1">الطلبات</span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group cursor-pointer"
        >
          <i className="pi pi-user !text-sm"></i>
          <span className="text-xs pb-1">حسابي</span>
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
