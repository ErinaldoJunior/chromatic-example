import React from "react";

import { Button } from "@/components/ui/button";

export default function CustomButton({
  variant,
  size,
}: {
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  size: "default" | "sm" | "lg" | "icon" | null | undefined;
}) {
  return (
    <Button variant={variant} size={size}>
      Custom Button
    </Button>
  );
}
