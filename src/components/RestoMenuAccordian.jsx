
const RestoMenuAccordian = ({ menuData, isMenuOpen, setIsMenuOpenHandler }) => {


    return (
        <div className="border border-gray-300 bg-gray-50 rounded-lg shadow-md w-7/12 m-auto mt-4">
            <div className="p-5 flex flex-wrap justify-between">
                <h2 className="text-lg font-bold">{menuData.name}</h2>
                <h3 className="text-blue-500 underline cursor-pointer" onClick={() => setIsMenuOpenHandler(menuData.id)}>
                    View Menu
                </h3>
            </div>
            {isMenuOpen && (
                <div className="p-3 text-center">
                    <h6 className="text-xl font-bold">category: {menuData.category}</h6>
                    <h3>{menuData.description}</h3>
                    <h3>${menuData.price / 1000}</h3>
                </div>
            )}
        </div>
    )
}

export default RestoMenuAccordian;
