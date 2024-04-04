import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breaking = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-3">
      <button className="btn btn-secondary">BREAKING NEWS</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to={'/'}>Match Highlights: Germany vs Spain — as it happened !</Link>
        <Link className="mr-12" to={'/'}>Match Highlights: Germany vs Spain — as it happened !</Link>
        <Link className="mr-12 " to={'/'}>Match Highlights: Germany vs Spain — as it happened !</Link>
      </Marquee>
    </div>
  );
};

export default Breaking;
