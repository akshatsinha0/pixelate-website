/* eslint-disable @next/next/no-img-element */
import './globals.css';
import { Inter } from 'next/font/google';
import ClientTransitionWrapper from '@/components/ClientTransitionWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pixelate Club',
  description: 'A hub for creative events and community.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`rozha-one-font ${inter.className}`} style={{ background: '#120d18' }}>
      <body className="flex flex-col min-h-screen">
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
          {}
          <img src="/assets/patches/patchImage1.png" alt="Patch 1" style={{ position: 'absolute', top: 0, left: 0, width: '320px', zIndex: 30, pointerEvents: 'none', margin: 0, padding: 0 }} />
          <img src="/assets/patches/patchImage2.png" alt="Patch 2" style={{ position: 'absolute', top: 0, right: 0, width: '320px', zIndex: 30, pointerEvents: 'none', margin: 0, padding: 0 }} />
          <main className="flex-1">
            <ClientTransitionWrapper>{children}</ClientTransitionWrapper>
          </main>
          <footer className="text-center py-6 bg-accent/90 text-dark/70">
            © {new Date().getFullYear()} Pixelate Club. All rights reserved.
          </footer>
          {}
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: '480px', pointerEvents: 'none', zIndex: 10 }}>
            <svg viewBox="0 0 1440 480" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" style={{ display: 'block' }}>
             
              <path d="M0,300 Q300,420 720,300 T1440,300 L1440,480 L0,480 Z" fill="#191919" fillOpacity="0.98" />
            
              <path d="M0,340 Q400,460 900,320 T1440,360 L1440,480 L0,480 Z" fill="#56299D" fillOpacity="0.85" />
           
              <path d="M0,380 Q200,300 700,440 T1440,350 L1440,480 L0,480 Z" fill="#7E61AC" fillOpacity="0.65" />
           
              <path d="M0,420 Q500,460 1000,400 T1440,420 L1440,480 L0,480 Z" fill="#A084CA" fillOpacity="0.45" />
      
              <path d="M0,430 Q300,470 800,430 T1440,480 L1440,480 L0,480 Z" fill="#2D1746" fillOpacity="0.55" />
          
              <path d="M0,410 Q600,470 1200,420 T1440,480 L1440,480 L0,480 Z" fill="#6C4AB6" fillOpacity="0.35" />
   
              <path d="M0,450 Q400,480 1000,470 T1440,480 L1440,480 L0,480 Z" fill="#E0C8FF" fillOpacity="0.25" />
     
              <path d="M0,470 Q700,490 1440,470 L1440,480 L0,480 Z" fill="#F6B8FF" fillOpacity="0.18" />
            
              <path d="M0,475 Q900,500 1440,475 L1440,480 L0,480 Z" fill="#FFF" fillOpacity="0.10" />
            </svg>
          </div>
        </div>
      </body>
    </html>
  );
}