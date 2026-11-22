import type { ReactNode } from 'react';

// Tags usable inside translated `details` strings with next-intl's `t.rich()`,
// e.g. "...for the <meckup>MeckUp Hackathon</meckup>...". Each tag renders an
// external link styled like the rest of the site.
const external = (href: string) =>
  function ExternalLink(chunks: ReactNode) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4"
      >
        {chunks}
      </a>
    );
  };

export const richLinks = {
  meckup: external('https://meckup.org/'),
  cetic: external('https://ceticfoundation.org/'),
  iss: external('https://github.com/cornell-cup/iss-mini-mimic'),
  xrp: external('https://www.experiential.bot/xrp'),
  agxrp: external('https://github.com/David-Fuq/Cornell-AgXRP'),
  python: external('https://www.coursera.org/learn/programacion-python'),
  java: external('https://www.coursera.org/learn/introduccion-programacion-java'),
  thesis: external('https://hdl.handle.net/1992/77925'),
};

// Public copy of the CV (re-copy cv/CV_Fuquen_Nov_2026_Academia.pdf here after recompiling).
export const CV_PATH = '/CV_David_Fuquen.pdf';
