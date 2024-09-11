import { GlobeDemo } from "@/compo/GlobeDemo";
import { cn } from "@/lib/utils";
// import { div } from "framer-motion/client";

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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 md:min-w-[1500px]  mx-auto ",
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
        "row-span-1 relative rounded-md group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-yellow-300/60 border-transparent justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      {id === 0 ? <div>
        <div className={`bg-black relative dark:bg-neutral-800 h-60 w-98  }`}>
          <GlobeDemo />
        </div>
        <div className="mx-2 space-y-2 absolute w-96 text-yellow-500 flex justify-center space-x-5 top-4 z-50 ">
          <div className="font-bold text-3xl mt-3 px-4">
            <h1>my skills</h1>
          </div>

          <div className="flex flex-col font-semibold pl-20 text-base">
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">jsdjskdjskdj</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">jsdjskdjskdj</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">jsdjskdjskdj</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">jsdjskdjskdj</div>
            <div className="h-8 rotate-2 p-1 max-w-32 text-center rounded-lg border m-1 bg-gray-950"></div>
          </div>
          <div className="flex flex-col">
            <div className="h-8 rotate-2 p-1 max-w-32 text-center rounded-lg border m-1 bg-gray-950"></div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">jsdjskdjskdj</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">jsdjskdjskdj</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">jsdjskdjskdj</div>
            <div className=" rotate-2 p-1 max-w-32 text-center rounded-lg border m-1">jsdjskdjskdj</div>

          </div>

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
