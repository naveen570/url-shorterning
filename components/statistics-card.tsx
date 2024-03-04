import Image from "next/image";

type StatisticsCardProps = {
  title: string;
  description: string;
  icon: string;
  className?: string;
};
export const StatisticsCard = (props: StatisticsCardProps) => {
  return (
    <article
      className={
        "relative flex flex-col gap-6 bg-white px-4 py-8 pt-20 " +
        props.className
      }
    >
      <div className="absolute left-1/2 top-0 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center self-start rounded-full bg-primary-dark-violet lg:left-auto lg:translate-x-0">
        <Image src={props.icon} alt="statistics-icon" width={50} height={50} />
      </div>

      <h4 className="text-lg font-bold text-neutral-very-dark-violet md:text-xl">
        {props.title}
      </h4>
      <p className="text-sm leading-loose text-neutral-gray">
        {props.description}
      </p>
    </article>
  );
};
