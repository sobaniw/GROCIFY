import { assets, appPromoBannerData } from "../../assets/assets";

const AppPromoBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 my-14 bg-green-950 rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 xl:px-10">

        {/* Left side content */}
        <div className="text-center md:text-left max-w-lg">
          <span className="inline-block text-xs font-semibold text-orange-300 bg-orange-300/10 px-3 py-1 rounded-full mb-4">
            📱 Now on Mobile
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            {appPromoBannerData.title}
          </h2>

          <p className="text-sm text-white/60 leading-relaxed mb-8">
            {appPromoBannerData.description}
          </p>

          <div className="flex items-center gap-3 justify-center md:justify-start flex-wrap">
            {/* App Store Button */}
            <button className="flex items-center gap-2.5 bg-white text-green-950 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-orange-50 transition-colors">
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </button>

            {/* Google Play Button */}
            <button className="flex items-center gap-2.5 bg-white text-green-950 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-orange-50 transition-colors">
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.22.99.14l12.47-7.04-2.79-2.79-10.67 9.69zM.44 1.06C.17 1.4 0 1.88 0 2.5v19c0 .62.17 1.1.44 1.44l.07.07 10.64-10.64v-.25L.51.99l-.07.07zM20.49 10.34l-2.97-1.68-3.14 3.14 3.14 3.14 2.99-1.69c.85-.48.85-1.27-.02-1.91zM3.18.24L15.65 7.28l-2.79 2.79L2.19.38C2.51.18 2.87.11 3.18.24z"/>
              </svg>
              Google Play
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="shrink-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-400/10 rounded-full blur-3xl scale-110" />
            <img
              src={assets.delivery_truck}
              alt="Delivery Truck"
              className="relative w-64 sm:w-80 xl:w-96 drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppPromoBanner;