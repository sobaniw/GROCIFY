import { useState } from "react";
import { TruckIcon, XIcon, ZapIcon } from "lucide-react";

const Banner = () => {
  const [bannerVisible, setBannerVisible] = useState(() => {
    return sessionStorage.getItem('banner_Dismissed') !== 'true';
  })

  const dismissBanner = () => {
    setBannerVisible(false);
    sessionStorage.setItem('banner_Dismissed', 'true');
  }

  return (
    <div>
      {bannerVisible && (
        <div className="bg-linear-to-r from-app-green via-emerald-800 to-app-green text-white text-xs sm:text-sm relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-2">
              <TruckIcon className="size-4 shrink-0" />
              <span className="font-medium">Free delivery on orders over $50!</span>
            </div>
            <span className="hidden sm:inline text-white/40">
          <div className="hidden sm:flex items-center gap-2">
            <ZapIcon className="size-3.5 fill-yellow-400 text-yellow-400shrink-0" />
            <span>Farm-fresh produce delivered daily</span>
          </div>
            </span>
          </div>
        <button
        onClick={dismissBanner}
        aria-label="Dismiss banner"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
>
         <XIcon className="size-3.5" />
        </button>
          
        </div>
      )}
    </div>
  )
}

export default Banner