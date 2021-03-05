import { NextSeo } from 'next-seo'
import { SubjectPage } from '@src/components'
import { technologyLinks } from '@src/constants/technology'

const ProofOfPower = () => {
  return (
    <>
      <NextSeo
        title="Verus Proof of Power"
        description="VerusCoin has a unique consensus mechanism: it is 50% Proof of Work
        and 50% Proof of Stake. This means that half of newly generated
        blocks come from mining (PoW), and the other half comes from staking
        (PoS)."
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
          Verus Proof of Power: Consensus Mechanism for Security
        </h1>
        <p className="my-8 leading-normal">
          VerusCoin has a unique consensus mechanism: it is 50% Proof of Work
          and 50% Proof of Stake. This means that half of newly generated blocks
          come from mining (PoW), and the other half comes from staking (PoS).
        </p>
        <div className="grid grid-cols-1 p-8 my-8 bg-center bg-cover rounded gap-y-12 gap-x-12 md:grid-cols-2 bg-features-bg md:gap-12">
          <div className="flex flex-row items-center flex-shrink-0 space-x-3">
            <img
              src="/images/icons/50-staking.svg"
              alt="staking image"
              width="100"
            />
            <div>
              <h4 className="text-xl text-white">Proof of Stake</h4>
              <p className="mt-2 text-sm leading-relaxed text-theme-feature font-p">
                50% of all blocks are generated through staking
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center flex-shrink-0 space-x-3">
            <img
              src="/images/icons/50-mining.svg"
              alt="mining image"
              width="100"
            />
            <div>
              <h4 className="text-xl text-white">Proof of Work</h4>
              <p className="mt-2 text-sm leading-relaxed text-theme-feature font-p">
                50% of all blocks are generated through mining
              </p>
            </div>
          </div>
        </div>
        <p className="my-8 leading-normal ">
          Verus’ staking algorithm{' '}
          <a
            className="underline external text-bluebutton-default"
            href="https://medium.com/veruscoin/how-verus-solved-nothing-at-stake-and-weak-subjectivity-proof-of-stake-problems-b4dd6a85086e"
          >
            solves the two major theoretical issues undermining other PoS
            systems
          </a>
          , “nothing at stake” and “weak subjectivity” by leveraging its smart
          transaction capabilities to remove any incentive to attempt cheating,
          making it a losing proposition.
        </p>
        <p className="my-8 leading-normal">
          This mechanism is called Proof of Power or VerusPoP and provides a
          further decentralizing effect on the network, incentivizing holders to
          keep nodes online to support the network. Even if a change in network
          hashrate happens, the PoW/PoS ratio stays the same: 50/50%.
        </p>
        <p className="my-8 leading-normal">
          To successfully attack the VerusCoin blockchain, more than 50% of the
          validation power is needed, called Chain Power. On top of that,
          VerusCoin utilizes Komodo’s delayed Proof of Work. This means the
          chain is constantly being notarized into the Bitcoin blockchain on
          every bitcoin block, leveraging Bitcoin’s hashrate to help defend the
          Verus network.
        </p>
        <p className="my-8 leading-normal">
          In over two years of mainnet, VerusCoin has never experienced a
          successful 51% hash attack.{' '}
          <a
            className="underline text-bluebutton-default"
            href="/docs/VerusPoP.pdf"
            target="_blank"
          >
            Learn more in the technical whitepaper of VerusPoP
          </a>
          .
        </p>
      </SubjectPage>
    </>
  )
}

export default ProofOfPower
