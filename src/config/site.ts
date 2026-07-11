import { SiteConfig, FrontPageSection, TeamMember, Testimonial, Feature, ContactInfo, Post, PortfolioItem, Service, PricingPlan, Skill, Product, ColorScheme, EventItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'DGC',
  slogan: 'Digital Gross Company',
  url: '/',
  logo: {
    default: '/images/logo.png',
    retina: '/images/logo@2x.png',
    footer: '/images/logo-footer.png',
    footerRetina: '/images/logo-footer@2x.png',
    mobile: '/images/logo-mobile.png',
    mobileRetina: '/images/logo-mobile@2x.png',
  },
  copyright: '&copy; {Y} DGC. All rights reserved.',
  socials: [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'icon-facebook' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'icon-twitter' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'icon-instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'icon-linkedin' },
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features', children: [
      { label: 'About', href: '/#about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Team', href: '/team' },
    ]},
    { label: 'Blog', href: '/blog' },
    { label: 'Shop', href: '/shop', children: [
      { label: 'Products', href: '/shop' },
      { label: 'Cart', href: '/cart' },
      { label: 'Checkout', href: '/checkout' },
    ]},
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/#contacts' },
  ],
  footerWidgets: [
    {
      title: 'About DGC',
      content: 'Digital Gross Company - Your partner in digital solutions.',
    },
    {
      title: 'Quick Links',
      content: '',
    },
    {
      title: 'Contact Info',
      content: '',
    },
  ],
  colorScheme: 'light',
  headerStyle: 'default',
  bodyStyle: 'wide',
  sidebarPosition: 'right',
  blogStyle: 'excerpt',
  singleStyle: 'style-1',
  postsPerPage: 10,
  excerptLength: 55,
  showSidebar: true,
  showSearch: true,
  showCart: false,
  socialsInFooter: true,
  logoInFooter: true,
  footerColumns: 3,
};

