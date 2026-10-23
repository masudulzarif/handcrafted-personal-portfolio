import React, { useEffect } from 'react';
import { X, Clock, Calendar, Bookmark, Share2, Check } from 'lucide-react';
import { Article } from '../data/portfolioData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/75 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50/90 dark:bg-stone-900/90 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              title="Copy article link"
              aria-label="Share article"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10">
          <article className="prose dark:prose-invert max-w-none">
            <h1 id="article-modal-title" className="text-2xl sm:text-3xl font-bold font-display text-stone-900 dark:text-stone-50 tracking-tight mb-6 text-wrap-balance">
              {article.title}
            </h1>

            <div className="text-stone-600 dark:text-stone-300 text-base leading-relaxed space-y-5 font-sans">
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400">
              <span>Author: Masudul Zarif</span>
              <button
                onClick={onClose}
                className="text-stone-900 dark:text-stone-100 font-semibold hover:underline"
              >
                Back to all essays →
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
