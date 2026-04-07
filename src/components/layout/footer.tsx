import { useLocation, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  MenuIcon,
  OrderIcon,
  SelfIcon,
} from "@/components/common/vectors";
import { copy } from "@/constants/copy";
import { cn } from "@/utils/cn";

const NAV_ITEMS = [
  {
    name: copy.nav.home,
    path: "/",
    icon: HomeIcon,
  },
  {
    name: copy.nav.menu,
    path: "/menu",
    icon: MenuIcon,
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const activeKey =
    NAV_ITEMS.find((item) =>
      item.path === "/" ? pathname === "/" : pathname.startsWith(item.path),
    )?.path ?? "/";

  return (
    <div className="border-divider01 flex justify-between border-t bg-white px-8 pb-5 pt-4">
      {NAV_ITEMS.map((item) => (
        <div
          className="flex flex-col items-center gap-1"
          key={item.path}
          onClick={() => navigate(item.path)}
        >
          <item.icon active={activeKey === item.path} />
          <div
            className={cn(
              "text-xxxxsmall",
              activeKey === item.path
                ? "!text-text-primary"
                : "!text-text-disabled",
            )}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}
