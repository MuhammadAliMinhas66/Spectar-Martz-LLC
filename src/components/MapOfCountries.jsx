import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import CountUp from "react-countup";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const proxyCountries = [
  "USA",
  "GERMANY",
  "UK",
  "RUSSIA",
  "CHINA",
  "CANADA",
  "NETHERLANDS",
  "FRANCE",
  "UKRAINE",
  "AUSTRALIA",
  "TURKEY",
  "POLAND",
  "INDIA",
  "SPAIN",
  "JAPAN",
];

const vpsCountries = ["USA", "UK"];

const countryCoordinates = {
  USA: { coordinates: [-95.7129, 37.0902], offset: [8, 8] },
  UK: { coordinates: [-3.436, 55.3781], offset: [8, -12] },
  GERMANY: { coordinates: [10.4515, 51.1657], offset: [8, 8] },
  RUSSIA: { coordinates: [105.3188, 61.524], offset: [-8, 8] },
  CHINA: { coordinates: [104.1954, 35.8617], offset: [-8, 8] },
  CANADA: { coordinates: [-106.3468, 56.1304], offset: [-8, 8] },
  FRANCE: { coordinates: [2.2137, 46.2276], offset: [8, 8] },
  UKRAINE: { coordinates: [31.1656, 48.3794], offset: [8, 8] },
  AUSTRALIA: { coordinates: [133.7751, -25.2744], offset: [-8, -12] },
  TURKEY: { coordinates: [35.2433, 38.9637], offset: [8, 8] },
  INDIA: { coordinates: [78.9629, 20.5937], offset: [8, -12] },
  SPAIN: { coordinates: [-3.7492, 40.4637], offset: [-8, 8] },
  JAPAN: { coordinates: [138.2529, 36.2048], offset: [-8, 8] },
};

const MapOfCountries = () => {
  return (
    <section className="relative bg-[#0f172a] py-12 md:py-16 px-4 overflow-hidden">
      {/* Top Border Animation */}
      <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d6efd] via-[#8a2be2] to-[#6610f2] animate-[borderFlow_5s_linear_infinite] bg-[length:200%_auto]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d6efd] via-[#8a2be2] to-[#6610f2] animate-[borderFlow_7s_linear_infinite] bg-[length:200%_auto] opacity-50 mix-blend-screen blur-[2px]"></div>
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d6efd] via-[#8a2be2] to-[#6610f2] animate-[borderFlow_5s_linear_infinite] bg-[length:200%_auto]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d6efd] via-[#8a2be2] to-[#6610f2] animate-[borderFlow_7s_linear_infinite] bg-[length:200%_auto] opacity-50 mix-blend-screen blur-[2px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-[Orbitron] mb-8 md:mb-12">
          <span className="bg-gradient-to-r from-[#0d6efd] via-[#8a2be2] to-[#6610f2] text-transparent bg-clip-text">
            Global Coverage
          </span>
        </h2>

        <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 140,
              center: [0, 10],
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isProxy = proxyCountries.includes(geo.properties.name);
                  const isVPS = vpsCountries.includes(geo.properties.name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isVPS ? "#6610f2" : isProxy ? "#0d6efd" : "#1e293b"}
                      stroke="#475569"
                      strokeWidth={0.5}
                      className="transition-all duration-300"
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {Object.entries(countryCoordinates).map(
              ([country, { coordinates, offset }]) => {
                const [xOffset, yOffset] = offset;
                return (
                  <Marker key={country} coordinates={coordinates}>
                    <g className="animate-pulse">
                      <circle r={3} fill="#ffffff" />
                      <line
                        x1={0}
                        y1={0}
                        x2={xOffset}
                        y2={yOffset}
                        stroke="#ffffff"
                        strokeWidth="1"
                        strokeDasharray="4 2"
                      />
                      <text
                        x={xOffset + (xOffset > 0 ? 4 : -4)}
                        y={yOffset}
                        fontSize={10}
                        fill="#ffffff"
                        fontWeight="bold"
                        textAnchor={xOffset > 0 ? "start" : "end"}
                        className="font-[Orbitron]"
                      >
                        {country}
                      </text>
                    </g>
                  </Marker>
                );
              }
            )}
          </ComposableMap>
        </div>

        {/* Modified counters section */}
        <div className="flex flex-wrap justify-center gap-4 -mt-12 sm:-mt-4 md:mt-2 pb-4 md:gap-8">
          <div className="text-center px-4 py-2 bg-slate-800/50 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-[#0d6efd] font-[Orbitron]">
              <CountUp end={proxyCountries.length} duration={2} />
            </div>
            <div className="text-sm text-slate-300">Proxy Locations</div>
          </div>
          <div className="text-center px-4 py-2 bg-slate-800/50 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-[#6610f2] font-[Orbitron]">
              <CountUp end={vpsCountries.length} duration={2} />
            </div>
            <div className="text-sm text-slate-300">VPS Locations</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes borderFlow {
          from {
            background-position: 100% 0;
          }
          to {
            background-position: -100% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default MapOfCountries;
