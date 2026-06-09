import { Link } from "react-router-dom";
import { LeafIcon, ArrowRightIcon } from "lucide-react";
import { heroSectionData } from "../../assets/assets";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[540px] mb-10 rounded-3xl flex items-center">
      <img
        src={heroSectionData.hero_image}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c2e] via-[#1a3c2e]/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-xl xl:pl-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-orange-300 bg-orange-300/10 rounded-full mb-5">
            <LeafIcon className="size-3" />
            Farm-Fresh & Organic
          </span>

          <h1 className="text-white font-bold text-4xl sm:text-5xl leading-tight mb-4">
            Nourish your home with{" "}
            <br />
            <span className="text-orange-400">Earth's finest</span>
          </h1>

          <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-md">
            {heroSectionData.description}
          </p>

          <div className="flex items-center gap-3">
            <Link
              to="/products"
              className="px-7 py-3 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-500 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Shop Now <ArrowRightIcon className="size-4" />
            </Link>

            <Link
              to="/products"
              className="px-7 py-3 bg-black/40 text-white font-semibold rounded-full border border-white/30 hover:bg-black/60 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;