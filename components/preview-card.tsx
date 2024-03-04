import { Url } from "@/utils/types";
import { CopyButton } from "@/components";
import Link from "next/link";

export const PreviewCard = ({ inputUrl, resultUrl }: Url) => {
  return (
    <article className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-xl md:flex-row lg:gap-6">
      <div className="max-w-full md:max-w-[50%]">
        <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {inputUrl}
        </p>
      </div>
      <Link
        href={resultUrl}
        className="text-primary-cyan md:ml-auto"
        target="_blank"
      >
        {resultUrl}
      </Link>
      <CopyButton url={resultUrl} />
    </article>
  );
};
