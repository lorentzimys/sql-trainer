"use client";
import * as Select from "@radix-ui/react-select";
import * as React from "react";

export const LanguageSelector = () => {
  return (
    <Select.Root>
      <Select.Trigger className="flex w-16" placeholder="Select language" />
      <Select.Content>
        <Select.Group>
          <Select.Item value="eng">Eng</Select.Item>
          <Select.Item value="rus">Ru</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
