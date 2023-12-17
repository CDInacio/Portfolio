import Icon from "../ui/icon";

const ContactItem = ({
  text,
  icon,
  link,
}: {
  text: string;
  icon: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center bg-neutral-800 rounded px-4 py-2"
    >
      <span className="w-[40px] h-[40px] rounded-full bg-neutral-700 flex items-center justify-center">
        <Icon
          iconType={icon}
          className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] text-neutral-300"
        />
      </span>
      <p className="ml-4 text-neutral-300 text-sm md:text-base">{text}</p>
    </a>
  );
};

export default ContactItem;