export const colorSchemes: Record<string, ColorScheme> = {
  default: {
    name: 'Default',
    slug: 'default',
    colors: {
      bg_color: '#F8F9FA', bg_hover: '#FFFFFF', bd_color: '#DDDEDE', bd_hover: '#BBBBBB',
      text: '#797C7F', text_dark: '#15212D', text_light: '#A8ABAE', text_link: '#E1A13A',
      text_hover: '#C48A2D', text_link2: '#E1A13A', text_hover2: '#C48A2D', text_link3: '#E1A13A', text_hover3: '#C48A2D',
      alter_bg_color: '#FFFFFF', alter_bg_hover: '#F0F1F2', alter_bd_color: '#DDDEDE', alter_bd_hover: '#BBBBBB',
      alter_text: '#797C7F', alter_dark: '#15212D', alter_light: '#A8ABAE', alter_link: '#E1A13A', alter_hover: '#C48A2D',
      extra_bg_color: '#15212D', extra_bg_hover: '#1E2D3B', extra_bd_color: '#2E3E4C', extra_bd_hover: '#3E4E5C',
      extra_text: '#A8ABAE', extra_dark: '#FFFFFF', extra_light: '#797C7F', extra_link: '#E1A13A', extra_hover: '#C48A2D',
      inverse_text: '#FFFFFF', inverse_dark: '#15212D', inverse_light: '#A8ABAE', inverse_link: '#FFFFFF', inverse_hover: '#15212D',
      input_bg_color: '#F0F1F2', input_bg_hover: '#FFFFFF', input_bd_color: '#DDDEDE', input_bd_hover: '#E1A13A',
      input_text: '#797C7F', input_dark: '#15212D', input_light: '#A8ABAE',
    },
  },
  dark: {
    name: 'Dark',
    slug: 'dark',
    colors: {
      bg_color: '#15212D', bg_hover: '#1E2D3B', bd_color: '#2E3E4C', bd_hover: '#3E4E5C',
      text: '#A8ABAE', text_dark: '#FFFFFF', text_light: '#797C7F', text_link: '#E1A13A',
      text_hover: '#C48A2D', text_link2: '#E1A13A', text_hover2: '#C48A2D', text_link3: '#E1A13A', text_hover3: '#C48A2D',
      alter_bg_color: '#1E2D3B', alter_bg_hover: '#273847', alter_bd_color: '#2E3E4C', alter_bd_hover: '#3E4E5C',
      alter_text: '#A8ABAE', alter_dark: '#FFFFFF', alter_light: '#797C7F', alter_link: '#E1A13A', alter_hover: '#C48A2D',
      extra_bg_color: '#0D1821', extra_bg_hover: '#15212D', extra_bd_color: '#2E3E4C', extra_bd_hover: '#3E4E5C',
      extra_text: '#A8ABAE', extra_dark: '#FFFFFF', extra_light: '#797C7F', extra_link: '#E1A13A', extra_hover: '#C48A2D',
      inverse_text: '#FFFFFF', inverse_dark: '#15212D', inverse_light: '#A8ABAE', inverse_link: '#FFFFFF', inverse_hover: '#15212D',
      input_bg_color: '#1E2D3B', input_bg_hover: '#273847', input_bd_color: '#2E3E4C', input_bd_hover: '#E1A13A',
      input_text: '#A8ABAE', input_dark: '#FFFFFF', input_light: '#797C7F',
    },
  },
  light: {
    name: 'Light',
    slug: 'light',
    colors: {
      bg_color: '#FFFFFF', bg_hover: '#F8F9FA', bd_color: '#DDDEDE', bd_hover: '#BBBBBB',
      text: '#797C7F', text_dark: '#15212D', text_light: '#A8ABAE', text_link: '#E1A13A',
      text_hover: '#C48A2D', text_link2: '#E1A13A', text_hover2: '#C48A2D', text_link3: '#E1A13A', text_hover3: '#C48A2D',
      alter_bg_color: '#F8F9FA', alter_bg_hover: '#F0F1F2', alter_bd_color: '#DDDEDE', alter_bd_hover: '#BBBBBB',
      alter_text: '#797C7F', alter_dark: '#15212D', alter_light: '#A8ABAE', alter_link: '#E1A13A', alter_hover: '#C48A2D',
      extra_bg_color: '#15212D', extra_bg_hover: '#1E2D3B', extra_bd_color: '#2E3E4C', extra_bd_hover: '#3E4E5C',
      extra_text: '#A8ABAE', extra_dark: '#FFFFFF', extra_light: '#797C7F', extra_link: '#E1A13A', extra_hover: '#C48A2D',
      inverse_text: '#FFFFFF', inverse_dark: '#15212D', inverse_light: '#A8ABAE', inverse_link: '#FFFFFF', inverse_hover: '#15212D',
      input_bg_color: '#F0F1F2', input_bg_hover: '#FFFFFF', input_bd_color: '#DDDEDE', input_bd_hover: '#E1A13A',
      input_text: '#797C7F', input_dark: '#15212D', input_light: '#A8ABAE',
    },
  },
};

export const frontPageSections: FrontPageSection[] = [
  {
    id: 'title',
    type: 'title',
    enabled: true,
    paddings: 'large',
    fullheight: true,
    bgImage: '/images/front-page/bg-title.jpg',
    bgMask: 0.6,
    bgColor: '#000000',
    caption: 'Welcome to DGC',
    description: 'We provide the best digital solutions for your business growth and success.',
    buttons: [
      { label: 'Get Started', url: '/#about', style: 'primary' },
      { label: 'Learn More', url: '/#features', style: 'secondary' },
    ],
  },
  {
    id: 'about',
    type: 'about',
    enabled: true,
    paddings: 'large',
    caption: 'About Us',
    description: 'We are a team of professionals dedicated to delivering exceptional digital experiences.',
    content: '<p>With years of experience in the digital industry, we help businesses transform their online presence and achieve their goals.</p>',
  },
  {
    id: 'features',
    type: 'features',
    enabled: true,
    paddings: 'large',
    scheme: 'dark',
    bgImage: '/images/front-page/bg.jpg',
    bgMask: 0.8,
    bgColor: '#1a1a1a',
    caption: 'Our Services',
    description: 'What we offer to help your business grow.',
  },
  {
    id: 'team',
    type: 'team',
    enabled: true,
    paddings: 'large',
    bgImage: '/images/front-page/bg-team.jpg',
    bgMask: 0.7,
    bgColor: '#000000',
    caption: 'Our Team',
    description: 'Meet the people behind DGC.',
  },
  {
    id: 'testimonials',
    type: 'testimonials',
    enabled: true,
    paddings: 'large',
    caption: 'Testimonials',
    description: 'What our clients say about us.',
  },
  {
    id: 'blog',
    type: 'blog',
    enabled: true,
    paddings: 'large',
    caption: 'Latest News',
    description: 'Stay updated with our latest posts and articles.',
  },
  {
    id: 'contacts',
    type: 'contacts',
    enabled: true,
    paddings: 'large',
    scheme: 'dark',
    bgImage: '/images/front-page/bg.jpg',
    bgMask: 0.85,
    bgColor: '#1a1a1a',
    caption: 'Contact Us',
    description: 'Get in touch with our team.',
  },
  {
    id: 'subscribe',
    type: 'subscribe',
    enabled: true,
    paddings: 'medium',
    bgImage: '/images/front-page/bg-subscribe.jpg',
    bgMask: 0.7,
    bgColor: '#000000',
    caption: 'Newsletter',
    description: 'Subscribe to our newsletter to stay updated.',
  },
];

