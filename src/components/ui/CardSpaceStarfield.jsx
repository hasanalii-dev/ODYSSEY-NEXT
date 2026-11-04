import React from 'react';
import './CardSpaceStarfield.css';

export const CardSpaceStarfield = ({ variant = 'default', mode = 'card' }) => {
  const isSection = mode === 'section' || variant === 'hero' || variant === 'footer' || variant === 'cosmic';

  if (isSection) {
    const isHero = variant === 'hero';
    const isOutro = variant === 'cosmic';

    // Sparse, Refined Celestial Starfield for About Hero (Reduced Count: ~27 subtle stars)
    if (isHero) {
      return (
        <div className={`card-space-starfield section-starfield variant-${variant}`} aria-hidden="true">
          <div className="space-nebula-glow" />
          <svg
            className="space-star-svg"
            viewBox="0 0 1920 600"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Group A: Pure White Micro Dots (Twinkle: 1.3s) */}
            <g className="star-twinkle-group-a" fill="#ffffff">
              <circle cx="120" cy="55" r="0.75" />
              <circle cx="430" cy="115" r="0.7" />
              <circle cx="810" cy="60" r="0.8" />
              <circle cx="1180" cy="125" r="0.75" />
              <circle cx="1520" cy="50" r="0.7" />
              <circle cx="1810" cy="105" r="0.75" />
            </g>

            {/* Group B: Ice Cyan Accent Dots (Twinkle: 1.7s) */}
            <g className="star-twinkle-group-b" fill="#38d6f8">
              <circle cx="260" cy="85" r="0.85" />
              <circle cx="640" cy="45" r="0.8" />
              <circle cx="1020" cy="110" r="0.85" />
              <circle cx="1370" cy="70" r="0.8" />
              <circle cx="1690" cy="130" r="0.85" />
            </g>

            {/* Group C: Warm Peach Star Dust (Twinkle: 2.1s) */}
            <g className="star-twinkle-group-c" fill="#f5d6ba">
              <circle cx="190" cy="135" r="0.8" />
              <circle cx="530" cy="70" r="0.75" />
              <circle cx="910" cy="125" r="0.8" />
              <circle cx="1290" cy="55" r="0.75" />
              <circle cx="1610" cy="95" r="0.8" />
            </g>

            {/* Group D: Sparkling Accent Dots (Twinkle: 1.5s) */}
            <g className="star-twinkle-group-d" fill="#ffffff">
              <circle cx="340" cy="50" r="0.85" />
              <circle cx="730" cy="120" r="0.85" />
              <circle cx="1110" cy="40" r="0.85" />
              <circle cx="1460" cy="115" r="0.85" />
              <circle cx="1850" cy="45" r="0.85" />
            </g>

            {/* Group E: Micro Pinprick Dust (Twinkle: 2.5s) */}
            <g className="star-twinkle-group-e" fill="#e2e8f0">
              <circle cx="70" cy="110" r="0.6" />
              <circle cx="480" cy="40" r="0.65" />
              <circle cx="870" cy="85" r="0.6" />
              <circle cx="1240" cy="130" r="0.65" />
              <circle cx="1570" cy="45" r="0.6" />
              <circle cx="1760" cy="80" r="0.65" />
            </g>
          </svg>
        </div>
      );
    }

    // Specialized Subtle Starfield for Welcome Outro Card (Strictly Upper Dark Space, Zero Stars Near Wave)
    if (isOutro) {
      return (
        <div className={`card-space-starfield section-starfield variant-${variant}`} aria-hidden="true">
          <div className="space-nebula-glow" />
          <svg
            className="space-star-svg"
            viewBox="0 0 1920 600"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Pure White Micro Dots (Twinkle tempo: 1.3s) - strictly top 5-15% */}
            <g className="star-twinkle-group-a" fill="#ffffff">
              <circle cx="110" cy="40" r="0.65" />
              <circle cx="380" cy="75" r="0.7" />
              <circle cx="720" cy="45" r="0.65" />
              <circle cx="1080" cy="80" r="0.7" />
              <circle cx="1430" cy="35" r="0.65" />
              <circle cx="1780" cy="65" r="0.7" />
            </g>

            {/* Ice Cyan Micro Accent Dots (Twinkle tempo: 1.7s) */}
            <g className="star-twinkle-group-b" fill="#38d6f8">
              <circle cx="230" cy="60" r="0.75" />
              <circle cx="590" cy="35" r="0.7" />
              <circle cx="940" cy="70" r="0.75" />
              <circle cx="1290" cy="45" r="0.7" />
              <circle cx="1640" cy="80" r="0.75" />
            </g>

            {/* Warm Peach Micro Dust (Twinkle tempo: 2.1s) */}
            <g className="star-twinkle-group-c" fill="#f5d6ba">
              <circle cx="170" cy="80" r="0.65" />
              <circle cx="490" cy="50" r="0.7" />
              <circle cx="850" cy="75" r="0.65" />
              <circle cx="1200" cy="40" r="0.7" />
              <circle cx="1550" cy="70" r="0.65" />
            </g>

            {/* Subtle Sparkling White Accent Dots (Twinkle tempo: 1.5s) */}
            <g className="star-twinkle-group-d" fill="#ffffff">
              <circle cx="310" cy="35" r="0.8" />
              <circle cx="790" cy="85" r="0.8" />
              <circle cx="1370" cy="55" r="0.8" />
              <circle cx="1860" cy="40" r="0.8" />
            </g>

            {/* Micro Pinprick Dust (Twinkle tempo: 2.5s) */}
            <g className="star-twinkle-group-e" fill="#e2e8f0">
              <circle cx="60" cy="70" r="0.55" />
              <circle cx="660" cy="60" r="0.55" />
              <circle cx="1020" cy="35" r="0.55" />
              <circle cx="1500" cy="85" r="0.55" />
              <circle cx="1720" cy="45" r="0.55" />
            </g>
          </svg>
        </div>
      );
    }

    // Standard Section Mode (e.g. Footer: Micro Star Dots Strictly in Dark Upper Space)
    return (
      <div className={`card-space-starfield section-starfield variant-${variant}`} aria-hidden="true">
        {/* Subtle Cosmic Ambient Dust */}
        <div className="space-nebula-glow" />

        <svg
          className="space-star-svg"
          viewBox="0 0 1920 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Group A: Pure White Micro Dots (Twinkle tempo: 1.3s) */}
          <g className="star-twinkle-group-a" fill="#ffffff">
            <circle cx="85" cy="45" r="0.7" />
            <circle cx="210" cy="95" r="0.65" />
            <circle cx="360" cy="55" r="0.7" />
            <circle cx="510" cy="100" r="0.65" />
            <circle cx="660" cy="50" r="0.7" />
            <circle cx="810" cy="90" r="0.7" />
            <circle cx="960" cy="40" r="0.65" />
            <circle cx="1110" cy="85" r="0.7" />
            <circle cx="1260" cy="60" r="0.65" />
            <circle cx="1410" cy="100" r="0.7" />
            <circle cx="1560" cy="50" r="0.65" />
            <circle cx="1710" cy="90" r="0.7" />
            <circle cx="1860" cy="45" r="0.65" />
          </g>

          {/* Group B: Ice Cyan Accent Dots (Twinkle tempo: 1.7s) */}
          <g className="star-twinkle-group-b" fill="#38d6f8">
            <circle cx="140" cy="75" r="0.75" />
            <circle cx="290" cy="35" r="0.7" />
            <circle cx="440" cy="85" r="0.75" />
            <circle cx="590" cy="65" r="0.7" />
            <circle cx="740" cy="45" r="0.75" />
            <circle cx="890" cy="100" r="0.7" />
            <circle cx="1040" cy="65" r="0.75" />
            <circle cx="1190" cy="45" r="0.7" />
            <circle cx="1340" cy="95" r="0.75" />
            <circle cx="1490" cy="65" r="0.7" />
            <circle cx="1640" cy="40" r="0.75" />
            <circle cx="1790" cy="95" r="0.7" />
          </g>

          {/* Group C: Warm Peach Star Dust (Twinkle tempo: 2.1s) */}
          <g className="star-twinkle-group-c" fill="#f5d6ba">
            <circle cx="60" cy="100" r="0.7" />
            <circle cx="180" cy="50" r="0.65" />
            <circle cx="340" cy="95" r="0.7" />
            <circle cx="520" cy="45" r="0.65" />
            <circle cx="670" cy="90" r="0.7" />
            <circle cx="840" cy="55" r="0.65" />
            <circle cx="980" cy="105" r="0.7" />
            <circle cx="1150" cy="50" r="0.65" />
            <circle cx="1290" cy="85" r="0.7" />
            <circle cx="1450" cy="45" r="0.65" />
            <circle cx="1600" cy="95" r="0.7" />
            <circle cx="1750" cy="60" r="0.65" />
          </g>

          {/* Group D: Sparkling Accent Dots (Twinkle tempo: 1.5s) */}
          <g className="star-twinkle-group-d" fill="#ffffff">
            <circle cx="115" cy="50" r="0.8" />
            <circle cx="260" cy="80" r="0.8" />
            <circle cx="410" cy="40" r="0.8" />
            <circle cx="610" cy="95" r="0.8" />
            <circle cx="760" cy="70" r="0.8" />
            <circle cx="920" cy="30" r="0.8" />
            <circle cx="1080" cy="95" r="0.8" />
            <circle cx="1230" cy="35" r="0.8" />
            <circle cx="1380" cy="85" r="0.8" />
            <circle cx="1530" cy="35" r="0.8" />
            <circle cx="1680" cy="80" r="0.8" />
            <circle cx="1830" cy="35" r="0.8" />
          </g>

          {/* Group E: Micro Pinprick Dust (Twinkle tempo: 2.5s) */}
          <g className="star-twinkle-group-e" fill="#e2e8f0">
            <circle cx="40" cy="70" r="0.55" />
            <circle cx="170" cy="110" r="0.6" />
            <circle cx="310" cy="65" r="0.55" />
            <circle cx="460" cy="30" r="0.6" />
            <circle cx="590" cy="95" r="0.55" />
            <circle cx="740" cy="55" r="0.6" />
            <circle cx="870" cy="85" r="0.55" />
            <circle cx="1010" cy="40" r="0.6" />
            <circle cx="1160" cy="80" r="0.55" />
            <circle cx="1300" cy="40" r="0.6" />
            <circle cx="1440" cy="90" r="0.55" />
            <circle cx="1590" cy="55" r="0.6" />
            <circle cx="1730" cy="75" r="0.55" />
            <circle cx="1880" cy="45" r="0.6" />
          </g>
        </svg>
      </div>
    );
  }

  // Standard Card Mode: Uniform 1:1 Aspect Ratio (Zero Vertical Stretching)
  return (
    <div className={`card-space-starfield variant-${variant}`} aria-hidden="true">
      {/* Deep Space Cosmic Ambient Dust Glow */}
      <div className="space-nebula-glow" />

      {/* SVG Starfield: Uniform Aspect Ratio, Pin-Sharp Circular Dots */}
      <svg
        className="space-star-svg"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Group A: Pure White Dots (Twinkle tempo: 1.3s) */}
        <g className="star-twinkle-group-a" fill="#ffffff">
          <circle cx="75" cy="65" r="0.75" />
          <circle cx="180" cy="35" r="0.8" />
          <circle cx="280" cy="90" r="0.75" />
          <circle cx="400" cy="75" r="0.8" />
          <circle cx="510" cy="45" r="0.75" />
          <circle cx="150" cy="190" r="0.8" />
          <circle cx="340" cy="220" r="0.8" />
          <circle cx="470" cy="170" r="0.75" />
          <circle cx="85" cy="310" r="0.8" />
          <circle cx="240" cy="380" r="0.75" />
          <circle cx="420" cy="330" r="0.8" />
          <circle cx="520" cy="410" r="0.75" />
          <circle cx="160" cy="480" r="0.8" />
          <circle cx="350" cy="520" r="0.75" />
          <circle cx="490" cy="550" r="0.8" />
          <circle cx="100" cy="560" r="0.75" />
        </g>

        {/* Group B: Cyan Accent Dots (Twinkle tempo: 1.7s) */}
        <g className="star-twinkle-group-b" fill="#38d6f8">
          <circle cx="120" cy="55" r="0.8" />
          <circle cx="240" cy="85" r="0.8" />
          <circle cx="360" cy="50" r="0.8" />
          <circle cx="530" cy="85" r="0.8" />
          <circle cx="100" cy="165" r="0.8" />
          <circle cx="300" cy="170" r="0.8" />
          <circle cx="440" cy="180" r="0.8" />
          <circle cx="540" cy="260" r="0.8" />
          <circle cx="140" cy="370" r="0.8" />
          <circle cx="280" cy="330" r="0.8" />
          <circle cx="480" cy="370" r="0.8" />
          <circle cx="220" cy="510" r="0.8" />
          <circle cx="410" cy="460" r="0.8" />
          <circle cx="530" cy="550" r="0.8" />
        </g>

        {/* Group C: Warm Peach Dots (Twinkle tempo: 2.1s) */}
        <g className="star-twinkle-group-c" fill="#f5d6ba">
          <circle cx="50" cy="130" r="0.8" />
          <circle cx="200" cy="105" r="0.75" />
          <circle cx="330" cy="25" r="0.8" />
          <circle cx="460" cy="105" r="0.75" />
          <circle cx="580" cy="175" r="0.8" />
          <circle cx="260" cy="215" r="0.75" />
          <circle cx="380" cy="265" r="0.8" />
          <circle cx="60" cy="410" r="0.8" />
          <circle cx="180" cy="310" r="0.75" />
          <circle cx="360" cy="400" r="0.8" />
          <circle cx="470" cy="440" r="0.75" />
          <circle cx="270" cy="560" r="0.8" />
          <circle cx="70" cy="530" r="0.75" />
        </g>

        {/* Group D: Sparkling Accent Dots (Twinkle tempo: 1.5s) */}
        <g className="star-twinkle-group-d" fill="#ffffff">
          <circle cx="140" cy="90" r="0.85" />
          <circle cx="410" cy="30" r="0.85" />
          <circle cx="540" cy="60" r="0.85" />
          <circle cx="200" cy="250" r="0.85" />
          <circle cx="500" cy="235" r="0.85" />
          <circle cx="115" cy="430" r="0.85" />
          <circle cx="320" cy="370" r="0.85" />
          <circle cx="440" cy="490" r="0.85" />
        </g>

        {/* Group E: Micro Star Dust (Twinkle tempo: 2.5s) */}
        <g className="star-twinkle-group-e" fill="#e2e8f0">
          <circle cx="35" cy="35" r="0.6" />
          <circle cx="160" cy="140" r="0.65" />
          <circle cx="270" cy="65" r="0.6" />
          <circle cx="380" cy="130" r="0.65" />
          <circle cx="490" cy="15" r="0.6" />
          <circle cx="70" cy="240" r="0.65" />
          <circle cx="220" cy="170" r="0.6" />
          <circle cx="420" cy="210" r="0.65" />
          <circle cx="560" cy="135" r="0.6" />
          <circle cx="130" cy="340" r="0.65" />
          <circle cx="300" cy="290" r="0.6" />
          <circle cx="480" cy="305" r="0.65" />
          <circle cx="40" cy="495" r="0.6" />
          <circle cx="190" cy="425" r="0.65" />
          <circle cx="380" cy="450" r="0.6" />
          <circle cx="520" cy="495" r="0.65" />
        </g>
      </svg>
    </div>
  );
};
