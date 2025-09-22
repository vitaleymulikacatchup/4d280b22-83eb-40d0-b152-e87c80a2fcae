"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          buttonText="Join Meme"
          onButtonClick={() => { /* handle join */ }}
          className="sticky top-0 z-10"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Join the Meme Revolution!"
          subtitle="Get your share of the fun with MEME coin."
          primaryButtonText="Get MEME"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => { /* primary action */ }}
          onSecondaryButtonClick={() => { /* secondary action */ }}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="What is MemeCoin?"
          descriptions={[
            "MemeCoin is a fun and engaging cryptocurrency inspired by internet culture.",
            "Join a community that loves memes and embraces the future of finance!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy MemeCoin"
          steps={[
            { title: "Step 1", description: "Create a crypto wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Buy Ethereum", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Swap ETH for MemeCoin", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Understand the supply, liquidity, and distribution of MEME coin."
          kpiItems={[
            { value: "1 Trillion", description: "Total Supply", icon: null },
            { value: "800 Billion", description: "Circulating Supply", icon: null },
            { value: "200 Billion", description: "Reserved for Development", icon: null }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          items={[
            { title: "What is MemeCoin?", content: "MemeCoin is a playful cryptocurrency inspired by memes and internet culture." },
            { title: "How do I buy MemeCoin?", content: "You can buy MemeCoin on various exchanges with Ethereum." },
            { title: "Is it safe to invest in MemeCoin?", content: "Like any investment, it's important to do your research." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin Logo"
          logoText="MemeCoin"
          className="text-center p-6"
        />
      </div>
    </SiteThemeProvider>
  );
}
