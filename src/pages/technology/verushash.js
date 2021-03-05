import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { SubjectPage } from '@src/components'
import { technologyLinks } from '@src/constants/technology'

const VerusHash = () => {
  return (
    <>
      <NextSeo
        title="VerusHash"
        description="VerusHash 2.2 is the mining algorithm for VerusCoin. An algorithm
        developed to equalize mining equitability across hardware
        classes, and to create a naturally decentralized miner ecosystem."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Service Economy, economy, Privacy, VerusID, ERC-20, decentralized finance, verus signatures, verus hash verushash',
          },
        ]}
      />
      <SubjectPage menuList={technologyLinks} menuRef="/technology">
        <h1 className="p-0 m-0 text-2xl font-normal md:leading-tight md:text-4xl ">
          VerusHash: Algorithm for a Naturally Decentralized Miner Ecosystem
        </h1>
        <p className="my-8 leading-relaxed ">
          VerusHash 2.2 is the mining algorithm for Verus. The algorithm was
          developed to equalize mining equitability across hardware classes, and
          to create a naturally decentralized miner ecosystem.
        </p>
        <p className="my-8 leading-relaxed">
          No specialized mining equipment is necessary to mine Verus, and it can
          even be solo-mined directly from the Verus Desktop wallet with just a
          few clicks, without any additional software requirements. Beginners
          can find an even level playing field to start earning Verus.
        </p>
        <div className="grid grid-cols-1 p-8 mt-10 mb-2 bg-center bg-cover rounded bg-features-bg md:grid-cols-2 md:gap-6">
          <div className="flex flex-row items-center flex-shrink-0">
            <img src="/images/icons/CPU.png" alt="CPU image" width="100" />
            <p className="pl-3 text-lg font-semibold text-white font-p">
              Mining with a CPU is most profitable
            </p>
          </div>
          <div className="flex flex-row items-center flex-shrink-0">
            <img src="/images/icons/GPU.png" alt="GPU image" width="100" />
            <p className="pl-3 text-lg font-semibold text-white font-p">
              Mining with a GPU can be profitable
            </p>
          </div>
          <div className="flex flex-row items-center flex-shrink-0">
            <img src="/images/icons/FPGA.png" alt="FPGA image" width="100" />
            <p className="pl-3 text-lg font-semibold text-white font-p">
              There are no Bitstreams available to mine on FPGA's
            </p>
          </div>
          <div className="flex flex-row items-center">
            <img src="/images/icons/ASIC.png" alt="ASIC image" width="100" />
            <p className="pl-3 text-lg font-semibold text-white font-p">
              No ASICs are made (yet) to mine Verus
            </p>
          </div>
        </div>
        <p className="text-sm leading-normal text-gray-600 font-p">
          For actual hashrate statistics reported by our community see Discord
          channels: #cpu-hashrate, #gpu-hashrate, #fpga-hashrate.
        </p>
        <div className="justify-center w-full mt-16 mb-32 space-y-4">
          <Link href="/wallet/desktop-wallet">
            <button className="w-full px-12 py-5 text-white border-0 rounded-full text-p bg-bluebutton-default hover:bg-bluebutton-hover">
              Start solo-mining with Verus Desktop.{' '}
              <span className="text-span-4">Easy, in just a few clicks</span>
            </button>
          </Link>
          <Link href="/mining-and-staking/mining_software">
            <button className="w-full px-12 py-5 bg-transparent border border-solid rounded-full text-p border-bluetrans-default hover:border-bluebutton-default text-bluebutton-default">
              Get mining software
            </button>
          </Link>
        </div>
      </SubjectPage>
    </>
  )
}

export default VerusHash
