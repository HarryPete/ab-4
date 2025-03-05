const Hamburger = ({setShowSidebar}) =>
{
    return(
        <div className="w-6 cursor-pointer flex flex-col gap-1" onClick={()=> setShowSidebar(true)}>
            {[1,2,3].map(() =>
            (
                <div className="p-0.5 rounded bg-green-600"></div>
            ))}
        </div>
    )
}

export default Hamburger