import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { ARTICLES, Article } from '../data/portfolioData';

interface ArticlesSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="writing" className="py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Writings & Architecture Notes
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-stone-900 dark:text-stone-50">
            Articles on Web Craft
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 max-w-2xl font-sans">
            Reflections on frontend architecture, the resurgence of semantic standards, and building resilient web software.
          </p>
        </div>

        {/* Editorial Articles List */}
        <div className="space-y-6">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 cursor-pointer hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Unboxed Metadata (Zero pills) */}
              <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
                <span>{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.date}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-3 text-wrap-balance">
                {article.title}
              </h3>

              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-4 max-w-3xl font-sans">
                {article.summary}
              </p>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Full Essay</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
