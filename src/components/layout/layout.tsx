import { cn } from "@/utils/cn";
import { Outlet, useMatches } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  const matches = useMatches();

  const current = matches[matches.length - 1];
  const hideFooter = (current.handle as any)?.hideFooter;
  const hideCart = (current.handle as any)?.hideCart;
  const hideHeader = (current.handle as any)?.hideHeader;
  const headerPosition = (current.handle as any)?.headerPosition;

  return (
    <div className={cn("relative flex h-screen w-screen flex-col bg-white")}>
      {/* {!(current.handle as any)?.whiteBackground && (
        <div className="h-66 bg-peach-fade absolute left-0 top-0 w-full"></div>
      )} */}
      {!hideHeader && (
        <Header
          title={(current.handle as any)?.title}
          back={(current.handle as any)?.back}
          position={headerPosition}
        />
      )}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Outlet />
      </div>
      {!hideFooter && (
        <div className="relative shrink-0">
          <Footer />
        </div>
      )}
    </div>
  );
}
