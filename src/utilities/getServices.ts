import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function getFooterServices(limit = 5) {
  const payload = await getPayload({ config: configPromise })
  const services = await payload.find({
    collection: 'services',
    draft: false,
    limit,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
    },
  })
  return services.docs || []
}
