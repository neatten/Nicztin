import { Youtube, Instagram, Facebook, Github as GitHub, Twitter as X, BookText as TikTok, Pointer as Pinterest, Heart } from 'lucide-react';

const socialLinks = [
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@nicztin1738' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/newatten' },
  { name: 'Pinterest', icon: Pinterest, url: 'https://www.pinterest.com/newatten' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/newatten' },
  { name: 'TikTok', icon: TikTok, url: 'https://www.tiktok.com/@newatten' },
  { name: 'GitHub', icon: GitHub, url: 'https://github.com/neatten' },
  { name: 'X', icon: X, url: 'https://x.com/newatten' },
];

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Nicztin
            </span>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-sm text-center space-y-4">
            <p>Released under the MIT License</p>
            <p>Copyright © 2025–present Nicztin & Contributors</p>
            <p className="flex items-center justify-center gap-2">
              Website created using Bolt by StackBlitz • Hosted with <Heart className="w-4 h-4 text-red-500" /> on Netlify
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Special thanks to all the open-source tools and kind creators who make knowledge free and creativity limitless.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
