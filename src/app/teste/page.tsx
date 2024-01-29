import Image from "next/image";

const Teste = () => {
  const items = [
    {
      title: "Teste 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "/images/landing-page.jpg",
    },
    {
      title: "Teste 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "/images/landing-page.jpg",
    },
    {
      title: "Teste 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "/images/landing-page.jpg",
    },
    {
      title: "Teste 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "/images/landing-page.jpg",
    },
  ];
  return (
    <div className="w-screen h-screen max-w-[1440px] px-5 mx-auto flex items-center justify-center">
      <div className="grid grid-cols-3 bg-teal-100">
        {items.map((item) => (
          <div className="bg-red-400 max-w-sm">
            <div className="w-full h-36 relative">
              <Image
                src={item.image}
                alt={item.description}
                className="object-cover"
                fill
              />
            </div>
            <div className="px-3 py-2">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teste;
