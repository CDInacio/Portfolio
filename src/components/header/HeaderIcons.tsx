import { contactIcons } from "../../data/constants";
import Icon from "../ui/icon";

const HeaderIcons = () => {
  return (
    <div className="text-white  fixed hidden xl:flex right-10 bottom-0 w-fit flex-col items-center">
      {contactIcons.map((icon) => (
        <a href={icon.link} target="_blank" key={icon.id}>
          <Icon
            iconType={icon.text}
            className="hover:text-primary transition duration-300 my-1 cursor-pointer"
          />
        </a>
      ))}
      <p className="h-44 mt-3 w-[2px] bg-white"></p>
    </div>
  );
};

export default HeaderIcons;
