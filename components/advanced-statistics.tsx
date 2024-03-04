import { source } from "@/utils/images";
import { StatisticsCard } from "@/components";

export const AdvancedStatistics = () => {
  const statistics = [
    {
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      icon: source.brandRecognition?.src,
    },
    {
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: source.detailedRecords?.src,
    },
    {
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: source.fullyCustomizable?.src,
    },
  ];
  return (
    <section className="container flex flex-col gap-20 py-20 lg:py-40">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-neutral-very-dark-violet md:text-5xl">
          Advanced Statistics
        </h2>
        <p className="max-w-md text-center font-medium leading-loose text-neutral-gray">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <StatisticsCard {...statistics[0]} />
        <div className="h-20 w-2 self-center bg-primary-cyan lg:h-2 lg:w-[10%]"></div>
        <StatisticsCard {...statistics[1]} className="lg:translate-y-10" />
        <div className="h-20 w-2 self-center bg-primary-cyan lg:h-2 lg:w-[10%]"></div>
        <StatisticsCard {...statistics[2]} className="lg:translate-y-20" />
      </div>
    </section>
  );
};
