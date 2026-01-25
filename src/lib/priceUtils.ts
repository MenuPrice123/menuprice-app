import { MenuItem } from "@/types/restaurant";

export function calculatePriceForTwo(menu: MenuItem[]): number {
    if (!menu || menu.length === 0) return 0;

    // Since we don't have 'isMain' or 'isAvailable' in the current MenuItem type,
    // we'll use a heuristic: exclude items that are likely sides/beverages based on category name.
    // This list can be expanded.
    const excludedCategories = ["beverages", "drinks", "sides", "desserts", "extras", "add-ons"];

    const mainItems = menu.filter(item => {
        const category = item.category?.toLowerCase() || "";
        return !excludedCategories.some(excluded => category.includes(excluded));
    });

    // If filtering leaves no items, fallback to using all items
    const prices = mainItems.length > 0
        ? mainItems.map(i => i.price)
        : menu.map(i => i.price);

    if (prices.length === 0) return 0;

    const avgPrice =
        prices.reduce((sum, price) => sum + price, 0) / prices.length;

    const priceForTwo = avgPrice * 2;

    return roundToNearestStandard(priceForTwo);
}

function roundToNearestStandard(amount: number): number {
    const standards = [150, 200, 250, 300, 350, 400, 500, 600, 700, 800, 1000];

    for (const value of standards) {
        if (amount <= value) {
            return value;
        }
    }

    return Math.ceil(amount / 100) * 100;
}
