const HeaderShop = () => {
    return (
        <div className="flex flex-row justify-between w-full items-center h-full text-slate-400">
            <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
            </button>
            <h2
                className='text-sm font-medium'>
                Categorias
            </h2>
        </div>
    );
}

export default HeaderShop;