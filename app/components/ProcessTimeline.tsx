"use client";

import { ReactNode } from "react";
import { RevealCard } from "./Motion";
import { cn } from "@/lib/utils";

export interface TimelineStep {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function ProcessTimeline({
  header,
  steps,
  className,
}: {
  header: ReactNode;
  steps: TimelineStep[];
  className?: string;
}) {
  return (
    <section className={cn("py-24 md:py-32 relative z-10 border-t border-white/5 bg-zinc-950/50", className)}>
      <div className="page-container">
        <div className="mb-24">
          {header}

          <div className="relative space-y-16 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/5">
            {steps.map((step, index) => {
              const formattedNum = `0${index + 1}`.slice(-2);
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-zinc-950 text-primary font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 relative group-hover:scale-110 group-hover:border-primary/40 transition-all">
                    {formattedNum}
                  </div>

                  <RevealCard
                    index={index}
                    className="w-[calc(100%-3.5rem)] md:w-[calc(50%-3rem)] p-5 sm:p-6 md:p-8 !rounded-[2rem] md:!rounded-[3.5rem] glass-card hover:bg-white/10 transition-all duration-500 border-white/5 group-hover:border-primary/20 flex flex-col items-start"
                  >
                    {Icon && (
                      <div className="inline-flex p-2.5 sm:p-3 rounded-xl bg-white/5 mb-4 sm:mb-6 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                    )}
                    <h3 className="text-heading-md text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-medium italic text-base group-hover:text-zinc-300 transition-colors">
                      {step.description}
                    </p>
                  </RevealCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
