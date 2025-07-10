const SocialLinks = () => {
  const links = [
    {
      name: 'Telegram',
      url: 'https://t.me/amolaspinas',
      icon: '' // This is the actual glyph for Telegram (nf-fa-telegram)
    },
    {
      name: 'GitHub', 
      url: 'https://github.com/kmokou',
      icon: '' // This is the actual glyph for GitHub (nf-fa-github)
    }
  ];

  return (
    <div className="flex flex-row gap-4 sm:gap-8 items-center justify-center">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-button flex items-center justify-center w-16 h-16 text-current"
          aria-label={`Visit ${link.name} profile`}
          title={link.name}
        >
          <span className="text-2xl nerd-font">{link.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;