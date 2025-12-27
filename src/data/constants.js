export const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'Destinations', id: 'destinations' },
  { name: 'Blogs', id: 'blogs' },
  { name: 'Reviews', id: 'reviews' },
  { name: 'About', id: 'about' },
];

export const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
];

export const DESTINATIONS_DATA = [
  { 
    id: 1, 
    title: "Kyoto, Japan", 
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800", 
    rating: 4.9, 
    price: 98000, 
    region: "Asia",
    weather: "18°C",
    bestTime: "Mar-May",
    dailyBudget: 12000,
    desc: "Ancient temples, traditional tea houses, and sublime gardens in Japan's cultural capital.",
    itinerary: ["Day 1: Kinkaku-ji & Ryoan-ji", "Day 2: Fushimi Inari Shrine", "Day 3: Arashiyama Bamboo Grove"],
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1528360983277-13d9012356ee?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: 2, 
    title: "Santorini, Greece", 
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800", 
    rating: 4.8, 
    price: 145000, 
    region: "Europe", 
    weather: "25°C", 
    bestTime: "Jun-Sep", 
    dailyBudget: 16000, 
    desc: "Iconic white buildings with blue domes overlooking the crystal clear Aegean Sea.", 
    itinerary: ["Day 1: Oia Sunset", "Day 2: Red Beach & Akrotiri", "Day 3: Volcano Boat Tour"],
    images: [
       "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800",
       "https://images.unsplash.com/photo-1613395877344-13d4c79e4284?auto=format&fit=crop&q=80&w=800",
       "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed2a?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: 3, 
    title: "Jaipur, India", 
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800", 
    rating: 4.7, 
    price: 25000, 
    region: "Asia",
    weather: "28°C", 
    bestTime: "Oct-Mar", 
    dailyBudget: 6000, 
    desc: "The Pink City, famous for its palaces, forts, and vibrant bazaars.", 
    itinerary: ["Day 1: Amber Fort", "Day 2: City Palace & Hawa Mahal", "Day 3: Johari Bazaar"],
    images: [
       "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800",
       "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800",
       "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: 4, 
    title: "Banff, Canada", 
    img: "https://images.unsplash.com/photo-1561406636-b80293969660?auto=format&fit=crop&q=80&w=800", 
    rating: 4.9, 
    price: 78000, 
    region: "America", 
    weather: "12°C", 
    bestTime: "Jun-Aug", 
    dailyBudget: 14000, 
    desc: "Stunning turquoise lakes and snow-capped peaks in the heart of the Rockies.", 
    itinerary: ["Day 1: Lake Louise", "Day 2: Moraine Lake Hike", "Day 3: Banff Upper Hot Springs"],
    images: [
        "https://images.unsplash.com/photo-1561406636-b80293969660?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1609863528735-f12ba64568db?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: 5, 
    title: "Paro, Bhutan", 
    img: "https://images.unsplash.com/photo-1578500201384-297593282b86?auto=format&fit=crop&q=80&w=800", 
    rating: 4.9, 
    price: 120000, 
    region: "Asia", 
    weather: "16°C", 
    bestTime: "Sep-Nov", 
    dailyBudget: 20000, 
    desc: "A spiritual kingdom featuring the spectacular Tiger's Nest Monastery.", 
    itinerary: ["Day 1: National Museum", "Day 2: Tiger's Nest Trek", "Day 3: Rinpung Dzong"],
    images: [
        "https://images.unsplash.com/photo-1578500201384-297593282b86?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1620029965255-7d0f19939529?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1559773223-96e0013d8d59?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: 6, 
    title: "Machu Picchu, Peru", 
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800", 
    rating: 4.9, 
    price: 105000, 
    region: "America", 
    weather: "20°C", 
    bestTime: "May-Oct", 
    dailyBudget: 10000, 
    desc: "The mysterious Lost City of the Incas set high in the Andes Mountains.", 
    itinerary: ["Day 1: Cusco City Tour", "Day 2: Sacred Valley", "Day 3: Machu Picchu Sunrise"],
    images: [
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1509216242873-7786f446f465?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 7,
    title: "Sydney, Australia",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    price: 180000,
    region: "Oceania",
    weather: "22°C",
    bestTime: "Sep-Nov",
    dailyBudget: 15000,
    desc: "A vibrant city known for its Opera House, Harbour Bridge, and sun-kissed beaches.",
    itinerary: ["Day 1: Opera House & Rocks", "Day 2: Bondi to Coogee Walk", "Day 3: Taronga Zoo"],
    images: [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1523428098343-cd740aaf6fba?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549180030-48bf079fb38a?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 8,
    title: "Cape Town, South Africa",
    img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    price: 110000,
    region: "Africa",
    weather: "20°C",
    bestTime: "Jan-Apr",
    dailyBudget: 8000,
    desc: "A port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain.",
    itinerary: ["Day 1: Table Mountain Cableway", "Day 2: Cape Point & Penguins", "Day 3: Robben Island"],
    images: [
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 9,
    title: "Rome, Italy",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    price: 130000,
    region: "Europe",
    weather: "22°C",
    bestTime: "Apr-Jun",
    dailyBudget: 14000,
    desc: "Italy’s capital, a sprawling cosmopolitan city with nearly 3,000 years of globally influential art and culture.",
    itinerary: ["Day 1: Colosseum & Forum", "Day 2: Vatican City", "Day 3: Trevi Fountain & Pantheon"],
    images: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1529260830199-42c42dda5f3d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 10,
    title: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    price: 60000,
    region: "Asia",
    weather: "27°C",
    bestTime: "Apr-Oct",
    dailyBudget: 5000,
    desc: "An Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
    itinerary: ["Day 1: Ubud Monkey Forest", "Day 2: Uluwatu Temple", "Day 3: Nusa Penida Day Trip"],
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const BLOG_DATA = [
  { 
    id: 101, 
    title: "10 Hidden Gems in Bali", 
    date: "Oct 12, 2025", 
    desc: "Discover the waterfalls and secret beaches that tourists often miss.", 
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    content: "Bali is more than just Kuta and Seminyak. Venture north to Munduk for stunning waterfalls like Sekumpul. Or head east to Sidemen for untroubled rice terrace views. We explore the Nungnung waterfall, a hidden giant that requires a 500-step descent but rewards you with mist and magic."
  },
  { 
    id: 102, 
    title: "Solo Travel Guide: Norway", 
    date: "Sep 28, 2025", 
    desc: "How to navigate the fjords safely and affordably on your own.", 
    img: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=800",
    content: "Norway is one of the safest countries in the world. In this guide, we break down the 'Norway in a Nutshell' tour which you can book independently to save costs. We also review the best hostels in Bergen and Oslo where you can meet fellow hikers."
  },
  { 
    id: 103, 
    title: "Culinary Journey through Italy", 
    date: "Sep 15, 2025", 
    desc: "From pasta in Rome to pizza in Naples, a foodie's dream itinerary.", 
    img: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&q=80&w=800",
    content: "Forget the tourist traps near the Colosseum. We take you to Testaccio, the real food heart of Rome, to try Cacio e Pepe served in a cheese wheel. Then, we travel south to Naples to learn the strict rules of Vera Pizza Napoletana."
  }
];

export const REVIEWS_DATA = [
  { id: 1, name: "Sarah Jenkins", role: "Verified Traveler", trip: "Japan Trip", text: "Absolutely life-changing experience. The itinerary was perfectly balanced.", rating: 5, img: "https://i.pravatar.cc/150?img=15" },
  { id: 2, name: "Michael Chen", role: "Elite Member", trip: "Swiss Alps", text: "The team at Globe Guru went above and beyond.", rating: 5, img: "https://i.pravatar.cc/150?img=11" },
  { id: 3, name: "Emma Wilson", role: "Solo Explorer", trip: "Bali Retreat", text: "Safety was my priority. This agency made me feel secure.", rating: 4, img: "https://i.pravatar.cc/150?img=5" }
];