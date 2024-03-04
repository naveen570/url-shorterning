"use client";

import React from "react";

export const CopyButton = ({ url }: { url: string }) => {
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 3000);
  }, [copied]);
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  };
  return (
    <button
      onClick={() => handleCopyClick()}
      disabled={copied}
      className={`flex min-w-20 items-center justify-center self-stretch rounded-lg py-2 text-sm font-bold text-white ${
        copied ? "bg-primary-dark-violet" : "bg-primary-cyan hover:opacity-50"
      }`}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};
