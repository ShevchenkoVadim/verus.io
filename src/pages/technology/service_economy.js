import { NextSeo } from 'next-seo'
import { SubjectPage } from '@src/components'
import { technologyLinks } from '@src/constants/technology'

const ServiceEconomy = () => {
  return (
    <>
      <NextSeo
        title="Service Economy"
        description="Verus enables all to participate and benefit is an open, borderless and decentralised
        blockchain project, it is important to create value for the people
        who maintain the network; the miners and stakers."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Service Economy, economy, Privacy, VerusID, ERC-20, decentralized finance, verus signatures',
          },
        ]}
      />
      <SubjectPage
        menuList={technologyLinks}
        menuRef="/technology"
        classnames="mb-12"
      >
        <h1 className="p-0 m-0 text-2xl font-normal md:leading-tight md:text-4xl">
          Service Economy: Enable All to Participate and Benefit
        </h1>
        <p className="my-8">
          We enable all people to participate in and benefit from a blockchain
          service economy. Verus is an open, borderless and decentralised
          blockchain project, it is important to create value for the people who
          maintain the network; the miners and stakers.
        </p>
        <p className="my-8">
          Verus was launched as a public fair launch, with no premine, ICO, or
          similar event. There are no founder or developer fees. All fees are
          100% recycled through mining and staking to create the groundwork for
          a thriving economy.
        </p>
        <p className="my-8">
          The miners and stakers are competing to win the next block to collect
          its block reward. In the Verus ecosystem not only block rewards are
          added to the winning block, but also VerusID registration fees,
          conversion fees and transaction fees. These fees can outperform
          traditional block rewards. There is a lot to gain by putting computers
          to work with mining, or coins through staking.
        </p>
        <p className="my-8">
          Furthermore, when PBaaS is enabled, miners within the ecosystem can
          mine up to 22 chains simultaneously. And stake an unlimited amount of
          chains.
        </p>
        <p className="my-8">
          All in all, this makes being part of the Verus service economy a
          profitable undertaking.
        </p>
      </SubjectPage>
    </>
  )
}

export default ServiceEconomy
