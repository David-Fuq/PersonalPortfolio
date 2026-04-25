'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Image from 'next/image';

export type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  brief: string;
  details: string;
  imageUrl?: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="relative max-w-3xl mx-auto mt-12">
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center ${
                isEven ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex-row`}
            >
              {/* Content Box */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                <motion.div
                  layoutId={`card-${item.id}`}
                  onClick={() => setSelectedId(item.id)}
                  className="cursor-pointer group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
                >
                  <motion.h3 layoutId={`title-${item.id}`} className="text-xl font-semibold mb-1">
                    {item.title}
                  </motion.h3>
                  <motion.p layoutId={`subtitle-${item.id}`} className="text-muted-foreground font-medium mb-2">
                    {item.subtitle}
                  </motion.p>
                  <motion.p layoutId={`date-${item.id}`} className="text-sm text-muted-foreground mb-4">
                    {item.date}
                  </motion.p>
                  <motion.p layoutId={`brief-${item.id}`} className="text-sm text-foreground/80">
                    {item.brief}
                  </motion.p>
                </motion.div>
              </div>

              {/* Center Dot / Logo */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary z-10">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="rounded-full object-cover p-1"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-primary" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedId}`}
                className="w-full max-w-lg bg-card rounded-2xl p-6 shadow-xl border border-border pointer-events-auto overflow-hidden relative"
              >
                {(() => {
                  const item = items.find((i) => i.id === selectedId);
                  if (!item) return null;
                  return (
                    <>
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <motion.h3 layoutId={`title-${item.id}`} className="text-2xl font-bold mb-2 pr-8">
                        {item.title}
                      </motion.h3>
                      <motion.p layoutId={`subtitle-${item.id}`} className="text-lg text-muted-foreground mb-2">
                        {item.subtitle}
                      </motion.p>
                      <motion.p layoutId={`date-${item.id}`} className="text-sm text-muted-foreground mb-6">
                        {item.date}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-sm dark:prose-invert max-w-none"
                      >
                        <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                          {item.details}
                        </p>
                      </motion.div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
