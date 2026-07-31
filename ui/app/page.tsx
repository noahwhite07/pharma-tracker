'use client'
import { AssetSearch } from '@/components/custom/AssetSearch';
import { Asset, Company, MOCK_COMPANIES } from '@/lib/mockdata'
import { useState } from 'react';

export default function Home() {

  const [displayedAsset, setDisplayedAsset] = useState<Asset | null>(null)

  return (  
    <>
      <AssetSearch
      // TODO: 
      // company but no asset: Ticker, asset list
      // company + asset: Ticker, AI overview, stage graph
        onSelectAsset={(asset: string | null) => {}}
        onSelectCompany={(company: string | null) => {}}
        companies={MOCK_COMPANIES}
      ></AssetSearch>
    
    </>
    
  )
}