export const demoFeatures: Feature[] = [
  {
    icon: 'icon-desktop',
    title: 'Web Development',
    description: 'Custom websites and web applications tailored to your needs.',
  },
  {
    icon: 'icon-mobile',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    icon: 'icon-chart-bar',
    title: 'Digital Marketing',
    description: 'SEO, social media, and content marketing strategies.',
  },
  {
    icon: 'icon-pencil',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interface designs.',
  },
  {
    icon: 'icon-cloud',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and hosting services.',
  },
  {
    icon: 'icon-lock',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions for your digital assets.',
  },
];

export const demoTeam: TeamMember[] = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    avatar: '/images/no-photo.png',
    bio: 'Visionary leader with 15 years of experience.',
    socials: [
      { name: 'LinkedIn', url: '#', icon: 'icon-linkedin' },
      { name: 'Twitter', url: '#', icon: 'icon-twitter' },
    ],
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    avatar: '/images/no-photo.png',
    bio: 'Technology expert driving innovation.',
    socials: [
      { name: 'LinkedIn', url: '#', icon: 'icon-linkedin' },
      { name: 'GitHub', url: '#', icon: 'icon-github' },
    ],
  },
  {
    name: 'Mike Johnson',
    position: 'Lead Designer',
    avatar: '/images/no-photo.png',
    bio: 'Creative mind behind our stunning designs.',
    socials: [
      { name: 'Dribbble', url: '#', icon: 'icon-dribbble' },
      { name: 'Instagram', url: '#', icon: 'icon-instagram' },
    ],
  },
  {
    name: 'Sarah Williams',
    position: 'Marketing Director',
    avatar: '/images/no-photo.png',
    bio: 'Strategic marketing professional.',
    socials: [
      { name: 'LinkedIn', url: '#', icon: 'icon-linkedin' },
      { name: 'Twitter', url: '#', icon: 'icon-twitter' },
    ],
  },
];

export const demoTestimonials: Testimonial[] = [
  {
    author: 'Robert Brown',
    position: 'CEO, TechCorp',
    avatar: '/images/no-photo.png',
    content: 'DGC transformed our online presence completely. Their team delivered exceptional results that exceeded our expectations.',
    rating: 5,
  },
  {
    author: 'Emily Davis',
    position: 'Marketing Manager, StartupXYZ',
    avatar: '/images/no-photo.png',
    content: 'Working with DGC was a fantastic experience. They understood our vision and brought it to life beautifully.',
    rating: 5,
  },
  {
    author: 'David Wilson',
    position: 'Founder, DesignHub',
    avatar: '/images/no-photo.png',
    content: 'The quality of work and attention to detail from the DGC team is unmatched. Highly recommended!',
    rating: 5,
  },
];

export const demoContacts: ContactInfo[] = [
  { icon: 'icon-location', label: 'Address', value: '123 Business Street, City, Country' },
  { icon: 'icon-phone', label: 'Phone', value: '+1 (555) 123-4567', url: 'tel:+15551234567' },
  { icon: 'icon-mail', label: 'Email', value: 'info@dgc.com', url: 'mailto:info@dgc.com' },
  { icon: 'icon-clock', label: 'Working Hours', value: 'Mon-Fri: 9:00 - 18:00' },
];

