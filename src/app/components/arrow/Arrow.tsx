import Link from "../link/Link";
import "./style.css";

const Arrow = () => {
  return (
    <Link to="sobre()">
      <div className=" absolute left-[50%] bottom-10">
        <span className="arrow "></span>
      </div>
    </Link>
  );
};

export default Arrow;
