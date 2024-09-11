 
  "use client"
 import { GlobeDemo } from "@/compo/GlobeDemo";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"

// import { div } from "framer-motion/client";
import { useState, useEffect } from "react";

const MyComponent: React.FC = () => {
  const items: string[] = ["Business", "Individuals", "Entrepreneur", "Startups", "Indie-hacker"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // Set up an interval to increment the index every 2 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Loop back to 0 if we've reached the last item
        return prevIndex < items.length - 1 ? prevIndex + 1 : 0;
      });
    }, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Render the current item with motion animation */}
      <motion.div
        key={currentIndex}  // Ensures re-render and animation every time the index changes
        initial={{ opacity: -2, scale: 0.6 }}
        animate={{ opacity: 3, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}  // Optional for smooth transition when an item disappears
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold mt-10 text-white"
      >
        {items[currentIndex]}
      </motion.div>
    </div>
  );
};

export default MyComponent;



export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 md:min-w-[1000px] w-full mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
     
  className,
  // title,
  // description,
  // icon,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number
}) => {


  return (
    <div
      className={cn(
        "row-span-1 relative rounded-md group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-2   dark:bg-black dark:border-white/[0.2]  bg-gray-800/50  border-[0.1px]  border-white/30 justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      {id === 1 ? <div>
        <div className={`bg-black relative dark:bg-neutral-800 h-60 w-98  }`}>
          <GlobeDemo />
        </div>
        <div className="mx-2 space-y-2 absolute w-96 text-yellow-500 flex justify-center space-x-5 top-4 z-50 ">
          <div className="font-bold text-3xl mt-3 px-4">
            <h1>my skills</h1>
          </div>

          <div className="flex flex-col font-semibold pl-20 text-base">
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">Reactjs</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">Nextjs</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">javascript</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">tailwind</div>
            <div className="h-8 rotate-2 p-1 max-w-32 text-center rounded-lg border m-1 bg-gray-950"></div>
          </div>
          <div className="flex flex-col">
            <div className="h-8 rotate-2 p-1 max-w-32 text-center rounded-lg border m-1 bg-gray-950"></div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">Firebase</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">Nodejs</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">MongDb</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">Docker</div>

          </div>

        </div>
      </div>

        : <div></div>
      }
      {id === 2 ?
        <div className=" h-full  rounded-lg w-full pb-3 mb-3"
          style={{
            background: "linear-gradient(90deg, rgba(171,70,255,1) 0%, rgba(58,33,138,1) 100%)"
          }}
        >
          <div className="font-bold text-center space-y-2 md:space-y-0 text-5xl mt-3 w-full p-2">
         <h1 className="text-opacity-30 pt-8 md:pt-3 text-white"> We build websites for</h1>
         <MyComponent/>
          </div>

        </div>

        : <div></div>
      }




      {/* <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div> */}
    </div>
    // </div>
  );
};
