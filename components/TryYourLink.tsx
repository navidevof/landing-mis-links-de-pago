"use client";

import React, { useState, useEffect } from "react";
import IconCircleCheck from "@/icons/IconCircleCheck";
import IconCircleClose from "@/icons/IconCircleClose";
import IconLoader from "@/icons/IconLoader";

function TryYourLink() {
  const [url, setUrl] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [canContinue, setCanContinue] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const verifyUrlPage = async (url: string) => {
    try {
      const req = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pages/verify-url/${url}`
      );
      const res = await req.json();
      return { error: res.error };
    } catch (error) {
      console.log({ error });
      return { error: true };
    }
  };

  const verifyUrl = async () => {
    setIsVerifying(true);
    setCanContinue(false);

    if (!url) {
      setCanContinue(false);
      setIsVerifying(false);
      return;
    }
    const res = await verifyUrlPage(url);
    setCanContinue(!res.error);
    setIsVerifying(false);
  };

  const validateInput = (value: string): string => {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^0-9a-zA-Z-]/g, "")
      .toLowerCase();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = validateInput(event.target.value);
    setUrl(newValue);

    if (typingTimeout) clearTimeout(typingTimeout);

    setIsVerifying(true);
    setCanContinue(false);

    if (!newValue.length) {
      setIsVerifying(false);
      return;
    }

    setTypingTimeout(
      setTimeout(() => {
        verifyUrl();
      }, 500)
    );
  };

  useEffect(() => {
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, [url]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canContinue) return;

    window.open(
      `${process.env.NEXT_PUBLIC_URL_APP}/register?url=${url}`,
      "_blank"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 w-10/12 mx-auto"
    >
      <label className="w-full bg-custom-black-3 text-white rounded-lg border border-white/30 px-4 py-3 flex items-center">
        <span className="text-nowrap md:text-base text-sm text-white/70">
          mislinksdepago.com/
        </span>
        <input
          type="text"
          placeholder="tu-pagina"
          required
          className="input-without-style w-full bg-transparent font-light outline-none md:text-base text-sm text-white"
          maxLength={30}
          autoFocus
          value={url}
          onChange={handleInputChange}
        />
        <div className="pl-2">
          {isVerifying ? (
            <IconLoader className="size-5 min-w-5 animate-spin text-white/50" />
          ) : canContinue ? (
            <IconCircleCheck className="size-5 min-w-5 text-custom-green-1" />
          ) : (
            <IconCircleClose className="size-5 min-w-5 text-custom-red-1" />
          )}
        </div>
      </label>
      <button
        type="submit"
        disabled={!canContinue}
        className="bg-custom-green-1 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-custom-green-2 text-lg text-white rounded-lg px-8 py-2 text-center w-fit mx-auto"
      >
        Crear cuenta
      </button>
    </form>
  );
}

export default TryYourLink;
