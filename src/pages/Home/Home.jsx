import { useContext } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LefeSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Breaking from "./Breaking/Breaking";
import { AuthContext } from "../../Providers/AuthProvider";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const {news} = useContext(AuthContext);
    console.log(news)
    return (
        <div>
            <Header></Header>
            <Breaking></Breaking>
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold">This is Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2 ">
                {
                    news.map(aNews=> <NewsCard key={aNews.id}
                        aNews={aNews}></NewsCard>)
                }
                </div>

                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;