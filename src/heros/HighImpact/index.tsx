'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { FormBlock } from '@/blocks/Form/Component'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText, form }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <div className="relative text-brand-white min-h-screen h-screen flex flex-col">
      {/* Hero Section (75%) */}
      <section className="flex-1 basis-3/4 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto w-full h-full px-6 gap-8 items-center">
          {/* Left: RichText & CTA */}
          <div className="flex-1 text-center md:text-left md:max-w-md z-10 flex flex-col justify-center items-center md:items-start">
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex justify-center md:justify-start gap-4">
                {links.map(({ link }, i) => (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Right: Doctor Image */}
          <div className="flex-1 flex justify-center md:justify-end w-full md:max-w-2xl">
            {media && typeof media === 'object' && (
              <Media
                imgClassName="object-contain w-full h-auto max-h-[60vh]"
                priority
                resource={media}
              />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section (25%) */}
      <section className="basis-1/4 flex  items-stretch bg-brand-dark w-full">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-stretch px-6 py-8 gap-8">
          {/* Left: CTA RichText */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            {/* Replace with actual CTA richText if available */}
            <div className="text-lg text-brand-white">
              {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
            </div>
          </div>
          {/* Right: Form */}
          <div className="flex-1 flex items-center justify-center md:justify-end">
            {/* Use FormBlock from blocks */}
            {/* TODO: Replace 'dummyForm' with an actual FormType object */}
            {form && typeof form === 'object' && <FormBlock enableIntro={false} form={form as any} />}
          </div>
        </div>
      </section>
    </div>
  )
}
