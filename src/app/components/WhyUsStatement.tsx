'use client';

export default function WhyUsStatement() {
  return (
    <div className="w-full px-4 md:px-6 pb-4 md:pb-8">
      <div className="reveal max-w-7xl mx-auto border-t border-[#1e1e2e] pt-16 md:pt-20">
        <p
          className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f0f0f0] max-w-3xl"
          style={{ letterSpacing: '-0.03em', lineHeight: '1.15' }}
        >
          Anyone can ship code now.
          <br />
          <span className="text-[#404050]">The difference is whether somebody with actual taste made the calls.</span>
        </p>
        <p className="mt-5 text-sm text-[#a0a0b0] max-w-lg leading-relaxed">
          When every tool does the same thing, people pick the one that feels like somebody actually chose it. That&apos;s the job.
        </p>
      </div>
    </div>
  );
}