export const demoPosts: Post[] = [
  {
    id: '1',
    slug: 'getting-started-with-digital-marketing',
    title: 'Getting Started with Digital Marketing',
    excerpt: 'Learn the fundamentals of digital marketing and how to create effective campaigns for your business.',
    content: '<p>Digital marketing is essential for modern businesses. In this comprehensive guide, we will explore the key strategies and tools you need to succeed in the digital landscape.</p><p>From SEO to social media marketing, we cover everything you need to know to get started.</p><h3>Understanding Your Audience</h3><p>The first step in any successful digital marketing campaign is understanding your target audience. This involves researching demographics, interests, and online behavior patterns.</p><h3>Creating a Strategy</h3><p>Once you understand your audience, you can create a comprehensive marketing strategy that includes content marketing, social media engagement, email campaigns, and paid advertising.</p><p>Remember, consistency is key. Regular posting and engagement with your audience will build trust and brand recognition over time.</p>',
    date: '2024-03-15',
    author: { name: 'John Doe', avatar: '/images/no-photo.png', bio: 'CEO & Founder of DGC' },
    categories: [{ name: 'Marketing', slug: 'marketing' }],
    tags: [{ name: 'Digital Marketing', slug: 'digital-marketing' }, { name: 'Strategy', slug: 'strategy' }],
    featuredImage: '/images/no-image.jpg',
    format: 'standard',
    sticky: false,
    commentsCount: 5,
  },
  {
    id: '2',
    slug: 'web-design-trends-2024',
    title: 'Web Design Trends for 2024',
    excerpt: 'Discover the latest web design trends that are shaping the digital landscape this year.',
    content: '<p>Web design is constantly evolving. Stay ahead of the curve with these trending design approaches for 2024.</p><p>From minimalist layouts to immersive 3D experiences, the future of web design is exciting and full of possibilities.</p>',
    date: '2024-03-10',
    author: { name: 'Jane Smith', avatar: '/images/no-photo.png', bio: 'CTO at DGC' },
    categories: [{ name: 'Design', slug: 'design' }],
    tags: [{ name: 'Web Design', slug: 'web-design' }, { name: 'Trends', slug: 'trends' }],
    featuredImage: '/images/no-image.jpg',
    format: 'standard',
    sticky: false,
    commentsCount: 3,
  },
  {
    id: '3',
    slug: 'importance-of-mobile-first-approach',
    title: 'The Importance of Mobile-First Approach',
    excerpt: 'Why designing for mobile devices first is crucial for the success of your website.',
    content: '<p>With over 60% of web traffic coming from mobile devices, adopting a mobile-first approach to web design is no longer optional — it is essential.</p><p>In this article, we explore the benefits of mobile-first design and how to implement it effectively.</p>',
    date: '2024-03-05',
    author: { name: 'Mike Johnson', avatar: '/images/no-photo.png', bio: 'Lead Designer at DGC' },
    categories: [{ name: 'Development', slug: 'development' }],
    tags: [{ name: 'Mobile', slug: 'mobile' }, { name: 'Responsive', slug: 'responsive' }],
    featuredImage: '/images/no-image.jpg',
    format: 'standard',
    sticky: true,
    commentsCount: 8,
  },
];

