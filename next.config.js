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
      {
        source: '/blog/detail/fintech_covid',
        destination: '/matrixmoments/impact-of-covid-19-on-financial-services-and-fin-tech',
        permanent: true,
      },
      {
        source: '/blog/detail/bcp_1',
        destination: '/matrixmoments/bcp-sample-case',
        permanent: true,
      },
      {
        source: '/blog/detail/Fintech_%20strategy',
        destination: '/matrixmoments/overreaction-is-the-only-reaction-for-fintechs',
        permanent: true,
      },
      {
        source: '/blog/detail/insights_China',
        destination: '/matrixmoments/startup-learnings-from-china-in-the-wake-of-covid19',
        permanent: true,
      },
      {
        source: '/blog/detail/Resourceguide',
        destination: '/matrixmoments/covid-19resource-guide',
        permanent: true,
      },
      {
        source: '/blog/detail/Covid',
        destination: '/matrixmoments/covid-19-and-its-implications-on-startup-india',
        permanent: true,
      },
      {
        source: '/blog/detail/Zerodha',
        destination: '/matrixmoments/building-indias-first-discount-broking-model-zerodha',
        permanent: true,
      },
      {
        source: '/blog/detail/founders%20first',
        destination: '/atrixmoments/a-matrix-moment-foundersfirst',
        permanent: true,
      },
      {
        source: '/blog/detail/Earlystage',
        destination: '/matrixmoments/decoding-the-founder-vc-relationship',
        permanent: true,
      },
      {
        source: '/blog/detail/DINVIBs',
        destination: '/matrixmoments/creating-new-consumer-brands-digitally',
        permanent: true,
      },
      {
        source: '/blog/detail/Culture',
        destination: '/matrixmoments/crafting-your-company-culture',
        permanent: true,
      },
      {
        source: '/blog/detail/CAP%20-%20TABLE%20BASICS%20%26%20CROSS%20-%20BORDER%20INSIGHTS',
        destination: '/matrixmoments/cap-table-basics-and-cross-border-insights',
        permanent: true,
      },
      {
        source: '/blog/detail/bcp_1blog/detail/A%20look%20back',
        destination: '/matrixmoments/a-look-back-at-2019',
        permanent: true,
      },
      {
        source: '/blog/detail/POS',
        destination: '/matrixmoments/pos-framework',
        permanent: true,
      },
      {
        source: '/blog/detail/Founding%20Team',
        destination: '/matrixmoments/building-a-founding-team',
        permanent: true,
      },
      {
        source: '/blog/detail/NeoBanks',
        destination: '/matrixmoments/neobanks-the-future-of-banking',
        permanent: true,
      },
      {
        source: '/blog/detail/GTM',
        destination: '/matrixmoments/gtm-for-startups',
        permanent: true,
      },
      {
        source: '/blog/detail/fundraisingandvaluation',
        destination: '/matrixmoments/fundraising-and-valutations',
        permanent: true,
      },
      {
        source: '/blog/detail/stanza',
        destination: '/matrixmoments/stanza-living-transforming-the-student-housing-sector',
        permanent: true,
      },
      {
        source: '/blog/detail/startup-temperature',
        destination: '/matrixmoments/startup-temperature-check',
        permanent: true,
      },
      {
        source: '/blog/detail/Bhavin-turakhia-pt2',
        destination: '/matrixmoments/learnings-from-serial-entrepreneur-bhavin-turakhia-part-2',
        permanent: true,
      },
      {
        source: '/blog/detail/Bhavin-turakhia',
        destination: '/matrixmoments/learnings-from-serial-entrepreneur-bhavin-turakhia-part-1',
        permanent: true,
      },
      {
        source: '/blog/detail/consumer-businesses',
        destination: '/matrixmoments/why-new-age-consumer-businesses-are-great-investments',
        permanent: true,
      },
      {
        source: '/blog/detail/exits',
        destination: '/matrixmoments/exits',
        permanent: true,
      },
      {
        source: '/blog/detail/finding-scaling-pmf',
        destination: '/mmatrixmoments/finding-and-scaling-pmf',
        permanent: true,
      },
      {
        source: '/blog/detail/journey-of-citrus-pay',
        destination: '/matrixmoments/the-journey-of-building-citrus-pay-and-learnings-on-the-fintech-landscape',
        permanent: true,
      },
      {
        source: '/blog/detail/Investing_in_mobility',
        destination: '/matrixmoments/investing-in-mobility-the-role-of-ai-and-robotics',
        permanent: true,
      },
      {
        source: '/blog/detail/Fintech_or_techfin',
        destination: '/matrixmoments/fintech-or-techfin-what-is-exciting-investors',
        permanent: true,
      },
      {
        source: '/blog/detail/investor-value-add-engagement',
        destination: '/matrixmoments/investor-value-add-and-engagement',
        permanent: true,
      },
      {
        source: '/blog/detail/metrics-and-dashboards',
        destination: '/matrixmoments/metrics-and-dashboards',
        permanent: true,
      },
      {
        source: '/blog/detail/structuring-incentive-plans',
        destination: '/matrixmoments/structuring-incentive-plans-esop-cash-and-balanced-scorecard',
        permanent: true,
      },
      {
        source: '/blog/detail/ivo',
        destination: '/matrixmoments/state-of-the-indian-venture-market-2019',
        permanent: true,
      },
      {
        source: '/blog/detail/setting-sail-vikram',
        destination: '/matrixmoments/vikram-vaidyanathan-on-why-he-chose-to-be-an-investor',
        permanent: true,
      },
      {
        source: '/blog/detail/The_Terms_of_Term_Sheets',
        destination: '/matrixmoments/the-terms-of-term-sheets',
        permanent: true,
      },
      {
        source: '/blog/detail/LSN-journey',
        destination: '/matrixmoments/the-journey-of-building-loadshare',
        permanent: true,
      },
      {
        source: '/blog/detail/Budget-%26-Burn',
        destination: '/matrixmoments/budget-and-burn',
        permanent: true,
      },
      {
        source: '/blog/detail/org-3.0',
        destination: '/matrixmoments/org-30',
        permanent: true,
      },
      {
        source: '/blog/detail/angel-versus-institutional-funding',
        destination: '/matrixmoments/angel-versus-institutional-funding-at-the-seed-stage',
        permanent: true,
      },
      {
        source: '/blog/detail/journey-behind-ltilite',
        destination: '/matrixmoments/the-journey-behind-building-itilite',
        permanent: true,
      },
      {
        source: '/blog/detail/inmobi-journey',
        destination: '/matrixmoments/the-inmobi-journey',
        permanent: true,
      },
      {
        source: '/blog/detail/cods',
        destination: '/matrixmoments/cods',
        permanent: true,
      },
      {
        source: '/blog/detail/discovering-fintech-religion-2',
        destination: '/matrixmoments/discovering-fintech-religion-part-2',
        permanent: true,
      },
      {
        source: '/blog/detail/discovering-fintech-religion-1',
        destination: '/matrixmoments/discovering-fintech-religion-part-1',
        permanent: true,
      },
      {
        source: '/blog/detail/ama-series-with-india-quotient',
        destination: '/matrixmoments/ama-series-with-india-quotient',
        permanent: true,
      },
      {
        source: '/blog/detail/extreme-hiring',
        destination: '/matrixmoments/extreme-hiring',
        permanent: true,
      },
      {
        source: '/blog/detail/extreme-referencing',
        destination: '/matrixmoments/extreme-referencing',
        permanent: true,
      },
      {
        source: '/blog/detail/startup-india',
        destination: '/matrixmoments/the-indian-startup-opportunity-a-few-personal-beliefs',
        permanent: true,
      },
      {
        source: '/blog/detail/tiecon19',
        destination: '/matrixmoments/tiecon-mumbai-2019-spotting-future-unicorns',
        permanent: true,
      },
      {
        source: '/blog/detail/state-indian-venture-ecosystem-part2',
        destination: '/matrixmoments/state-of-the-indian-venture-ecosystem-part-2-forecast-2019',
        permanent: true,
      },
      {
        source: '/blog/detail/state-indian-venture-ecosystem',
        destination: '/matrixmoments/state-of-the-indian-venture-ecosystem-part-1-a-look-back-at-2018',
        permanent: true,
      },
      {
        source: '/blog/detail/ecommerce-key-takeaways',
        destination: '/matrixmoments/e-commerce-20-key-takeaways',
        permanent: true,
      },
      {
        source: '/blog/detail/MoFu',
        destination: '/matrixmoments/living-in-the-middle-of-the-funnel-mofu',
        permanent: true,
      },
      {
        source: '/blog/detail/extreme-productivity',
        destination: '/matrixmoments/extreme-productivity',
        permanent: true,
      },
      {
        source: '/blog/detail/learnings%20from%20China',
        destination: '/matrixmoments/learnings-on-commerce-from-china',
        permanent: true,
      },
      {
        source: '/blog/detail/valuations',
        destination: '/matrixmoments/making-sense-of-valuations',
        permanent: true,
      },
      {
        source: '/blog/detail/matrixmoments-VC',
        destination: '/matrixmoments/operator-vc-versus-investor-vc',
        permanent: true,
      },
      {
        source: '/blog/detail/matrixmomentsfear-greed',
        destination: '/matrixmoments/fear-and-greed',
        permanent: true,
      },
      {
        source: '/blog/detail/vernacular',
        destination: '/matrixmoments/vernacularization-of-digital-india-key-takeaways',
        permanent: true,
      },
      {
        source: '/blog/detail/matrixmoments-intrinsics',
        destination: '/matrixmoments/Intrinsics',
        permanent: true,
      },
      {
        source: '/blog/detail/india-fintech',
        destination: '/matrixmoments/india-fintech-boom-bust-boombustb-whats-coming-next',
        permanent: true,
      },
      {
        source: '/blog/detail/fivestarfinancepodcast',
        destination: '/matrixmoments/cnbc-young-turks-master-class-five-star-business-finance-podcast',
        permanent: true,
      },
      {
        source: '/blog/detail/fivestarfinancemasterclass',
        destination: '/matrixmoments/cnbc-young-turks-master-class-five-star-business-finance',
        permanent: true,
      },
      {
        source: '/blog/detail/healthcareblog',
        destination: '/matrixmoments/healthcare-striking-gold-in-the-picks-and-shovels-businesses',
        permanent: true,
      },
      {
        source: '/blog/detail/Healthtech-sector',
        destination: '/matrixmoments/health-tech-sector-seen-generating-significant-value-over-the-next-decade',
        permanent: true,
      },
      {
        source: '/blog/detail/limeroadpodcast',
        destination: '/matrixmoments/cnbc-young-turks-master-class-limeroad-podcast',
        permanent: true,
      },
      {
        source: '/blog/detail/cnbc%20masterclass%20limeroad',
        destination: '/matrixmoments/cnbc-young-turks-master-class-limeroad',
        permanent: true,
      },
      {
        source: '/blog/detail/cnbc%20masterclass%20Quikr',
        destination: '/matrixmoments/cnbc-young-turks-master-class-quikr-2',
        permanent: true,
      },
      {
        source: '/blog/detail/cnbc%20YT%20masterclass%20Quikr',
        destination: '/matrixmoments/cnbc-young-turks-master-class-quikr-2',
        permanent: true,
      },
      {
        source: '/blog/detail/47',
        destination: '/matrixmoments/cnbc-young-turks-masterclass-mswipe',
        permanent: true,
      },
      {
        source: '/blog/detail/43',
        destination: '/matrixmoments/india-financial-services-disrupt-or-be-disrupted-part-2',
        permanent: true,
      },
      {
        source: '/blog/detail/44',
        destination: '/matrixmoments/what-does-it-take-to-raise-series-a-funding-from-a-vc',
        permanent: true,
      },
      {
        source: '/blog/detail/46',
        destination: '/matrixmoments/cnbc-young-turks-masterclass-mswipe',
        permanent: true,
      },
      {
        source: '/blog/detail/42',
        destination: '/matrixmoments/india-financial-services-disrupt-or-be-disrupted-part-1',
        permanent: true,
      },
      {
        source: '/blog/detail/41',
        destination: '/matrixmoments/what-they-dont-teach-you-at-hbs',
        permanent: true,
      },
      {
        source: '/blog/detail/40',
        destination: '/matrixmoments/the-harsh-realities-of-entrepreneurship',
        permanent: true,
      },
      {
        source: '/blog/detail/38',
        destination: '/matrixmoments/backing-the-best-founders',
        permanent: true,
      },
      {
        source: '/blog/detail/37',
        destination: '/matrixmoments/evolving-as-a-leader',
        permanent: true,
      },
      {
        source: '/blog/detail/36',
        destination: '/matrixmoments/sharpening-investing-skills',
        permanent: true,
      },
      {
        source: '/blog/detail/35',
        destination: '/matrixmoments/misconceptions-around-venture-investing',
        permanent: true,
      },
      {
        source: '/blog/detail/32',
        destination: '/matrixmoments/venture-investing-supporting-without-intruding',
        permanent: true,
      },
      {
        source: '/blog/detail/30',
        destination: '/matrixmoments/taking-stock-of-life-after-baazee-sale',
        permanent: true,
      },
      {
        source: '/blog/detail/28',
        destination: '/matrixmoments/entrepreneurial-resilience',
        permanent: true,
      },
      {
        source: '/blog/detail/25',
        destination: '/matrixmoments/starting-baazeecom',
        permanent: true,
      },
      {
        source: '/blog/detail/22',
        destination: '/matrixmoments/goldman-sachs-versus-mckinsey',
        permanent: true,
      },
      {
        source: '/blog/detail/21',
        destination: '/matrixmoments/why-we-like-consumer-brands',
        permanent: true,
      },
      {
        source: '/blog/detail/20',
        destination: '/matrixmoments/key-insights-talent-in-the-era-of-digital-disruption',
        permanent: true,
      },
      {
        source: '/blog/detail/18',
        destination: '/matrixmoments/what-makes-an-entrepreneur',
        permanent: true,
      },
      {
        source: '/blog/detail/14',
        destination: '/matrixmoments/founders-vs-markets',
        permanent: true,
      },
      {
        source: '/blog/detail/13',
        destination: '/matrixmoments/forces-of-nature',
        permanent: true,
      },
      {
        source: '/blog/detail/12',
        destination: '/matrixmoments/welcome-to-the-matrix-partners-india-blog-foundersfirst',
        permanent: true,
      },
      {
        source: '/blog/detail/15',
        destination: '/matrixmoments/key-takeaways-product-meet-up-with-rahul-ganjoo-vp-product-zomato-hosted-by-matrix-partners',
        permanent: true,
      },
      {
        source: '/blog/detail/11',
        destination: '/matrixmoments/consumer-internet-20-the-opportunity-ahead',
        permanent: true,
      },
      {
        source: '/blog/detail/5',
        destination: '/matrixmoments/saas-enabled-marketplaces-and-why-we-like-them',
        permanent: true,
      },
      {
        source: '/blog/detail/consumer-tech-investing-in-india',
        destination: '/matrixmoments/whats-next-for-consumer-tech-investing-in-india',
        permanent: true,
      },
      {
        source: '/blog/detail/16',
        destination: '/matrixmoments/the-treebo-story-building-indias-most-loved-budget-hotel-brand',
        permanent: true,
      },
      {
        source: '/blog/detail/6',
        destination: '/matrixmoments/calculating-liquidation-preference',
        permanent: true,
      },
      {
        source: '/blog/detail/7',
        destination: '/matrixmoments/why-we-invested-in-myra-a-potent-synthesis-of-technology-and-operations',
        permanent: true,
      },
      {
        source: '/blog/detail/8',
        destination: '/matrixmoments/india-tech-17-trends-to-watch-out-for-in-2017',
        permanent: true,
      },
      {
        source: '/blog/detail/9',
        destination: '/matrixmoments/flipkart-ola-and-government-protection-an-alternate-view',
        permanent: true,
      },
      {
        source: '/blog/detail/10',
        destination: '/matrixmoments/why-we-invested-in-belong',
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins([], config);
