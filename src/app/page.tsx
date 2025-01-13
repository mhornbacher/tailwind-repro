"use client";

import { Input, Label, TextField } from "react-aria-components";

export default function Home() {
  return (
    <TextField>
      <Input className="peer" type="text" />
      <Label className="peer-focus:text-purple-500">Hello World</Label>
    </TextField>
  );
}
