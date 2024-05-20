"use client";
import { useUrlStore } from "@/store/url";
import { getShoternUrl } from "@/utils/api";
import { ZUrlFormSchema, ZUrlResponseSchema } from "@/utils/schema";
import { UrlForm } from "@/utils/types/url";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit, formState, reset } = useForm<UrlForm>({
    resolver: zodResolver(ZUrlFormSchema),
  });
  const { addUrl } = useUrlStore();
  const { errors, isSubmitting } = formState;
  const onSubmit = async (data: UrlForm) => {
    try {
      const result = await getShoternUrl(data.url);
      // const response = await fetch("/api/url", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      // });
      // const result = ZUrlResponseSchema.parse(await response.json());
      addUrl({
        inputUrl: data.url,
        resultUrl: result.result_url,
        id: crypto.randomUUID(),
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container absolute bottom-0 left-1/2 mx-auto w-full -translate-x-1/2 translate-y-1/2">
      <form
        className="url-form flex flex-col gap-6 rounded-lg bg-primary-dark-violet bg-cover bg-right bg-no-repeat p-8 md:flex-row md:items-start lg:p-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex grow flex-col items-start gap-2">
          <input
            type="text"
            className={`w-full rounded-lg px-4 py-3 ${
              errors.url
                ? "border-2 border-secondary-red placeholder:text-secondary-red focus-visible:outline-secondary-red"
                : ""
            }`}
            placeholder="Shorten a link here..."
            {...register("url")}
            title="Enter a valid URL"
          />
          <span className="text-sm italic text-secondary-red">
            {errors.url?.message}
          </span>
        </div>
        <button
          className="rounded-lg bg-primary-cyan px-8 py-3 text-white transition-colors hover:bg-primary-cyan/70 disabled:opacity-30"
          disabled={isSubmitting}
        >
          Shorten it!
        </button>
      </form>
    </section>
  );
};
