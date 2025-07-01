import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
      pageTitle?: string

    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
      pageTitle?: string

    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText, pageTitle }) => {
  return (
    <div className="container my-20 text-center mx-auto">
      <div className="max-w-[48rem] mx-auto">
        {pageTitle && <h1 className="text-6xl font-bold mb-4 font-heading">{pageTitle}</h1>}
        {children || (richText && <RichText data={richText} enableGutter={false} />)}
      </div>
    </div>
  )
}
