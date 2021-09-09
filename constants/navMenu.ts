export const navMenu = {
  primary: [
    {
      key: "footer_about",
      name: "About",
      link: "/about-us",
    },
    {
      key: "footer_portfolio",
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      key: "footer_blog",
      name: "Matrix Moments",
      link: "/matrixmoments",
    },
  ],
  secondary: [
    {
      key: "footer_advisory_team",
      name: "Advisory Team",
      link: "/advisoryTeam",
      subMenu: []
    },
    {
      key: "footer_contact",
      name: "Contact",
      link: "/contact",
      subMenu: []
    },
    {
      key: "footer_careers",
      name: "Careers",
      link: "/careers",
      subMenu: []
    },
    {
      key: "footer_media",
      name: "Media",
      link: "",
      subMenu: [
        {
          key: "footer_news",
          name: "News",
          link: "/news",
        },
        {
          key: "footer_event",
          name: "Event",
          link: "/events",
        }
      ]
    }
  ],
};

export default navMenu;
