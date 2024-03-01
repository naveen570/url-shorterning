"use client";
import { ZUrlFormSchema } from "@/utils/schema";
import { UrlForm } from "@/utils/types/url";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit, formState } = useForm<UrlForm>({
    resolver: zodResolver(ZUrlFormSchema),
  });
  const { errors, isLoading, isSubmitSuccessful } = formState;
  const onSubmit = async (data: UrlForm) => {
    const response = await fetch("/api/url", {
      body: data.url,
    });
  };

  return (
    <form
      className="url-form absolute bottom-0 left-1/2 flex w-4/5 max-w-5xl -translate-x-1/2 translate-y-1/2 flex-col gap-6 rounded-lg bg-primary-dark-violet bg-cover bg-right bg-no-repeat p-8 md:flex-row md:items-start lg:p-14"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex grow flex-col items-start gap-2">
        <input
          type="text"
          className={`w-full rounded-lg px-4 py-3`}
          placeholder="Shorten a link here..."
          {...register("url")}
          title="Enter a valid URL"
        />
        <span className="text-secondary-red">{errors.url?.message}</span>
      </div>
      <button
        className="rounded-lg bg-primary-cyan px-8 py-3 text-white transition-colors hover:bg-primary-cyan/70 disabled:opacity-30"
        disabled={isLoading}
      >
        Shorten it!
      </button>
    </form>
  );
};
