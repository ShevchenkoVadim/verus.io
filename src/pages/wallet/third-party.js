import { NextSeo } from 'next-seo'
import { SubjectPage } from '@src/components'
import { walletLinks } from '@src/constants/wallet'

const ThirdPartyWallet = () => {
  return (
    <>
      <NextSeo
        title="Alternate Wallets"
        description="Cryptocurrency Wallets developed by the extended Verus Community that work with VRSC."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, privacy, wallet, VRSC, 3rd party wallet, third party wallet, alternative wallet',
          },
        ]}
      />
      <SubjectPage menuList={walletLinks} menuRef="/wallet" classnames="mb-40">
        <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl ">
          Alternate Wallets
        </h1>
        <p className="my-8">
          Cryptocurrency Wallets developed by the extended Verus Community that
          work with VRSC. Listing here is not necessarily an endorsement, please
          do your own due dilligence regarding the safety of using any wallet.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="box-border flex items-center flex-shrink-0 h-40 p-4 border border-solid rounded">
              <img
                src="/images/logos/coincollect-logo.png"
                className="object-contain w-full my-auto"
                alt="coincollect logo"
              />
            </div>
            <p className="pt-2 m-0 font-p text-custom-default">Mobile Only</p>
            <a
              href="http://www.coincollect.cc/"
              target="_blank"
              className="leading-relaxed underline cursor-pointer external font-p"
            >
              Go to CoinCollect website
            </a>
          </div>
          <div>
            <div className="box-border flex items-center flex-shrink-0 h-40 p-4 bg-gray-900 border border-solid rounded">
              <img
                src="/images/logos/vidulum-logo.png"
                className="object-contain w-full"
                alt="vidulum logo"
              />
            </div>
            <p className="pt-2 m-0 font-p text-custom-default">
              Desktop & Mobile
            </p>
            <a
              href="http://www.vidulum.app/"
              target="_blank"
              className="leading-relaxed underline cursor-pointer external font-p"
            >
              Go to Vidulum website
            </a>
          </div>
          <div>
            <div className="box-border flex items-center flex-shrink-0 h-40 p-4 bg-gray-800 border border-solid rounded">
              <img
                src="/images/logos/chameleon-logo.png"
                className="w-full"
                alt="chameleon logo"
              />
            </div>
            <p className="pt-2 m-0 font-p text-custom-default">Mobile Only</p>
            <a
              href="https://www.chainzilla.io/chameleonpay.html"
              target="_blank"
              className="leading-relaxed underline cursor-pointer external font-p"
            >
              Go to Chameleon website
            </a>
          </div>
        </div>
      </SubjectPage>
    </>
  )
}

export default ThirdPartyWallet
