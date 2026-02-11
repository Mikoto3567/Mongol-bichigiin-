import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Same width of trigger
          <ChevronDownIcon
            aria-hidden="true"
            className="-me-1 opacity-60"
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-(--radix-dropdown-menu-trigger-width)">
        <DropdownMenuItem>Эгшиг үсэг</DropdownMenuItem>
        <DropdownMenuItem>Гийгүүлэгч үсэг</DropdownMenuItem>
        <DropdownMenuItem>Хос/Урт эгшиг</DropdownMenuItem>
     
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
