// Simple curated fallback for Sydney by month (edit anytime)
export function fallbackSeasonalFlowers(month: number) {
  // month: 0=Jan ... 11=Dec
  const map: Record<number, string[]> = {
    0: ["Dahlia", "Hydrangea", "Sunflower", "Gladiolus", "Lisianthus", "Roses"],
    1: ["Dahlia", "Hydrangea", "Sunflower", "Gladiolus", "Lisianthus", "Roses"],
    2: ["Dahlia", "Hydrangea", "Cosmos", "Sunflower", "Zinnia", "Roses"],
    3: ["Camellia", "Protea", "Banksia", "Waratah", "Anemone", "Snapdragon"],
    4: ["Camellia", "Protea", "Banksia", "Anemone", "Ranunculus", "Stock"],
    5: ["Camellia", "Protea", "Banksia", "Ranunculus", "Tulips", "Sweet Pea"],
    6: ["Tulips", "Ranunculus", "Natives (Protea, Banksia)", "Stock", "Anemone", "Sweet Pea"],
    7: ["Tulips", "Ranunculus", "Wattle", "Natives (Protea, Banksia)", "Jonquils", "Camellia"],
    8: ["Tulips", "Ranunculus", "Wattle", "Natives (Protea, Banksia)", "Jonquils", "Camellia"],
    9: ["Waratah", "Peony (early imports)", "Freesia", "Snapdragon", "Iris", "Anemone"],
    10: ["Peony", "Sweet Pea", "Delphinium", "Freesia", "Garden Rose", "Snapdragon"],
    11: ["Peony", "Delphinium", "Garden Rose", "Lily", "Lisianthus", "Hyacinth"]
  };
  return map[month] ?? ["Roses", "Tulips", "Sunflowers", "Ranunculus", "Protea", "Camellia"];
}
