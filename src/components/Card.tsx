import Image from "next/image"

type CardProps = {
    img:string
    title:string
    subtitle:string
    content:string
}
const Card = ({img,title,subtitle,content}:CardProps) => {
  return (
    <div className="flex max-w-[400px] flex-row gap-5">
      <Image src={img} alt="Image card" height={100} width={130} />
      <div className="flex flex-col ">
        <h3 className="text-[2rem] font-bold text-softRed ">{title}</h3>
        <p className="text-[1.125rem] hover:text-softRed cursor-pointer transition-all ease-in-out duration-300 py-2 font-bold text-veryDarkBlue">
          {subtitle}
        </p>
        <p className="text-[0.938rem] text-darkGrayishBlue leading-8">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Card