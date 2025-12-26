export const updateMetaTags = ({ title, description, keywords, image }) => {
  document.title = title ? `${title} | TravelBudgetly` : 'TravelBudgetly - Discover the World'
  
  const metaTags = {
    description,
    keywords,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
  }

  Object.entries(metaTags).forEach(([name, content]) => {
    if (content) {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(name.includes(':') ? 'property' : 'name', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
  })
}