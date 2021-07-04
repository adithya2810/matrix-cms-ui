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
      name: "Blog",
      link: "/blogs",
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
      link: "",
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
          link: "",
        },
        {
          key: "footer_event",
          name: "event",
          link: "",
        }
      ]
    }
  ],
};

export default navMenu;
