import { Utensils, Shield, TrendingDown } from "lucide-react";

export const ServiceCards = () => {
    const services = [
        {
            icon: Utensils,
            title: "Browse Menus",
            description: "Explore curated selections from premium establishments",
        },
        {
            icon: Shield,
            title: "Verified Pricing",
            description: "Transparent, honest pricing you can trust",
        },
        {
            icon: TrendingDown,
            title: "Best Value",
            description: "Make informed decisions with complete transparency",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {services.map((service, index) => {
                const Icon = service.icon;
                return (
                    <div
                        key={index}
                        className="service-card group hover:border-royal-gold/40 transition-all duration-300"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-royal-gold/20 to-soft-gold/20 border border-champagne-gold/20">
                                <Icon className="w-6 h-6 text-royal-gold" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-champagne-gold group-hover:text-gold transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-warm-cream/70 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
