import { getPayload } from 'payload'
import buildConfig from '../../payload.config'

export default async function Portfolio() {
  const payload = await getPayload({ config: buildConfig })
  const portfolio = await payload.findGlobal({
    slug: 'portfolio',
  })

  return portfolio
}
