import Card from "./Card";

const listCard = [
  {
    img: "/image-retro-pcs.jpg",
    title: "01",
    subtitle: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?",
  },
  {
    img: "/image-top-laptops.jpg",
    title: "02",
    subtitle: "Top 10 Laptops of 2022",
    content: "Our best picks for various needs and budgets",
  },
  {
    img: "/image-gaming-growth.jpg",
    title: "03",
    subtitle: "The Growth of Gaming",
    content: "How the pandemic has sparked fresh opportunities.",
  },
];

const ListCard = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row xl:min-w-[1110px] 2xl:max-w-[1110px] 2xl:flex-col ">
      {listCard.map((item) => (
        <Card
          key={item.title}
          img={item.img}
          title={item.title}
          subtitle={item.subtitle}
          content={item.content}
        />
      ))}
    </div>
  );
  
};

export default ListCard;
