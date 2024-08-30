import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { MainLayout, Section } from '@/components/layouts'
import { DefaultHeader } from '@/components/elements'
import { SigTab } from '@/components/sections/Signatures'
import { useRouter } from 'next/router'

const SignaturesExt = () => {
  const { t } = useTranslation('signatures')
  const title = t('seo:page.signatures.title')
  const description = t('seo:page.signatures.description')
  const {query} = useRouter()
  let message = {filled: false}
  if (query) {
    if (query.data) {
      message = JSON.parse(Buffer.from(query.data, 'base64').toString())
    }
  }
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Section
          width={900}
          styles="margin-bottom: 75px !important; margin-top:75px;"
        >
          <DefaultHeader align="center">{t('heading')}</DefaultHeader>
        </Section>
        <SigTab iMessageContent={message} />
      </MainLayout>
    </>
  )
}

export default SignaturesExt
