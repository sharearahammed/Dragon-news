import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(categorie => <Link to={`/categorie/${categorie.id}`} className="block ml-4 text-xl font-semibold" key={categorie.id}>{categorie.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;