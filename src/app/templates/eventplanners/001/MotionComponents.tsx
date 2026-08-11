'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type Shot = { id: string; title: string; src: string; w: number; h: number };

export function HeroFrames() {
  return (
    <div className="relative">
      <motion.div
        initial={{ rotate: -3, y: 20, opacity: 0 }}
        animate={{ rotate: -3, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-violet-100"
      >
        <Image
          src="https://placehold.co/1400x1000/7e22ce/ffffff.jpg?text=Hero+Frame+1"
          alt="Portfolio preview"
          width={1400}
          height={1000}
          className="object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ rotate: 4, y: 40, opacity: 0 }}
        animate={{ rotate: 4, y: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 60 }}
        className="absolute -bottom-10 -right-6 hidden md:block rounded-3xl overflow-hidden shadow-xl ring-1 ring-violet-100 w-56"
      >
        <Image
          src="https://placehold.co/800x1000/a21caf/ffffff.jpg?text=Hero+Frame+2"
          alt="Portfolio preview"
          width={800}
          height={1000}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

export function MasonryLightbox({ shots }: { shots: Shot[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const onOpen = (i: number) => { setIndex(i); setOpen(true); };
  const onPrev = () => setIndex((i) => (i - 1 + shots.length) % shots.length);
  const onNext = () => setIndex((i) => (i + 1) % shots.length);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {shots.map((s, i) => (
          <figure key={s.id} className="mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-white shadow ring-1 ring-violet-100">
            <button onClick={() => onOpen(i)} className="relative block w-full">
              <Image src={s.src} alt={s.title} width={s.w} height={s.h} className="w-full h-auto object-cover" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-sm">
                {s.title}
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={shots[index].src}
                alt={shots[index].title}
                width={shots[index].w}
                height={shots[index].h}
                className="w-full h-auto rounded-xl object-contain bg-black"
              />
              <div className="mt-3 flex items-center justify-between text-white text-sm">
                <span>{shots[index].title}</span>
                <div className="flex items-center gap-2">
                  <button onClick={onPrev} className="px-3 py-1 rounded bg-white/10 ring-1 ring-white/30 hover:bg-white/20">Prev</button>
                  <button onClick={onNext} className="px-3 py-1 rounded bg-white/10 ring-1 ring-white/30 hover:bg-white/20">Next</button>
                  <a href="#booking" className="ml-2 px-3 py-1 rounded bg-fuchsia-600 text-white hover:bg-fuchsia-700">Book this look</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
