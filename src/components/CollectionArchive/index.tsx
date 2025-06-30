import { cn } from '@/utilities/ui'
import React from 'react'

import { Card, CardPostData } from '@/components/Card'
import type { Post, Service } from '@/payload-types'

export type Props = {
  posts?: CardPostData[]
  services?: CardServiceData[]
}

export type CardServiceData = Pick<Service, 'slug' | 'categories' | 'meta' | 'title'>

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts, services } = props
  const items = posts || services || []
  const relationTo: 'posts' | 'services' = posts ? 'posts' : 'services'

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {items?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Card className="h-full" doc={result} relationTo={relationTo} showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
