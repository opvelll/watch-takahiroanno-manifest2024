// IssueLink.tsx
import React from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black underline">
      {children}
    </a>
  );
};

export default ExternalLink;