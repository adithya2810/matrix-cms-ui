const withPlugins = require("next-compose-plugins");

const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  tr: "tr",
  en: "en",
};

const config = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  async redirects() {
    return [
      {
        source: '/blog/detail/Bijnis',
        destination: '/matrixmoments/bijnis-taking-factories-to-the-world',
        permanent: true,
      },
      {
        source: '/blog/detail/Convertible%20vs%20priced%20equity%20round',
        destination: '/matrixmoments/convertible-round-vs-priced-equity-round',
        permanent: true,
      },
      {
        source: '/blog/detail/co-founder%20conflicts',
        destination: '/matrixmoments/co-founder-conflicts',
        permanent: true,
      },
      {
        source: '/blog/detail/Fundraising%20speed',
        destination: '/matrixmoments/fundraising-speed-frequency-and-size',
        permanent: true,
      },
      {
        source: '/blog/detail/GoKwik',
        destination: '/matrixmoments/democratizing-the-e-shopping-experience-with-gokwik',
        permanent: true,
      },
      {
        source: '/blog/detail/Fundraisingwhennotneeded',
        destination: '/matrixmoments/fundraising-when-you-dont-need-it',
        permanent: true,
      },
      {
        source: '/blog/detail/edtech',
        destination: '/matrixmoments/toddle-snippet-working-with-schools-as-your-clients',
        permanent: true,
      },
      {
        source: '/blog/detail/Toddle',
        destination: '/matrixmoments/toddle-superpower-for-teachers-by-teachers',
        permanent: true,
      },
      {
        source: '/blog/detail/Phygitalbusiness',
        destination: '/matrixmoments/stanza-living-learnings-from-hyper-scaling-a-phygital-business',
        permanent: true,
      },
      {
        source: '/blog/detail/Vcbackscompetitor',
        destination: '/matrixmoments/should-you-care-if-your-vc-backs-your-competitor',
        permanent: true,
      },
      {
        source: '/blog/detail/Incorporatemycompany',
        destination: '/matrixmoments/where-should-i-incorporate-my-company',
        permanent: true,
      },
      {
        source: '/blog/detail/DealshareJourney',
        destination: '/matrixmoments/a-decryption-of-the-dealshare-journey',
        permanent: true,
      },
      {
        source: '/blog/detail/Burnrate',
        destination: '/matrixmoments/whats-the-right-burn-rate-for-your-company',
        permanent: true,
      },
      {
        source: '/blog/detail/Rocketlane',
        destination: '/matrixmoments/the-rocketlane-journey',
        permanent: true,
      },
      {
        source: '/blog/detail/trendemerginginIndia',
        destination: '/matrixmoments/behind-the-scenes-with-tarun-davda',
        permanent: true,
      },
      {
        source: '/blog/detail/announcefundraise',
        destination: '/matrixmoments/when-should-a-founder-announce-their-fundraise',
        permanent: true,
      },
      {
        source: '/blog/detail/Bubble%20Trouble',
        destination: '/matrixmoments/bubble-trouble',
        permanent: true,
      },
      {
        source: '/blog/detail/Protonn',
        destination: '/matrixmoments/building-a-business-in-a-box-with-protonn',
        permanent: true,
      },
      {
        source: '/blog/detail/Networkeffects',
        destination: '/matrixmoments/network-effects-in-a-nutshell',
        permanent: true,
      },
      {
        source: '/blog/detail/ProductVSDistribution',
        destination: '/matrixmoments/product-vs-distribution',
        permanent: true,
      },
      {
        source: '/blog/detail/PhonePe',
        destination: '/matrixmoments/the-phonepe-journey-with-sameer-nigam',
        permanent: true,
      },
      {
        source: '/blog/detail/Marketplacespart2',
        destination: '/matrixmoments/marketplaces-part-2-b2band2cand2rand2e-2b-or-2e-that-is-the-question',
        permanent: true,
      },
      {
        source: '/blog/detail/NithinK',
        destination: '/matrixmoments/snippet-nithin-kamath-unplugged',
        permanent: true,
      },
      {
        source: '/blog/detail/BuildingMPI',
        destination: '/matrixmoments/tarun-davda-building-matrix-partners-india',
        permanent: true,
      },
      {
        source: '/blog/detail/AngelList',
        destination: '/matrixmoments/tarun-davda-on-angellist-india-radio',
        permanent: true,
      },
      {
        source: '/blog/detail/NithinKamath',
        destination: '/matrixmoments/nithin-kamath-unplugged',
        permanent: true,
      },
      {
        source: '/blog/detail/BahlKunal',
        destination: '/matrixmoments/snippet-nithin-kamath-unplugged',
        permanent: true,
      },
      {
        source: '/blog/detail/FounderCompensation',
        destination: '/matrixmoments/founder-compensation',
        permanent: true,
      },
      {
        source: '/blog/detail/Founderdisputes',
        destination: '/matrixmoments/co-founder-disputes',
        permanent: true,
      },
      {
        source: '/blog/detail/Moneycontrol',
        destination: '/matrixmoments/moneycontrol-on-clubhouse-future-of-digital-payments-in-india',
        permanent: true,
      },
      {
        source: '/blog/detail/LTV%2FCAC',
        destination: '/matrixmoments/ltv-cac-whats-the-right-number',
        permanent: true,
      },
      {
        source: '/blog/detail/Marketing',
        destination: '/matrixmoments/is-marketing-scalable',
        permanent: true,
      },
      {
        source: '/blog/detail/ReverseVesting',
        destination: '/matrixmoments/reverse-vesting',
        permanent: true,
      },
      {
        source: '/blog/detail/Ownership',
        destination: '/matrixmoments/founding-ownership-structures',
        permanent: true,
      },
      {
        source: '/blog/detail/Valuation',
        destination: '/matrixmoments/valuation-versus-dilution',
        permanent: true,
      },
      {
        source: '/blog/detail/TheHackJob',
        destination: '/matrixmoments/the-hack-job-a-thread',
        permanent: true,
      },
      {
        source: '/blog/detail/HackJob',
        destination: '/matrixmoments/the-hack-job-hacking-the-way-to-growth-and-profits',
        permanent: true,
      },
      {
        source: '/blog/detail/KunalBahl',
        destination: '/matrixmoments/from-both-sides-of-the-table-kunal-bahl-unplugged',
        permanent: true,
      },
      {
        source: '/blog/detail/Humancapital',
        destination: '/matrixmoments/the-role-of-hc-in-venture-investing',
        permanent: true,
      },
      {
        source: '/blog/detail/HC',
        destination: '/matrixmoments/what-role-does-human-capital-play-in-venture-investing',
        permanent: true,
      },
      {
        source: '/blog/detail/Wellness',
        destination: '/matrixmoments/snippet-redefining-wellness-one-mosaic-at-a-time',
        permanent: true,
      },
      {
        source: '/blog/detail/Consumer',
        destination: '/matrixmoments/redefining-wellness-one-mosaic-at-a-time',
        permanent: true,
      },
      {
        source: '/blog/detail/Customer',
        destination: '/matrixmoments/customer-versus-competition',
        permanent: true,
      },
      {
        source: '/blog/detail/PP',
        destination: '/matrixmoments/snippet-profit-pools',
        permanent: true,
      },
      {
        source: '/blog/detail/2021',
        destination: '/matrixmoments/2021-reimagining-india-in-the-next-normal',
        permanent: true,
      },
      {
        source: '/blog/detail/Profitpools',
        destination: '/matrixmoments/profit-pools-fishing-in-the-right-pond',
        permanent: true,
      },
      {
        source: '/blog/detail/Unplugged',
        destination: '/matrixmoments/snippet-oziva-unplugged-indias-leading-clean-label-plant-based-nutrition-brand',
        permanent: true,
      },
      {
        source: '/blog/detail/Oziva',
        destination: '/matrixmoments/oziva-unplugged-building-indias-leading-clean-plant-based-nutrition-brand',
        permanent: true,
      },
      {
        source: '/blog/detail/gaming',
        destination: '/matrixmoments/gaming-some-games-are-companies-but-all-companies-need-to-up-their-game',
        permanent: true,
      },
      {
        source: '/blog/detail/Gamingplus',
        destination: '/matrixmoments/snippet-gaming-some-games-are-companies-but-all-companies-need-to-up-their-game',
        permanent: true,
      },
      {
        source: '/blog/detail/ideaboard21',
        destination: '/matrixmoments/fintech-idea-board-2021',
        permanent: true,
      },
      {
        source: '/blog/detail/lookback20',
        destination: '/matrixmoments/a-lookback-at-2020-and-forecast-for-2021',
        permanent: true,
      },
      {
        source: '/blog/detail/2020',
        destination: '/matrixmoments/matrix-moments-2020',
        permanent: true,
      },
      {
        source: '/blog/detail/Commerce',
        destination: '/matrixmoments/commerce-n0-crystal-ball-gazing',
        permanent: true,
      },
      {
        source: '/blog/detail/CommerceN0',
        destination: '/matrixmoments/snippet-commerce-n0-crystal-ball-gazing',
        permanent: true,
      },
      {
        source: '/blog/detail/WFH',
        destination: '/matrixmoments/working-from-home-to-working-from-anywhere-to-finally-working-from-work-our-experience',
        permanent: true,
      },
      {
        source: '/blog/detail/negotiations',
        destination: '/matrixmoments/negotiations',
        permanent: true,
      },
      {
        source: '/blog/detail/Entrepreneur',
        destination: '/matrixmoments/entrepreneur-versus-ceo-what-is-the-real-difference-between-the-two',
        permanent: true,
      },
      {
        source: '/blog/detail/founderandinvestor',
        destination: '/matrixmoments/character-traits-important-for-founders-and-investors-to-possess',
        permanent: true,
      },
      {
        source: '/blog/detail/strategythinedge',
        destination: '/matrixmoments/the-thin-edge-of-the-wedge-strategy',
        permanent: true,
      },
      {
        source: '/blog/detail/drivingforces',
        destination: '/matrixmoments/snippet-driving-forces-behind-dream11s-inception',
        permanent: true,
      },
      {
        source: '/blog/detail/HarshJain',
        destination: '/matrixmoments/snippet-fundraising-for-dream11-harsh-jain-recounts-his-experience',
        permanent: true,
      },
      {
        source: '/blog/detail/Dream11',
        destination: '/matrixmoments/from-dream-to-reality-the-journey-of-dream11',
        permanent: true,
      },
      {
        source: '/blog/detail/Agritech-',
        destination: '/matrixmoments/the-untapped-opportunities-in-agritech',
        permanent: true,
      },
      {
        source: '/blog/detail/Tech',
        destination: '/matrixmoments/the-role-of-tech-in-the-agri-sector',
        permanent: true,
      },
      {
        source: '/blog/detail/Ninjacart',
        destination: '/matrixmoments/learnings-from-ninjacart-on-building-a-sustainable-agritech-model',
        permanent: true,
      },
      {
        source: '/blog/detail/Waycool',
        destination: '/matrixmoments/the-inception-of-waycool-insights-from-karthiks-journey',
        permanent: true,
      },
      {
        source: '/blog/detail/Agri%20-%20tech',
        destination: '/matrixmoments/agri-tech-startup-advice-for-founders-from-founders',
        permanent: true,
      },
      {
        source: '/blog/detail/SOFTU%2BFireside_chat',
        destination: '/matrixmoments/softu-fireside-chat-lending',
        permanent: true,
      },
      {
        source: '/blog/detail/IVOP2',
        destination: '/matrixmoments/india-venture-opportunity-part-2',
        permanent: true,
      },
      {
        source: '/blog/detail/Lending',
        destination: '/matrixmoments/softu-fireside-chat-payments',
        permanent: true,
      },
      {
        source: '/blog/detail/Top5',
        destination: '/matrixmoments/top-5-books-to-read-before-starting-up',
        permanent: true,
      },
      {
        source: '/blog/detail/Postcovid',
        destination: '/matrixmoments/company-building-in-a-post-covid-world',
        permanent: true,
      },
      {
        source: '/blog/detail/Truth',
        destination: '/matrixmoments/snippet-the-core-values-that-led-to-the-inception-of-the-whole-truth',
        permanent: true,
      },
      {
        source: '/blog/detail/TWT',
        destination: '/matrixmoments/the-whole-truth-and-nothing-else',
        permanent: true,
      },
      {
        source: '/blog/detail/Mobility',
        destination: '/matrixmoments/mobility-trends-and-learnings-from-redbuss-journey',
        permanent: true,
      },
      {
        source: '/blog/detail/Moats',
        destination: '/matrixmoments/moats',
        permanent: true,
      },
      {
        source: '/blog/detail/Crisis',
        destination: '/matrixmoments/crisis-communications-recent-learnings-from-indian-startups',
        permanent: true,
      },
      {
        source: '/blog/detail/Fintech',
        destination: '/matrixmoments/fin-tech-a-look-back-at-the-first-six-months-of-2020',
        permanent: true,
      },
      {
        source: '/blog/detail/team',
        destination: '/matrixmoments/the-magic-number-for-a-founding-team',
        permanent: true,
      },
      {
        source: '/blog/detail/PMS',
        destination: '/matrixmoments/performance-management-systems-decoded',
        permanent: true,
      },
      {
        source: '/blog/detail/communication',
        destination: '/matrixmoments/wfh-communication-tips',
        permanent: true,
      },
      {
        source: '/blog/detail/framework',
        destination: '/matrixmoments/snippet-razorpays-decision-framework-for-early-hires',
        permanent: true,
      },
      {
        source: '/blog/detail/Razorpay',
        destination: '/matrixmoments/the-journey-of-building-razorpay',
        permanent: true,
      },
      {
        source: '/blog/detail/strategy',
        destination: '/matrixmoments/snippet-dailyhunt-growth-strategy',
        permanent: true,
      },
      {
        source: '/blog/detail/Dailyhunt',
        destination: '/matrixmoments/dailyhunts-journey-part-1',
        permanent: true,
      },
      {
        source: '/blog/detail/Dailyhunt_',
        destination: '/matrixmoments/dailyhunts-journey-part-2',
        permanent: true,
      },
      {
        source: '/blog/detail/Marketplaces',
        destination: '/matrixmoments/marketplaces',
        permanent: true,
      },
      {
        source: '/blog/detail/Matrixlife',
        destination: '/matrixmoments/life-at-matrix',
        permanent: true,
      },
      {
        source: '/blog/detail/Ofbusiness_Part2',
        destination: '/matrixmoments/the-journey-of-building-ofbusiness-part-2',
        permanent: true,
      },
      {
        source: '/blog/detail/Ofbusiness',
        destination: '/matrixmoments/the-journey-of-building-ofbusiness-part-1',
        permanent: true,
      },
      {
        source: '/blog/detail/Vcinvestable',
        destination: '/matrixmoments/is-my-business-vc-investable',
        permanent: true,
      },
      {
        source: '/blog/detail/matrix_journey',
        destination: '/matrixmoments/chronicles-from-my-journey-at-an-early-stage-vc-firm',
        permanent: true,
      },
      {
        source: '/blog/detail/Covid19',
        destination: '/matrixmoments/a-reflection-on-covid-19-predictions',
        permanent: true,
      },
      {
        source: '/blog/detail/matrixjourney',
        destination: '/matrixmoments/my-journey-at-matrix-partners-india',
        permanent: true,
      },
      {
        source: '/blog/detail/DealShare',
        destination: '/matrixmoments/covid-19-and-its-after-effects-on-the-grocery-business',
        permanent: true,
      },
      {
        source: '/blog/detail/CEO',
        destination: '/matrixmoments/peacetime-ceo-versus-wartime-ceo-which-works-better',
        permanent: true,
      },
      {
        source: '/blog/detail/VCs',
        destination: '/matrixmoments/single-versus-multiple-vcs',
        permanent: true,
      },
      {
        source: '/blog/detail/Pivot',
        destination: '/matrixmoments/how-to-know-when-to-pivot',
        permanent: true,
      },
      {
        source: '/blog/detail/Downrounds',
        destination: '/matrixmoments/what-happens-in-a-down-round',
        permanent: true,
      },
      {
        source: '/blog/detail/Company%20building',
        destination: '/matrixmoments/snippet-country-delight-founders-on-customer-obsession-and-company-building',
        permanent: true,
      },
      {
        source: '/blog/detail/CD',
        destination: '/matrixmoments/the-journey-of-building-country-delight',
        permanent: true,
      },
      {
        source: '/blog/detail/CountryDelight',
        destination: '/matrixmoments/snippet-the-idea-that-sparked-the-inception-of-country-delight',
        permanent: true,
      },
      {
        source: '/blog/detail/Marginal',
        destination: '/matrixmoments/snippet-marginal-value-add',
        permanent: true,
      },
      {
        source: '/blog/detail/Fundraising',
        destination: '/matrixmoments/fundraising-for-bridge-rounds',
        permanent: true,
      },
      {
        source: '/blog/detail/ACT',
        destination: '/matrixmoments/act-webinar-on-opportunity-in-the-threat',
        permanent: true,
      },
      {
        source: '/blog/detail/Marginalvalue',
        destination: '/matrixmoments/marginal-value-add',
        permanent: true,
      },
      {
        source: '/blog/detail/detail/M%26A_fundraise',
        destination: '/matrixmoments/back-to-the-future-capital-raise-and-manda-2020',
        permanent: true,
      },
      {
        source: '/blog/detail/ecommerce',
        destination: '/matrixmoments/e-commerce-in-a-post-covid-19-world-webinar-takeaways',
        permanent: true,
      },
      {
        source: '/blog/detail/Consumerbrands',
        destination: '/matrixmoments/consumer-tech-and-covid-19-how-can-companies-survive-and-thrive',
        permanent: true,
      },
      {
        source: '/blog/detail/exit%20plan',
        destination: '/matrixmoments/exit-strategy-for-startups',
        permanent: true,
      },


    ];
  },
};

module.exports = withPlugins([], config);
