'use client';
import dynamic from 'next/dynamic';

const OfflineDemoSection = dynamic(() => import('@/app/components/OfflineDemoSection'));
const NodePipelineSection = dynamic(() => import('@/app/components/NodePipelineSection'));
const ESignCanvas = dynamic(() => import('@/app/components/ESignCanvas'));

export default function PortfolioDemos() {
  return (
    <>
      <OfflineDemoSection />
      <NodePipelineSection />
      <ESignCanvas />
    </>
  );
}
