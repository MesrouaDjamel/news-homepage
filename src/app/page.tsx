import ListCard from "@/components/ListCard";
import Separator from "@/components/Separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex px-4 py-6  mb-16 flex-col gap-16 2xl:flex-row xl:mx-40 md:mx-14 2xl:justify-between  ">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 xl:min-w-[1110px] 2xl:max-w-[1110px]      ">
        <div className="flex flex-col gap-8 lg:col-span-2 lg:max-w-[45.625rem]">
          <div className="relative min-w-[18.75rem] h-[18.75rem] ">
            <Image
              src={"/image-web-3-desktop.jpg"}
              alt="Illustration"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 lg:flex-row ">
            <h1 className="text-4xl font-bold text-veryDarkBlue ">
              The Bright Future of Web 3.0?
            </h1>

            <div className="flex flex-col gap-4 ">
              <p className="text-[0.938rem] leading-8 text-darkGrayishBlue">
                We dive into the next evolution of web that claims to put the
                power of the platforms back into the hands of the people. But is
                it really fulfilling its promise?
              </p>

              <button className="h-[3.125rem] cursor-pointer w-[11.563rem] font-bold flex items-center justify-center hover:bg-veryDarkBlue hover:text-offWhite transition-all ease-in-out duration-300 bg-softRed text-veryDarkBlue">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="py-6 px-5 bg-veryDarkBlue min-w-[350px]  ">
          <h2 className="text-3xl font-bold text-softOrange pb-8">New</h2>

          <h3 className="text-[1.25rem] cursor-pointer  hover:text-softOrange transition-all ease-in-out duration-300  pb-5 font-bold text-offWhite">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-[0.938rem] text-grayishBlue">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>

          <Separator />

          <h3 className="text-[1.25rem] cursor-pointer   hover:text-softOrange transition-all ease-in-out duration-300 pb-5 font-bold text-offWhite">
            {" "}
            The Downsides of AI Artistry
          </h3>
          <p className="text-[0.938rem] text-grayishBlue">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>

          <Separator />

          <h3 className="text-[1.25rem] cursor-pointer  hover:text-softOrange transition-all ease-in-out duration-300 pb-5 font-bold text-offWhite">
            Is VC Funding Drying Up?
          </h3>
          <p className="text-[0.938rem] text-grayishBlue">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>

      <ListCard />
    </main>
  );
}
