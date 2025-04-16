const Search = () => {
  return (
    <div className="px-2 mb-5">
      <div className="relative">
        <input
          type="text"
          placeholder="إبحث بإسم أو كود المنتج"
          className="text-base pr-12 h-10 rounded-lg border border-[#ced4da] w-full text-right outline-0 focus:border-transparent hover:shadow-md"
        />
        <span className="absolute right-1 top-1 py-2 px-2 z-2 h-10">
          <i className="pi pi-search !font-bold text-[#6c757d]" />
        </span>
      </div>
    </div>
  );
};

export default Search;
