import React, { useState } from 'react';
import { 
  FaSearch, 
  FaCalendar,
  FaUser,
  FaClock,
  FaEye,
  FaHeart,
  FaShare,
  FaComment,
  FaTag,
  FaArrowRight,
  FaBookOpen,
  FaGraduationCap,
  FaRocket,
  FaRobot,
  FaCode,
  FaLaptopCode,
  FaFilter,
  FaTimes
} from 'react-icons/fa';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { id: 'all', name: 'All Articles', count: 24, icon: FaBookOpen },
    { id: 'coding', name: 'Coding', count: 8, icon: FaCode },
    { id: 'robotics', name: 'Robotics & AI', count: 6, icon: FaRobot },
    { id: 'education', name: 'Education', count: 5, icon: FaGraduationCap },
    { id: 'technology', name: 'Technology', count: 5, icon: FaRocket },
  ];

  const popularTags = [
    'Python', 'JavaScript', 'STEM', 'Machine Learning', 'Web Development',
    'Robotics', 'Coding for Kids', 'AI Education', 'Programming', 'EdTech'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Introducing Python to Young Minds: A Beginner's Guide",
      excerpt: "Discover effective strategies to teach Python programming to children aged 8-12. Learn about interactive tools and projects that make learning fun and engaging.",
      category: 'coding',
      author: 'Dr. Sarah Johnson',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      views: '2.4K',
      likes: 156,
      comments: 23,
      image: '/blog/python-kids.jpg',
      tags: ['Python', 'Coding for Kids', 'Programming'],
      featured: true,
      gradient: 'from-orange-500 to-[#E22213]'
    },
    {
      id: 2,
      title: "The Future of AI in Classroom Education",
      excerpt: "How artificial intelligence is transforming traditional learning environments and creating personalized educational experiences for students.",
      category: 'technology',
      author: 'Mike Chen',
      date: 'Dec 12, 2024',
      readTime: '12 min read',
      views: '3.1K',
      likes: 289,
      comments: 45,
      image: '/blog/ai-education.jpg',
      tags: ['AI', 'Machine Learning', 'EdTech'],
      gradient: 'from-[#0b234a] to-blue-600'
    },
    {
      id: 3,
      title: "Building Your First Robot: A Step-by-Step Guide for Students",
      excerpt: "Comprehensive guide to building a simple robot using Arduino. Perfect for school projects and beginner robotics enthusiasts.",
      category: 'robotics',
      author: 'Priya Sharma',
      date: 'Dec 10, 2024',
      readTime: '15 min read',
      views: '1.8K',
      likes: 134,
      comments: 18,
      image: '/blog/robotics-guide.jpg',
      tags: ['Robotics', 'Arduino', 'STEM'],
      gradient: 'from-[#E22213] to-orange-500'
    },
    {
      id: 4,
      title: "Why Coding Should Be Taught in Elementary Schools",
      excerpt: "Exploring the benefits of introducing coding concepts at an early age and how it develops critical thinking and problem-solving skills.",
      category: 'education',
      author: 'David Brown',
      date: 'Dec 8, 2024',
      readTime: '6 min read',
      views: '4.2K',
      likes: 312,
      comments: 67,
      image: '/blog/coding-elementary.jpg',
      tags: ['Education', 'Coding', 'STEM'],
      featured: true,
      gradient: 'from-[#0b234a] to-blue-600'
    },
    {
      id: 5,
      title: "Web Development for Kids: Creating Your First Website",
      excerpt: "Fun and interactive approach to teaching HTML, CSS, and JavaScript basics to young learners through creative projects.",
      category: 'coding',
      author: 'Alex Thompson',
      date: 'Dec 5, 2024',
      readTime: '10 min read',
      views: '2.1K',
      likes: 178,
      comments: 29,
      image: '/blog/web-dev-kids.jpg',
      tags: ['Web Development', 'JavaScript', 'HTML'],
      gradient: 'from-orange-500 to-[#E22213]'
    },
    {
      id: 6,
      title: "The Impact of VR and AR on Modern Learning",
      excerpt: "How virtual and augmented reality technologies are creating immersive learning experiences and revolutionizing education.",
      category: 'technology',
      author: 'Dr. Sarah Johnson',
      date: 'Dec 3, 2024',
      readTime: '11 min read',
      views: '2.9K',
      likes: 201,
      comments: 34,
      image: '/blog/vr-education.jpg',
      tags: ['VR', 'AR', 'Technology'],
      gradient: 'from-[#E22213] to-orange-500'
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b234a] via-[#1a3a6e] to-[#0b234a] text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-orange-500 to-[#E22213] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <FaBookOpen className="text-orange-400" />
              <span className="text-sm font-semibold">Latest in Education Technology</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Aaklan
              <span className="block bg-gradient-to-r from-orange-400 to-[#E22213] bg-clip-text text-transparent mt-2">
                Blog & Insights
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover the latest trends in coding education, robotics, AI, and innovative teaching methodologies.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 backdrop-blur-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-[#0b234a] flex items-center gap-2">
                  <FaFilter className="text-[#E22213]" />
                  Categories
                </h3>
              </div>
              <div className="p-4">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 mb-2 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-orange-500 to-[#E22213] text-white shadow-lg'
                          : 'text-gray-700 hover:bg-orange-50 hover:text-[#0b234a]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="text-sm" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        activeCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 backdrop-blur-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-[#0b234a] flex items-center gap-2">
                  <FaTag className="text-[#E22213]" />
                  Popular Tags
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-3 py-2 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-[#0b234a] transition-all duration-300 hover:scale-105"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-[#0b234a] to-blue-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="text-center mb-4">
                <FaBookOpen className="text-3xl text-orange-400 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest articles on education technology delivered to your inbox.
                </p>
              </div>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-[#E22213] text-white py-2 rounded-lg font-semibold text-sm hover:from-orange-600 hover:to-[#ff2b1a] transition-all duration-300"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:w-3/4">
            {/* Featured Post */}
            {featuredPost && activeCategory === 'all' && !searchTerm && (
              <div className="mb-12">
                <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden backdrop-blur-sm">
                  <div className="md:flex">
                    <div className="md:w-2/5 bg-gradient-to-br from-gray-100 to-gray-200 min-h-64 md:min-h-80 flex items-center justify-center">
                      <FaLaptopCode className="text-6xl text-gray-400" />
                    </div>
                    <div className="md:w-3/5 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${featuredPost.gradient} text-white rounded-full text-xs font-semibold`}>
                          Featured
                        </span>
                        <span className="text-sm text-gray-500">{featuredPost.category}</span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0b234a] to-blue-600 bg-clip-text text-transparent mb-4">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1">
                          <FaUser className="text-[#E22213]" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCalendar className="text-[#E22213]" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock className="text-[#E22213]" />
                          {featuredPost.readTime}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-sm text-gray-500">
                          <button className="flex items-center gap-1 hover:text-[#E22213] transition-colors">
                            <FaHeart />
                            <span>{featuredPost.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-[#E22213] transition-colors">
                            <FaComment />
                            <span>{featuredPost.comments}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-[#E22213] transition-colors">
                            <FaShare />
                          </button>
                        </div>
                        <button className="group bg-gradient-to-r from-orange-500 to-[#E22213] text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-[#ff2b1a] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                          Read More
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Posts Grid */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0b234a] to-blue-600 bg-clip-text text-transparent">
                  {searchTerm ? 'Search Results' : activeCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === activeCategory)?.name}`}
                </h2>
                <span className="text-gray-500 text-sm">
                  {filteredPosts.length} articles found
                </span>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group bg-gradient-to-br from-white to-gray-50/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border border-gray-200/50 hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedPost(post)}
                    >
                      <div className="p-6">
                        {/* Category and Meta */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 bg-gradient-to-r ${post.gradient} text-white rounded text-xs font-semibold`}>
                              {post.category}
                            </span>
                            {post.featured && (
                              <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-[#E22213] text-white rounded text-xs font-semibold">
                                Featured
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold bg-gradient-to-r from-[#0b234a] to-blue-600 bg-clip-text text-transparent mb-3 group-hover:from-orange-500 group-hover:to-[#E22213] transition-all duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <FaUser className="text-[#E22213] text-xs" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <FaClock className="text-[#E22213] text-xs" />
                              {post.readTime}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaEye className="text-xs" />
                            {post.views}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200/50">
                          <div className="flex gap-3 text-gray-500">
                            <button className="flex items-center gap-1 text-xs hover:text-[#E22213] transition-colors">
                              <FaHeart />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-xs hover:text-[#E22213] transition-colors">
                              <FaComment />
                              <span>{post.comments}</span>
                            </button>
                          </div>
                          <button className="group flex items-center gap-1 text-[#0b234a] text-sm font-semibold hover:text-orange-500 transition-colors">
                            Read More
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <FaSearch className="text-3xl text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#0b234a] to-blue-600 bg-clip-text text-transparent mb-3">
                    No articles found
                  </h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-6">
                    {searchTerm 
                      ? `No results found for "${searchTerm}". Try different keywords or browse all categories.`
                      : 'No articles available in this category at the moment.'
                    }
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('all');
                    }}
                    className="bg-gradient-to-r from-orange-500 to-[#E22213] text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-[#ff2b1a] transition-all duration-300"
                  >
                    Browse All Articles
                  </button>
                </div>
              )}

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
                <div className="text-center mt-12">
                  <button className="group border-2 border-[#0b234a] text-[#0b234a] px-8 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-[#0b234a] hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center gap-2">
                      Load More Articles
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;