import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Detail</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;