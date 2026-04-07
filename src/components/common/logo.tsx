import logo from "@/static/logo.svg";
import { copy } from "@/constants/copy";

export default function Logo() {
  return (
    <img
      src={logo}
      alt={copy.brand.name}
      draggable={false}
      className="h-7 w-auto max-w-[140px]"
    />
  );
}
