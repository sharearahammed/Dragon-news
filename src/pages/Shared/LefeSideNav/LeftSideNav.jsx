import { useEffect, useState } from "react";

const LeftSideNav = () => {

    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        fetch('/categories.json')
    },[])

    return (
        <div>
            <h2 className="text-2xl">Left Side Nav</h2>
        </div>
    );
};

export default LeftSideNav;