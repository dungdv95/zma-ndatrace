import { cn } from "@/utils/cn";
import { Outlet, useMatches } from "react-router-dom";

export default function Layout() {
  return (
    <div
      className={cn("relative flex h-screen w-screen flex-col bg-background")}
    >
      {/* {!(current.handle as any)?.whiteBackground && (
        <div className="absolute left-0 top-0 h-66 w-full bg-peach-fade"></div>
      )}
      {!hideHeader && (
        <Header
          title={(current.handle as any)?.title}
          back={(current.handle as any)?.back}
          position={headerPosition}
        />
      )} */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Outlet />
      </div>
      {/* {!hideFooter && (
        <div className="relative shrink-0">
          <Footer />
          {!hideCart && <CartFloatButton itemCount={totalItems} />}
        </div>
      )} */}
    </div>
  );
}
