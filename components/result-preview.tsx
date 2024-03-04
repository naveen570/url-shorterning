"use client";
import { useUrlStore } from "@/store/url";
import React from "react";
import { PreviewCard } from ".";
export const ResultPreview = () => {
  const { list } = useUrlStore();
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    setVisible(list.length > 0);
  }, [list]);
  if (!visible) return null;
  return (
    <section className={`container flex w-full flex-col gap-4 py-28 `}>
      {list.map((x) => (
        <PreviewCard key={x.id} {...x} />
      ))}
    </section>
  );
};
