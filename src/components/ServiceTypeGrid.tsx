import { Utensils, ChefHat, Truck, Home } from "lucide-react";

interface ServiceTypeGridProps {
    onSelect?: (category: string) => void;
}

export const ServiceTypeGrid = ({ onSelect }: ServiceTypeGridProps) => {
    const services = [
        {
            id: "restaurants",
            title: "Restaurant",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80",
            icon: Utensils
        },
        {
            id: "cloud-kitchen",
            title: "Cloud Kitchen",
            image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            icon: ChefHat
        },
        {
            id: "caterings",
            title: "Catering",
            image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=500&q=80",
            icon: Truck
        },
        {
            id: "home-foods",
            title: "Home Foods",
            image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80",
            icon: Home
        }
    ];



    return (
        <section className="py-8 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold mb-6 text-gray-800">Explore Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => onSelect?.(service.title)}
                            className="group relative h-40 md:h-48 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all active:scale-95"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                <service.icon className="w-8 h-8 mb-2 opacity-90" />
                                <h3 className="font-bold text-center text-lg">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

