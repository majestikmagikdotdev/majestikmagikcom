import type { Metadata } from 'next';
import CommunityDirectoryPage from './CommunityClient';

export const metadata: Metadata = {
  title: 'Community Directory – Majestik Magik',
  description: 'A curated directory of trusted local businesses supported by Majestik Magik in the Richmond, VA area and beyond.',
  alternates: { canonical: 'https://majestikmagik.dev/community' },
};

export default CommunityDirectoryPage;
