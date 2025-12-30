import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon
}) => {
  return (
    <div
      className={cn(
        `group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition duration-300
        bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm hover:from-violet-500/30`,
        className
      )}>
      <div className="flex justify-center items-center flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-200 dark:from-violet-900 dark:to-violet-800 to-violet-100">
        <h2 className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">{title}</h2>
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div
          className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div
          className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
