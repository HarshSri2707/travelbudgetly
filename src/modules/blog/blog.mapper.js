// Blog Mapper - Backend-ready data transformation layer

export const blogMapper = {
  // Map API response to frontend model
  fromAPI: (apiData) => {
    return {
      id: apiData.id || apiData._id,
      title: apiData.title || apiData.post_title,
      slug: apiData.slug || apiData.url_slug,
      category: apiData.category || apiData.blog_category,
      author: apiData.author || apiData.author_name || apiData.created_by,
      publishDate: apiData.publish_date || apiData.published_at || apiData.created_at,
      readTime: apiData.read_time || apiData.reading_time || '5 min read',
      image: apiData.image || apiData.featured_image || apiData.cover_image,
      thumbnail: apiData.thumbnail || apiData.image_thumb,
      excerpt: apiData.excerpt || apiData.summary || apiData.meta_description,
      content: apiData.content || apiData.post_content || apiData.body,
      summary: apiData.summary_box || apiData.quick_facts || {},
      tags: apiData.tags || apiData.keywords || [],
    }
  },

  // Map frontend model to API payload
  toAPI: (blog) => {
    return {
      title: blog.title,
      slug: blog.slug,
      blog_category: blog.category,
      author_name: blog.author,
      featured_image: blog.image,
      summary: blog.excerpt,
      post_content: blog.content,
      quick_facts: blog.summary,
      tags: blog.tags,
    }
  },

  // Map list of blogs
  fromAPIList: (apiList) => {
    if (!Array.isArray(apiList)) return []
    return apiList.map(blogMapper.fromAPI)
  },

  // Filter helpers
  filterByCategory: (blogs, category) => {
    if (!category || category === 'all') return blogs
    return blogs.filter(b => b.category === category)
  },

  filterByAuthor: (blogs, author) => {
    if (!author) return blogs
    return blogs.filter(b => b.author === author)
  },

  // Sort helpers
  sortByDate: (blogs, order = 'desc') => {
    return [...blogs].sort((a, b) => {
      const dateA = new Date(a.publishDate)
      const dateB = new Date(b.publishDate)
      return order === 'desc' ? dateB - dateA : dateA - dateB
    })
  },

  // Search helper
  searchBlogs: (blogs, query) => {
    if (!query) return blogs
    const lowerQuery = query.toLowerCase()
    return blogs.filter(b => 
      b.title.toLowerCase().includes(lowerQuery) ||
      b.excerpt.toLowerCase().includes(lowerQuery) ||
      b.category.toLowerCase().includes(lowerQuery)
    )
  },
}