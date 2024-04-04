import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LefeSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Breaking from "./Breaking/Breaking";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Breaking></Breaking>
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold">This is Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2 border">
                <h2>News comming</h2>
                </div>

                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;