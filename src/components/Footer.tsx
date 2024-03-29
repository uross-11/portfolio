const links = [
  {
    text: "GitHub",
    url: "https://github.com/uross-11",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/uros-ignjatovic/",
  },
  // {
  //   text: 'Twitter',
  //   url: 'https://twitter.com/uross_11',
  // },
  // {
  //   text: 'Dribbble',
  //   url: 'https://dribbble.com/uross-11',
  // },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links container">
        {links.map((item, index) => {
          return (
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              key={index}
              href={item.url}
            >
              {item.text}
            </a>
          );
        })}
      </div>
    </footer>
  );
};
