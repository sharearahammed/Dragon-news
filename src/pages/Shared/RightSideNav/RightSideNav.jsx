import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Google
        </button>
      </div>

      <div className="p-4 mb-6">
      <h2 className="text-3xl font-semibold mb-4">Find Us on</h2>
      <a className="p-4 flex gap-[10px] text-lg items-center border rounded-t-lg" href="">
        <FaFacebook></FaFacebook>
        Facebook
      </a>
      <a className="p-4 flex gap-[10px] text-lg items-center border" href="">
      <FaTwitter></FaTwitter>
        Facebook
      </a>
      <a className="p-4 flex gap-[10px] text-lg items-center border rounded-b-lg" href="">
      <GrInstagram></GrInstagram>
        Facebook
      </a>
    </div>

    <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
