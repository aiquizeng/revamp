import { Calendar, User, ArrowRight, Search } from 'lucide-react'

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Enterprise AI: Trends to Watch in 2025',
    excerpt: 'As we move into 2025, artificial intelligence is becoming more integrated into enterprise operations. Here are the key trends that will shape the future of business AI.',
    author: 'Sarah Kim',
    date: '2025-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    category: 'AI & Technology'
  }

  const blogPosts = [
    {
      title: 'Cybersecurity Best Practices for Remote Teams',
      excerpt: 'With remote work becoming the norm, cybersecurity challenges have evolved. Learn how to protect your distributed workforce.',
      author: 'Michael Thompson',
      date: '2025-01-12',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
      category: 'Cybersecurity'
    },
    {
      title: 'Digital Transformation ROI: Measuring Success',
      excerpt: 'How to measure the return on investment for your digital transformation initiatives and ensure long-term success.',
      author: 'Emily Chen',
      date: '2025-01-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      category: 'Digital Strategy'
    },
    {
      title: 'Custom Software vs. Off-the-Shelf: Making the Right Choice',
      excerpt: 'A comprehensive guide to help you decide between custom software development and off-the-shelf solutions.',
      author: 'Alex Rodriguez',
      date: '2025-01-08',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      category: 'Software Development'
    },
    {
      title: 'Market Research in the Digital Age: Tools and Techniques',
      excerpt: 'Modern market research techniques that leverage digital tools and data analytics for better business insights.',
      author: 'Sarah Kim',
      date: '2025-01-05',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      category: 'Market Research'
    },
    {
      title: 'Building Scalable AI Agents for Enterprise Operations',
      excerpt: 'Technical insights into creating AI agents that can scale with your business needs and handle complex workflows.',
      author: 'Alex Rodriguez',
      date: '2025-01-03',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      category: 'AI & Technology'
    },
    {
      title: 'The Complete Guide to GDPR Compliance for Tech Companies',
      excerpt: 'Everything you need to know about GDPR compliance, from data protection policies to implementation strategies.',
      author: 'Michael Thompson',
      date: '2025-01-01',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      category: 'Cybersecurity'
    }
  ]

  const categories = [
    'All Posts',
    'AI & Technology',
    'Cybersecurity',
    'Digital Strategy',
    'Software Development',
    'Market Research'
  ]

  return (
    <div className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            DigiCinta <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, trends, and best practices 
            in digital transformation, AI, cybersecurity, and business strategy.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    category === 'All Posts'
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="mb-4">
                  <span className="text-primary-600 font-medium text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-secondary-500">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <button className="inline-flex items-center whitespace-nowrap text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group">
                    <span>Read More</span>
                    <ArrowRight size={16} className="ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-secondary-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-secondary-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <button className="inline-flex items-center whitespace-nowrap text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group text-sm">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More Articles
          </button>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights delivered 
            directly to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog