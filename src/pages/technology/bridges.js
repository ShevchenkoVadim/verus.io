import { NextSeo } from 'next-seo'
import { SubjectPage } from '@src/components'
import { technologyLinks } from '@src/constants/technology'

const Bridges = () => {
  return (
    <>
      <NextSeo
        title="Decentralized bridges"
        description="Verus develops bridges to other cryptocurrencies. Bridges connect
        external blockchains and their currencies to the Verus blockchain."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Open Source, Privacy, VerusID, ERC-20, decentralized finance, verus signatures, bridges, decentralized bridges',
          },
        ]}
      />
      <SubjectPage
        menuList={technologyLinks}
        menuRef="/technology"
        classnames="mb-12"
      >
        <h1 className="p-0 m-0 text-2xl font-normal md:leading-tight md:text-4xl">
          Decentralized Bridges to Connect Cryptocurrencies
        </h1>
        <p className="my-8">
          Verus develops bridges to other cryptocurrencies. Bridges connect
          external blockchains and their currencies to the Verus blockchain.
          This means that users can freely transfer coins from another
          blockchain to the Verus blockchain and vice versa. The coins from the
          external blockchain are represented as tokens on the Verus blockchain.
        </p>
        <p className="my-8">
          Through bridges, value from other blockchains flow into the Verus
          ecosystem. This value (tokenized ETH and all ERC-20 tokens) can then
          utilize all the features Verus has to offer. For example storing your
          cryptocurrency under the security of a VerusID, buying fractional and
          reserve currencies, converting currencies, financing projects and much
          more.
        </p>
        <p className="my-8">
          ERC-20 tokens on the Ethereum blockchain don’t have to rely on
          exchange listings anymore. They can find instant liquidity through the
          Verus reserve currency system. They are also freed from the exorbitant
          transaction fees of the Ethereum network. Tokens created on Verus also
          become available on the Ethereum network as ERC-20 tokens, making a
          Verus token launch plus the Verus/ETH bridge one of the best ways to
          create new ERC-20 tokens!
        </p>
        <p className="my-8">
          The Ethereum/ERC-20 bridge will be the first bridge enabled, with
          others to follow. Developers who would like to build their own bridge
          to Verus are welcome to reach out for guidance via Discord.
        </p>
      </SubjectPage>
    </>
  )
}

export default Bridges
