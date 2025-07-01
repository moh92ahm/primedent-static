import type { Metadata } from 'next'
import React from 'react'

import type { Page as PageType } from '@/payload-types'
import { RenderHero } from '@/heros/RenderHero'
import { getCachedDocument } from '@/utilities/getDocument'

export const metadata: Metadata = {
  title: 'Home | Primedent',
}

export default async function Page() {
  const page = (await getCachedDocument('pages', 'home')()) as PageType | null

  return (
    <div className="relative text-brand-white overflow-hidden">
      {page?.hero && page.hero.type ? (<RenderHero {...page.hero} />) : null}
      <main className="container py-24">
        <h1 className="text-3xl font-bold mb-4">Welcome to Primedent</h1>
        <p>This is a placeholder homepage. Replace this content with your own.</p>
      </main>
    </div>
  )
}
