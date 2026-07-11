export interface SiteConfig {
  name: string;
  slogan: string;
  url: string;
  logo: {
    default: string;
    retina?: string;
    footer?: string;
    footerRetina?: string;
    mobile?: string;
    mobileRetina?: string;
  };
  copyright: string;
  socials: SocialLink[];
  navigation: NavItem[];
  footerWidgets: FooterWidget[];
  colorScheme: 'light' | 'dark';
  headerStyle: 'default' | 'fullheight';
  bodyStyle: 'wide' | 'boxed' | 'fullscreen';
  sidebarPosition: 'left' | 'right' | 'none';
  blogStyle: 'excerpt' | 'classic' | 'band' | 'portfolio' | 'masonry';
  singleStyle: 'style-1' | 'style-2' | 'style-3' | 'style-4' | 'style-5' | 'style-6' | 'style-7';
  postsPerPage: number;
  excerptLength: number;
  showSidebar: boolean;
  showSearch: boolean;
  showCart: boolean;
  socialsInFooter: boolean;
  logoInFooter: boolean;
  footerColumns: number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FooterWidget {
  title: string;
  content: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: PostAuthor;
  categories: Category[];
  tags: Tag[];
  featuredImage?: string;
  format: 'standard' | 'video' | 'audio' | 'gallery' | 'quote' | 'link';
  sticky: boolean;
  commentsCount: number;
}

export interface PostAuthor {
  name: string;
  avatar?: string;
  bio?: string;
  url?: string;
  postsCount?: number;
}

export interface Category {
  name: string;
  slug: string;
  count?: number;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
    isPostAuthor?: boolean;
    url?: string;
  };
  date: string;
  time: string;
  content: string;
  approved: boolean;
  parentId?: string;
  children?: Comment[];
}

export interface FrontPageSection {
  id: string;
  type: 'title' | 'about' | 'features' | 'team' | 'testimonials' | 'blog' | 'contacts' | 'subscribe' | 'googlemap' | 'woocommerce';
  enabled: boolean;
  scheme?: string;
  paddings?: 'none' | 'small' | 'medium' | 'large';
  fullheight?: boolean;
  bgImage?: string;
  bgColor?: string;
  bgMask?: number;
  caption?: string;
  description?: string;
  content?: string;
  buttons?: { label: string; url: string; style?: string }[];
}

export interface TeamMember {
  name: string;
  position: string;
  avatar: string;
  bio?: string;
  socials?: SocialLink[];
}

export interface Testimonial {
  author: string;
  position?: string;
  avatar?: string;
  content: string;
  rating?: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  url?: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  categories: Category[];
  tags: Tag[];
  featuredImage?: string;
  gallery?: string[];
  client?: string;
  projectUrl?: string;
  layout: 'default' | 'band' | 'eclipse' | 'fill' | 'simple';
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  icon: string;
  featuredImage?: string;
  categories: Category[];
  price?: string;
  features?: string[];
  link?: string;
  layout: 'default' | 'classic' | 'modern' | 'creative' | 'hover' | 'minimal' | 'accent' | 'extra' | 'panel' | 'callouts' | 'light' | 'icons' | 'price';
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  period?: string;
  currency?: string;
  features: { text: string; included: boolean }[];
  buttonText: string;
  buttonUrl: string;
  highlighted?: boolean;
  label?: string;
  layout: 'default' | 'focus' | 'light' | 'metro' | 'plain' | 'simple' | 'simple_shadow';
}

export interface Skill {
  title: string;
  value: number;
  max?: number;
  icon?: string;
  color?: string;
  layout: 'counter' | 'alter' | 'extra' | 'modern' | 'simple';
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  price: string;
  salePrice?: string;
  description: string;
  shortDescription?: string;
  featuredImage?: string;
  gallery?: string[];
  categories: Category[];
  tags: Tag[];
  rating?: number;
  reviewCount?: number;
  sku?: string;
  inStock: boolean;
  onSale?: boolean;
  isNew?: boolean;
  layout: 'default' | 'creative' | 'hovered' | 'info' | 'plain' | 'pure' | 'simple';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ColorScheme {
  name: string;
  slug: string;
  colors: {
    bg_color: string;
    bg_hover: string;
    bd_color: string;
    bd_hover: string;
    text: string;
    text_dark: string;
    text_light: string;
    text_link: string;
    text_hover: string;
    text_link2: string;
    text_hover2: string;
    text_link3: string;
    text_hover3: string;
    alter_bg_color: string;
    alter_bg_hover: string;
    alter_bd_color: string;
    alter_bd_hover: string;
    alter_text: string;
    alter_dark: string;
    alter_light: string;
    alter_link: string;
    alter_hover: string;
    extra_bg_color: string;
    extra_bg_hover: string;
    extra_bd_color: string;
    extra_bd_hover: string;
    extra_text: string;
    extra_dark: string;
    extra_light: string;
    extra_link: string;
    extra_hover: string;
    inverse_text: string;
    inverse_dark: string;
    inverse_light: string;
    inverse_link: string;
    inverse_hover: string;
    input_bg_color: string;
    input_bg_hover: string;
    input_bd_color: string;
    input_bd_hover: string;
    input_text: string;
    input_dark: string;
    input_light: string;
  };
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  endDate?: string;
  time?: string;
  location?: string;
  featuredImage?: string;
  categories: Category[];
  organizer?: string;
  price?: string;
  url?: string;
}

export interface BloggerItem {
  post: Post;
  layout: 'default' | 'list' | 'portestate' | 'portmodern';
}

export interface IconItem {
  icon: string;
  title: string;
  description?: string;
  link?: string;
  layout: 'default' | 'common' | 'creative' | 'divider3' | 'number';
  number?: number;
}

export interface RelatedPostsConfig {
  layout: 'classic' | 'list' | 'modern' | 'short' | 'wide';
  posts: Post[];
  columns?: number;
}

export interface SinglePostStyle {
  style: 'style-1' | 'style-2' | 'style-3' | 'style-4' | 'style-5' | 'style-7';
  post: Post;
}
