"use client" 
import * as React from "react";
import * as Select from '@radix-ui/react-select';

export const LanguageSelector = () => {
  return (
    <Select.Root variant="soft">
      <Select.Trigger className="flex w-16" placeholder="Select language" />
      <Select.Content >
        <Select.Group>
          <Select.Item value="eng">Eng</Select.Item>
          <Select.Item value="rus">Ru</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}