export const demoPortfolio: PortfolioItem[] = [
  { id: 'p1', slug: 'brand-identity-design', title: 'Brand Identity Design', excerpt: 'Complete brand identity package for a tech startup.', content: '<p>We created a comprehensive brand identity system including logo, color palette, typography guidelines, and marketing collateral.</p><h3>The Challenge</h3><p>The client needed a modern, professional brand identity that would stand out in the competitive tech market.</p><h3>Our Approach</h3><p>We conducted extensive market research and competitor analysis before developing multiple concept directions.</p>', date: '2024-02-20', categories: [{ name: 'Branding', slug: 'branding' }], tags: [{ name: 'Logo', slug: 'logo' }, { name: 'Identity', slug: 'identity' }], featuredImage: '/images/no-image.jpg', gallery: ['/images/no-image.jpg', '/images/no-image.jpg', '/images/no-image.jpg'], client: 'TechCorp Inc.', projectUrl: '#', layout: 'default' },
  { id: 'p2', slug: 'e-commerce-platform', title: 'E-Commerce Platform', excerpt: 'Full-featured online store with custom design.', content: '<p>A complete e-commerce solution built from the ground up with custom design and seamless user experience.</p>', date: '2024-02-15', categories: [{ name: 'Web Development', slug: 'web-development' }], tags: [{ name: 'E-Commerce', slug: 'e-commerce' }, { name: 'React', slug: 'react' }], featuredImage: '/images/no-image.jpg', gallery: ['/images/no-image.jpg', '/images/no-image.jpg'], client: 'ShopMax', projectUrl: '#', layout: 'default' },
  { id: 'p3', slug: 'mobile-banking-app', title: 'Mobile Banking App', excerpt: 'Secure and intuitive mobile banking application.', content: '<p>We designed and developed a mobile banking application with focus on security and user experience.</p>', date: '2024-02-10', categories: [{ name: 'Mobile', slug: 'mobile' }], tags: [{ name: 'Fintech', slug: 'fintech' }, { name: 'UI/UX', slug: 'ui-ux' }], featuredImage: '/images/no-image.jpg', client: 'FinBank', layout: 'default' },
  { id: 'p4', slug: 'corporate-website-redesign', title: 'Corporate Website Redesign', excerpt: 'Modern redesign for a Fortune 500 company.', content: '<p>A complete website overhaul bringing a dated corporate site into the modern era with responsive design and improved UX.</p>', date: '2024-01-25', categories: [{ name: 'Web Development', slug: 'web-development' }], tags: [{ name: 'Corporate', slug: 'corporate' }, { name: 'Redesign', slug: 'redesign' }], featuredImage: '/images/no-image.jpg', client: 'GlobalCorp', layout: 'default' },
  { id: 'p5', slug: 'social-media-campaign', title: 'Social Media Campaign', excerpt: 'Viral marketing campaign across multiple platforms.', content: '<p>We crafted a multi-platform social media campaign that generated over 1M impressions in the first week.</p>', date: '2024-01-20', categories: [{ name: 'Marketing', slug: 'marketing' }], tags: [{ name: 'Social Media', slug: 'social-media' }, { name: 'Campaign', slug: 'campaign' }], featuredImage: '/images/no-image.jpg', client: 'BrandX', layout: 'default' },
  { id: 'p6', slug: 'dashboard-analytics', title: 'Dashboard & Analytics', excerpt: 'Real-time analytics dashboard for data-driven decisions.', content: '<p>An interactive analytics dashboard providing real-time insights into business performance metrics.</p>', date: '2024-01-15', categories: [{ name: 'Web Development', slug: 'web-development' }], tags: [{ name: 'Dashboard', slug: 'dashboard' }, { name: 'Analytics', slug: 'analytics' }], featuredImage: '/images/no-image.jpg', client: 'DataViz Inc.', layout: 'default' },
];

