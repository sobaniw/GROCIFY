import { ShieldCheck, Truck, Clock, Headphones } from "lucide-react";

interface HeroFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const heroFeatures: HeroFeature[] = [
  { icon: Truck, title: "Free Delivery", description: "On orders over $50" },
  { icon: Clock, title: "Fast Delivery", description: "Delivered in 30 mins" },
  { icon: ShieldCheck, title: "Fresh Guarantee", description: "100% fresh products" },
  { icon: Headphones, title: "24/7 Support", description: "We're always here" },
];

const Features = () => {
  return (
    <section className="bg-white py-5 border border-app-border/80 rounded-xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroFeatures.map((feature: HeroFeature, i: number) => (
            <div key={i} className="flex items-center gap-3 py-3">
              <div className="size-10 rounded-lg bg-app-cream flex items-center justify-center shrink-0">
                <feature.icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-app-green">{feature.title}</p>
                <p className="text-xs text-app-text-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;