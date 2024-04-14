let teachingTerms = [
  {
    term: "passport",
    meaning: "Official document issued by a government that certifies the identity and nationality of the holder, required for international travel.",
    realEg: "She made sure to renew her passport well in advance of her upcoming trip to Europe."
  },
  {
    term: "visa",
    meaning: "Official authorization affixed to a passport allowing the holder to enter, stay, or leave a country for a specified period or purpose.",
    realEg: "He applied for a tourist visa to visit Japan and eagerly awaited its approval."
  },
  {
    term: "ticket",
    meaning: "Document or electronic record that serves as proof of payment and entitles the holder to travel on a specific transportation service, such as a plane, train, or bus.",
    realEg: "She printed her plane ticket and kept it in her carry-on bag for easy access at the airport."
  },
  {
    term: "itinerary",
    meaning: "Detailed plan or schedule of activities, events, or travel arrangements, often including dates, times, locations, and reservations.",
    realEg: "He meticulously planned his itinerary for the trip, ensuring he wouldn't miss out on any key attractions."
  },
  {
    term: "destination",
    meaning: "Place to which someone or something is going or being sent, typically for a vacation, trip, or journey.",
    realEg: "Their dream destination for their honeymoon was the picturesque beaches of Bali."
  },
  {
    term: "accommodation",
    meaning: "Lodging or housing provided for travelers, typically including hotels, hostels, guesthouses, or vacation rentals.",
    realEg: "They booked their accommodation well in advance to secure a room with a view of the Eiffel Tower."
  },
  {
    term: "hotel",
    meaning: "Establishment providing lodging, meals, and other services for travelers, typically offering a range of amenities and varying levels of luxury.",
    realEg: "The hotel they stayed in had a rooftop pool with stunning views of the city skyline."
  },
  {
    term: "hostel",
    meaning: "Budget-friendly accommodation offering dormitory-style rooms and shared facilities, popular among backpackers and budget travelers.",
    realEg: "They opted to stay in a hostel to save money and meet fellow travelers from around the world."
  },
  {
    term: "Airbnb",
    meaning: "Online platform that allows individuals to rent out their properties or spare rooms to travelers, providing an alternative to traditional hotels or accommodations.",
    realEg: "They booked a cozy apartment through Airbnb, giving them a more authentic experience of living like a local."
  },
  {
    term: "guesthouse",
    meaning: "Small lodging establishment offering rooms or suites for travelers, often operated by locals and providing personalized service.",
    realEg: "They enjoyed their stay at a charming guesthouse run by a friendly family in the countryside."
  },
  {
    term: "luggage",
    meaning: "Bags, suitcases, or containers used to carry personal belongings or possessions while traveling.",
    realEg: "She packed her luggage carefully, making sure to include all the essentials for her trip."
  },
  {
    term: "suitcase",
    meaning: "Large, rectangular piece of luggage with a handle, designed for storing clothes and personal items during travel.",
    realEg: "He struggled to lift his heavy suitcase onto the luggage conveyor belt at the airport."
  },
  {
    term: "backpack",
    meaning: "Bag with shoulder straps, often made of fabric, used for carrying personal belongings on one's back, especially while hiking, traveling, or commuting.",
    realEg: "She packed her backpack with snacks, water, and a map before setting off on a day hike in the mountains."
  },
  {
    term: "duffel bag",
    meaning: "Large cylindrical bag made of cloth with a top closure, typically used for carrying clothing and gear during travel or sports activities.",
    realEg: "He packed his duffel bag with camping equipment for their weekend getaway in the wilderness."
  },
  {
    term: "carry-on",
    meaning: "Small suitcase or bag that passengers are allowed to take onto an airplane and store in the overhead compartment or under the seat in front of them.",
    realEg: "She packed her essentials in her carry-on bag to avoid having to check luggage and save time at the airport."
  },
  {
    term: "flight",
    meaning: "Journey made by air, typically in an airplane, between two or more destinations, often involving takeoff, travel through the air, and landing.",
    realEg: "They boarded their flight to Paris and settled into their seats for the long journey ahead."
  },
  {
    term: "train",
    meaning: "Form of transportation consisting of a series of connected vehicles traveling on tracks, used for carrying passengers or freight between stations.",
    realEg: "They decided to take the train from London to Edinburgh to enjoy the scenic views along the way."
  },
  {
    term: "bus",
    meaning: "Large motor vehicle designed to carry passengers by road, typically operating on fixed routes with designated stops.",
    realEg: "They caught the bus to the city center and hopped off near the famous landmarks they wanted to visit."
  },
  {
    term: "ship",
    meaning: "Large vessel designed for traveling on water, including boats, ferries, cruises, or cargo ships, used for transportation, exploration, or leisure.",
    realEg: "They embarked on a cruise ship to explore the breathtaking fjords and glaciers of Norway."
  },
  {
    term: "ferry",
    meaning: "Boat or ship used to transport passengers, vehicles, or goods across a body of water, typically operating on scheduled routes between ports.",
    realEg: "They took the ferry to the nearby island for a day trip, enjoying the scenic journey across the harbor."
  },
  {
    term: "sightseeing",
    meaning: "Activity of visiting and observing interesting or famous places and attractions, often as part of tourism or travel.",
    realEg: "They spent the day sightseeing in the historic district, marveling at the architecture and landmarks."
  },
  {
    term: "landmark",
    meaning: "Prominent or recognizable feature of a landscape, city, or area that serves as a point of interest, reference, or symbol, often with historical, cultural, or architectural significance.",
    realEg: "They snapped photos in front of famous landmarks like the Eiffel Tower and the Colosseum."
  },
  {
    term: "museum",
    meaning: "Institution that preserves, studies, and exhibits objects, artifacts, artworks, or specimens of cultural, historical, scientific, or artistic significance for public viewing and education.",
    realEg: "They spent hours exploring the museum's collections, learning about the region's rich history and culture."
  },
  {
    term: "attraction",
    meaning: "Place, event, or activity that draws or entices visitors, tourists, or spectators, offering entertainment, enjoyment, or cultural enrichment.",
    realEg: "The amusement park was a popular attraction for families, with its thrilling rides and colorful attractions."
  },
  {
    term: "adventure",
    meaning: "Exciting, unusual, or daring experience or activity involving risk, exploration, or unexpected challenges, often undertaken with a spirit of enthusiasm or curiosity.",
    realEg: "They embarked on a thrilling adventure, hiking through rugged terrain and camping under the stars."
  },
  {
    term: "culture",
    meaning: "Beliefs, customs, practices, values, arts, and achievements of a particular group of people, society, or community, reflecting their shared identity and heritage.",
    realEg: "They immersed themselves in the local culture, sampling traditional cuisine and attending cultural festivals."
  },
  {
    term: "history",
    meaning: "Study of past events, periods, developments, and figures, as well as the documentation and interpretation of human experiences and societies over time.",
    realEg: "They visited historical sites and monuments, gaining insights into the region's rich history and heritage."
  },
  {
    term: "landscape",
    meaning: "Visible features of an area of land, including natural elements such as mountains, valleys, rivers, and forests, as well as human-made structures and modifications.",
    realEg: "They marveled at the breathtaking landscape, with its sweeping vistas and rugged terrain."
  },
  {
    term: "beach",
    meaning: "Sandy or pebbly shore along the edge of a body of water, such as an ocean, sea, lake, or river, often visited for recreation, swimming, sunbathing, or relaxation.",
    realEg: "They spent lazy days lounging on the beach, soaking up the sun and splashing in the waves."
  },
  {
    term: "mountain",
    meaning: "Large landform rising prominently above its surroundings, typically with steep slopes, rocky peaks, and high elevation, offering scenic views and recreational opportunities.",
    realEg: "They embarked on a challenging hike to the summit of the mountain, rewarded with panoramic views at the top."
  },
  {
    term: "explore",
    meaning: "Traveling to unfamiliar places or regions in order to discover, investigate, or learn about them, often with a sense of curiosity, adventure, or discovery.",
    realEg: "They loved to explore new destinations, wandering through narrow alleyways and stumbling upon hidden gems."
  },
  {
    term: "wander",
    meaning: "Moving aimlessly or leisurely from place to place, exploring one's surroundings without a specific destination or itinerary.",
    realEg: "They enjoyed wandering through the cobblestone streets of the old town, taking in the sights and sounds."
  },
  {
    term: "trek",
    meaning: "Long and arduous journey, especially on foot or through difficult terrain, often undertaken for exploration, adventure, or pilgrimage.",
    realEg: "They embarked on a challenging trek through the jungle, encountering diverse wildlife and stunning scenery."
  },
  {
    term: "cruise",
    meaning: "Voyage or journey on a large ship, typically for pleasure or vacation, often involving stops at various ports or destinations along a predetermined route.",
    realEg: "They booked a cruise to the Caribbean, looking forward to days of relaxation and exploration at sea."
  },
  {
    term: "souvenir",
    meaning: "Item or memento purchased or kept as a reminder of a place visited, an event attended, or an experience enjoyed during travel.",
    realEg: "She bought a colorful souvenir from the local market, a token of her memorable trip to the tropics."
  },
  {
    term: "jet lag",
    meaning: "Temporary disruption of sleep patterns and bodily rhythms caused by traveling across multiple time zones, resulting in fatigue, insomnia, and other symptoms.",
    realEg: "They experienced severe jet lag after their long-haul flight, struggling to adjust to the new time zone."
  },
  {
    term: "currency exchange",
    meaning: "Process of converting one currency into another, typically for travel or international trade, often involving banks, exchange bureaus, or automated kiosks.",
    realEg: "They exchanged their currency at the airport for the local money, ensuring they had cash for their trip."
  },
  {
    term: "guidebook",
    meaning: "Book or publication containing information, advice, maps, and recommendations for travelers, providing guidance on destinations, accommodations, attractions, and activities.",
    realEg: "They relied on the guidebook for tips on the best restaurants and hidden gems in the city."
  },
  {
    term: "local transportation",
    meaning: "Public or private transportation services available within a specific area or region, including buses, trains, subways, taxis, and rental cars, used for getting around locally while traveling.",
    realEg: "They used local transportation to explore the city, hopping on and off buses to visit museums and landmarks."
  },
  {
    term: "taxi",
    meaning: "Motor vehicle with a driver hired to transport passengers to a specific destination, typically hailed on the street or called by phone, used for convenient and flexible transportation in urban areas.",
    realEg: "They flagged down a taxi and gave the driver the address of their hotel, eager to rest after a long day of sightseeing."
  },
  {
    term: "bus",
    meaning: "Large motor vehicle designed to carry passengers by road, typically operating on fixed routes with designated stops.",
    realEg: "They caught the bus to the city center and hopped off near the famous landmarks they wanted to visit."
  },
  {
    term: "subway",
    meaning: "Underground or elevated railway system, typically found in urban areas, consisting of trains that run on tracks and stop at designated stations, providing fast and efficient transportation for commuters and travelers.",
    realEg: "They took the subway to downtown, navigating the underground maze of tunnels and platforms to reach their destination."
  },
  {
    term: "rental car",
    meaning: "Vehicle that can be hired or leased from a rental agency for temporary use, typically used by travelers who need transportation during their trip.",
    realEg: "They rented a car for their road trip, enjoying the freedom to explore remote destinations and scenic routes at their own pace."
  },
  {
    term: "packing",
    meaning: "Process of preparing and organizing luggage or bags with clothes, accessories, and other items for a trip or journey, often involving careful selection, folding, and packing to maximize space and minimize wrinkles.",
    realEg: "She started packing a week before her trip, making lists of essentials and laying out outfits to ensure she didn't forget anything."
  },
  {
    term: "checklist",
    meaning: "List of items or tasks to be checked, verified, or completed, typically used to ensure that everything necessary has been done or included, especially when packing or preparing for travel.",
    realEg: "They used a checklist to pack for their camping trip, ticking off each item as they loaded it into the car."
  },
  {
    term: "travel insurance",
    meaning: "Insurance policy that provides coverage and protection for travelers against unexpected events, emergencies, or risks that may occur before or during a trip, including trip cancellation, medical expenses, and lost luggage.",
    realEg: "They purchased travel insurance to protect themselves against unforeseen circumstances like flight cancellations or medical emergencies while abroad."
  },
  {
    term: "accommodation",
    meaning: "Lodging or housing provided for travelers, typically including hotels, hostels, guesthouses, or vacation rentals.",
    realEg: "They booked their accommodation well in advance to secure a room with a view of the Eiffel Tower."
  },
  {
    term: "booking",
    meaning: "Process of reserving or securing accommodations, transportation, tickets, or services in advance, often by making a reservation or paying a deposit.",
    realEg: "They made their hotel booking online, choosing a centrally located property with good reviews."
  },
]


teachingTerms = teachingTerms.map((data) => { 
  if (data.realEg) { 
    data.relmEg = data.realEg;
    delete data.realEg;
  }
  data.contextId = "660a1d4e2cbdfdb40bd14a47"
  return data
})

let sortedTerms = teachingTerms.sort((a, b) => {
  // Convert terms to lowercase for case-insensitive sorting
  let termA = a.term.toLowerCase();
  let termB = b.term.toLowerCase();

  // Compare terms
  if (termA < termB) {
      return -1;
  }
  if (termA > termB) {
      return 1;
  }
  return 0;
});

let uniqueTerms = {};
let uniqueTeachingTerms = teachingTerms.filter(item => {
    // Convert term to lowercase for case-insensitive comparison
    let term = item.term.toLowerCase();
    // If term is not already in uniqueTerms object, add it and return true (to keep the item)
    if (!uniqueTerms[term]) {
        uniqueTerms[term] = true;
        return true;
    }
    // If term is already in uniqueTerms object, return false (to filter out the item)
    return false;
});