export const demoServices: Service[] = [
  { id: 's1', slug: 'web-development', title: 'Web Development', excerpt: 'Custom websites and web applications built with cutting-edge technologies.', content: '<p>We build high-performance websites and web applications using the latest frameworks and technologies.</p><h3>Technologies We Use</h3><ul><li>React / Next.js</li><li>TypeScript</li><li>Node.js</li><li>PostgreSQL / MongoDB</li></ul><h3>Our Process</h3><p>We follow an agile development methodology to ensure fast delivery and continuous improvement.</p>', icon: 'icon-desktop', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Development', slug: 'development' }], features: ['Custom Design', 'Responsive Layout', 'SEO Optimized', 'Fast Loading'], link: '#', layout: 'default' },
  { id: 's2', slug: 'mobile-development', title: 'Mobile Development', excerpt: 'Native and cross-platform mobile apps for iOS and Android.', content: '<p>We create beautiful, high-performance mobile applications for both iOS and Android platforms.</p>', icon: 'icon-mobile', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Development', slug: 'development' }], features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'Offline Support'], link: '#', layout: 'default' },
  { id: 's3', slug: 'ui-ux-design', title: 'UI/UX Design', excerpt: 'User-centered design that creates intuitive and engaging experiences.', content: '<p>Our design team creates stunning interfaces that combine aesthetics with usability.</p>', icon: 'icon-pencil', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Design', slug: 'design' }], features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'], link: '#', layout: 'default' },
  { id: 's4', slug: 'digital-marketing', title: 'Digital Marketing', excerpt: 'Data-driven marketing strategies that deliver measurable results.', content: '<p>We help businesses grow through strategic digital marketing campaigns across all channels.</p>', icon: 'icon-chart-bar', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Marketing', slug: 'marketing' }], features: ['SEO', 'PPC', 'Social Media', 'Email Marketing'], link: '#', layout: 'default' },
  { id: 's5', slug: 'cloud-solutions', title: 'Cloud Solutions', excerpt: 'Scalable cloud infrastructure and DevOps services.', content: '<p>We design and implement cloud infrastructure that scales with your business needs.</p>', icon: 'icon-cloud', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Infrastructure', slug: 'infrastructure' }], features: ['AWS / GCP / Azure', 'CI/CD Pipelines', 'Auto Scaling', 'Monitoring'], link: '#', layout: 'default' },
  { id: 's6', slug: 'cybersecurity', title: 'Cybersecurity', excerpt: 'Comprehensive security solutions to protect your digital assets.', content: '<p>We provide end-to-end security solutions including audits, penetration testing, and ongoing monitoring.</p>', icon: 'icon-lock', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Security', slug: 'security' }], features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'], link: '#', layout: 'default' },
];

export const demoPricing: PricingPlan[] = [
  { id: 'pr1', title: 'Basic', subtitle: 'For small businesses', price: '29', period: 'month', currency: '$', features: [{ text: '5 Pages Website', included: true }, { text: 'Responsive Design', included: true }, { text: 'SEO Optimization', included: true }, { text: 'Contact Form', included: true }, { text: 'E-Commerce', included: false }, { text: 'Custom Development', included: false }], buttonText: 'Get Started', buttonUrl: '#', layout: 'default' },
  { id: 'pr2', title: 'Professional', subtitle: 'Most popular choice', price: '79', period: 'month', currency: '$', features: [{ text: '15 Pages Website', included: true }, { text: 'Responsive Design', included: true }, { text: 'SEO Optimization', included: true }, { text: 'Contact Form', included: true }, { text: 'E-Commerce', included: true }, { text: 'Custom Development', included: false }], buttonText: 'Get Started', buttonUrl: '#', highlighted: true, label: 'Popular', layout: 'default' },
  { id: 'pr3', title: 'Enterprise', subtitle: 'For large organizations', price: '199', period: 'month', currency: '$', features: [{ text: 'Unlimited Pages', included: true }, { text: 'Responsive Design', included: true }, { text: 'SEO Optimization', included: true }, { text: 'Contact Form', included: true }, { text: 'E-Commerce', included: true }, { text: 'Custom Development', included: true }], buttonText: 'Contact Us', buttonUrl: '#', layout: 'default' },
];

export const demoSkills: Skill[] = [
  { title: 'Projects Completed', value: 350, icon: 'icon-briefcase', layout: 'counter' },
  { title: 'Happy Clients', value: 120, icon: 'icon-users', layout: 'counter' },
  { title: 'Awards Won', value: 28, icon: 'icon-trophy', layout: 'counter' },
  { title: 'Team Members', value: 45, icon: 'icon-user', layout: 'counter' },
  { title: 'Web Development', value: 95, max: 100, layout: 'simple' },
  { title: 'UI/UX Design', value: 90, max: 100, layout: 'simple' },
  { title: 'Mobile Apps', value: 85, max: 100, layout: 'simple' },
  { title: 'Digital Marketing', value: 80, max: 100, layout: 'simple' },
];

export const demoProducts: Product[] = [
  { id: 'prod1', slug: 'business-theme', title: 'Business Theme', price: '59.00', salePrice: '49.00', description: '<p>A professional business theme with modern design and powerful features.</p>', shortDescription: 'Professional business theme', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Themes', slug: 'themes' }], tags: [{ name: 'Business', slug: 'business' }], rating: 5, reviewCount: 12, sku: 'THEME-001', inStock: true, onSale: true, layout: 'default' },
  { id: 'prod2', slug: 'portfolio-theme', title: 'Portfolio Theme', price: '45.00', description: '<p>Showcase your work beautifully with this portfolio theme.</p>', shortDescription: 'Creative portfolio theme', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Themes', slug: 'themes' }], tags: [{ name: 'Portfolio', slug: 'portfolio' }], rating: 4, reviewCount: 8, sku: 'THEME-002', inStock: true, layout: 'default' },
  { id: 'prod3', slug: 'e-commerce-theme', title: 'E-Commerce Theme', price: '79.00', description: '<p>Full-featured e-commerce theme with WooCommerce integration.</p>', shortDescription: 'E-commerce ready theme', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Themes', slug: 'themes' }], tags: [{ name: 'E-Commerce', slug: 'e-commerce' }], rating: 5, reviewCount: 15, sku: 'THEME-003', inStock: true, isNew: true, layout: 'default' },
  { id: 'prod4', slug: 'starter-plugin', title: 'Starter Plugin Pack', price: '29.00', description: '<p>Essential plugins bundle to kickstart your website.</p>', shortDescription: 'Essential plugins bundle', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Plugins', slug: 'plugins' }], tags: [{ name: 'Bundle', slug: 'bundle' }], rating: 4, reviewCount: 6, sku: 'PLG-001', inStock: true, layout: 'default' },
  { id: 'prod5', slug: 'seo-toolkit', title: 'SEO Toolkit Pro', price: '39.00', salePrice: '29.00', description: '<p>Advanced SEO tools to boost your search engine rankings.</p>', shortDescription: 'Advanced SEO toolkit', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Plugins', slug: 'plugins' }], tags: [{ name: 'SEO', slug: 'seo' }], rating: 5, reviewCount: 20, sku: 'PLG-002', inStock: true, onSale: true, layout: 'default' },
  { id: 'prod6', slug: 'security-suite', title: 'Security Suite', price: '49.00', description: '<p>Comprehensive security solution for your website.</p>', shortDescription: 'Website security suite', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Plugins', slug: 'plugins' }], tags: [{ name: 'Security', slug: 'security' }], rating: 4, reviewCount: 10, sku: 'PLG-003', inStock: false, layout: 'default' },
];

export const demoEvents: EventItem[] = [
  { id: 'ev1', slug: 'digital-marketing-summit', title: 'Digital Marketing Summit 2024', description: 'Join industry leaders for a day of insights and networking.', content: '<p>The annual Digital Marketing Summit brings together the brightest minds in digital marketing.</p>', date: '2024-06-15', endDate: '2024-06-16', time: '09:00 - 18:00', location: 'Convention Center, City', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Conference', slug: 'conference' }], organizer: 'DGC Events', price: '$199', url: '#' },
  { id: 'ev2', slug: 'web-dev-workshop', title: 'Web Development Workshop', description: 'Hands-on workshop covering modern web development techniques.', content: '<p>Learn the latest web development frameworks and best practices in this intensive workshop.</p>', date: '2024-07-20', time: '10:00 - 16:00', location: 'DGC Office, City', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Workshop', slug: 'workshop' }], organizer: 'DGC Academy', price: 'Free', url: '#' },
  { id: 'ev3', slug: 'design-thinking-meetup', title: 'Design Thinking Meetup', description: 'Monthly meetup for designers and creative professionals.', content: '<p>Connect with fellow designers and share your latest projects and ideas.</p>', date: '2024-08-05', time: '18:00 - 21:00', location: 'Creative Hub, City', featuredImage: '/images/no-image.jpg', categories: [{ name: 'Meetup', slug: 'meetup' }], organizer: 'DGC Community', price: 'Free', url: '#' },
];

export const demoCategories: { name: string; slug: string; count: number; image?: string }[] = [
  { name: 'Marketing', slug: 'marketing', count: 12, image: '/images/no-image.jpg' },
  { name: 'Design', slug: 'design', count: 8, image: '/images/no-image.jpg' },
  { name: 'Development', slug: 'development', count: 15, image: '/images/no-image.jpg' },
  { name: 'Business', slug: 'business', count: 6, image: '/images/no-image.jpg' },
  { name: 'Technology', slug: 'technology', count: 10, image: '/images/no-image.jpg' },
  { name: 'Lifestyle', slug: 'lifestyle', count: 4, image: '/images/no-image.jpg' },
];

export const demoComments = [
  {
    id: 'c1',
    author: { name: 'Alice Cooper', avatar: '/images/no-photo.png', isPostAuthor: false },
    date: '2024-03-16',
    time: '14:30',
    content: 'Great article! Very informative and well-written.',
    approved: true,
    children: [
      {
        id: 'c2',
        author: { name: 'John Doe', avatar: '/images/no-photo.png', isPostAuthor: true },
        date: '2024-03-16',
        time: '15:45',
        content: 'Thank you, Alice! Glad you found it helpful.',
        approved: true,
        parentId: 'c1',
      },
    ],
  },
  {
    id: 'c3',
    author: { name: 'Bob Martin', avatar: '/images/no-photo.png', isPostAuthor: false },
    date: '2024-03-17',
    time: '09:15',
    content: 'Could you write more about SEO optimization techniques? That would be really useful.',
    approved: true,
  },
];
