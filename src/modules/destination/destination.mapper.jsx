// Destination Mapper - Backend-ready data transformation layer

export const destinationMapper = {
  // Map API response to frontend model
  fromAPI: (apiData) => {
    return {
      id: apiData.id || apiData._id,
      name: apiData.name || apiData.title,
      slug: apiData.slug || apiData.url_slug,
      region: apiData.region || apiData.location?.region,
      zone: apiData.zone || apiData.location?.zone,
      description: apiData.description || apiData.about,
      image: apiData.image || apiData.featured_image || apiData.images?.[0],
      thumbnail: apiData.thumbnail || apiData.image_thumb,
      price: parseInt(apiData.price || apiData.starting_price || 0),
      duration: apiData.duration || apiData.days || '5 Days',
      rating: parseFloat(apiData.rating || apiData.average_rating || 4.5),
      bestTime: apiData.best_time || apiData.best_season,
      highlights: apiData.highlights || apiData.top_attractions || [],
    }
  },

  // Map frontend model to API payload
  toAPI: (destination) => {
    return {
      name: destination.name,
      slug: destination.slug,
      region: destination.region,
      zone: destination.zone,
      description: destination.description,
      featured_image: destination.image,
      starting_price: destination.price,
      duration: destination.duration,
      best_season: destination.bestTime,
      top_attractions: destination.highlights,
    }
  },

  // Map list of destinations
  fromAPIList: (apiList) => {
    if (!Array.isArray(apiList)) return []
    return apiList.map(destinationMapper.fromAPI)
  },

  // Filter and sort helpers
  filterByRegion: (destinations, region) => {
    if (!region || region === 'all') return destinations
    return destinations.filter(d => 
      d.region.toLowerCase() === region.toLowerCase()
    )
  },

  filterByZone: (destinations, zone) => {
    if (!zone || zone === 'all') return destinations
    return destinations.filter(d => 
      d.zone?.toLowerCase().includes(zone.toLowerCase())
    )
  },

  sortByPrice: (destinations, order = 'asc') => {
    return [...destinations].sort((a, b) => 
      order === 'asc' ? a.price - b.price : b.price - a.price
    )
  },

  sortByRating: (destinations) => {
    return [...destinations].sort((a, b) => b.rating - a.rating)
  },
}