import { contactIcons } from "../../data/constants";
import Icon from "../ui/icon";

const Footer = () => {
  return (
    <footer className=" text-neutral-300 font-lato z-50 flex flex-col">
      <div className="container mx-auto px-5 flex flex-col">
        <p className="w-full h-[1px] bg-neutral-600"></p>
        <div className="flex flex-col sm:flex-row items-center justify-between px-5 py-14">
          <p className="text-neutral-400 text-sm sm:text-base">
            © Cláudio Dantas - 2023 | Feito com Next.js
          </p>
          <div className="flex mt-5 sm:mt-0">
            {contactIcons.map((contact) => (
              <div
                key={contact.id}
                className="w-9 h-9 rounded-full bg-neutral-600 flex items-center justify-center mx-2"
              >
                <Icon
                  iconType={contact.text}
                  className="text-2xl hover:text-primary transition-colors cursor-pointer "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
