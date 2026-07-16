'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CopyEmailButton = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address"
      className="inline-flex w-fit items-center gap-1.5 rounded-md border border-hairline px-3 py-1.5 text-xs text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
};

export default CopyEmailButton;
