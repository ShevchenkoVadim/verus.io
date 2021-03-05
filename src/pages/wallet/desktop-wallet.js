import { useState, createRef, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { SubjectPage } from '@src/components'

import { walletLinks } from '@src/constants/wallet'
import { formatDateFromString, date_diff_indays } from '@src/utils/helpers'

const DesktopWallet = (props) => {
  const [showDownloads, setShowDownloads] = useState(false)
  const { name, published_at, linuxApp, winApp, macApp, armApp } = props
  const container = createRef()
  const nodeRef = createRef()

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (!nodeRef.current.contains(e.target)) {
        setShowDownloads(false)
      }
    }
    document.addEventListener('mousedown', handleBodyClick)
    return () => {
      document.removeEventListener('mousedown', handleBodyClick)
    }
  })

  return (
    <>
      <NextSeo
        title="Desktop Wallet"
        description="Verus desktop multi-coin wallet for Windows, macOS, Linux, ARM."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, VerusID, verus signatures, privacy, wallet, VRSC, verus wallet, desktop wallet, mining, staking',
          },
        ]}
      />
      <SubjectPage
        menuList={walletLinks}
        menuRef="/wallet"
        classnames="mb-40"
        classnames2="p-6 md:col-span-3"
        clean
      >
        <div className="mb-4 text-left md:text-left">
          <h1 className="p-0 m-0 text-2xl font-normal md:leading-tight md:text-4xl ">
            Verus Desktop: Multi-Coin Wallet Packed with Features
          </h1>

          <button
            onClick={() => {
              setShowDownloads(!showDownloads)
            }}
            className="inline-flex items-center px-12 py-5 mt-8 text-lg text-white border-0 rounded-full focus:outline-none bg-bluebutton-default hover:bg-bluebutton-hover"
          >
            <span className="mr-1">Download Verus Desktop</span>
            {showDownloads ? (
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform rotate-180 md:-mt-1 "
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 "
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>

          <div
            ref={nodeRef}
            className={
              showDownloads
                ? 'absolute z-30 pt-0 -mt-3 dropdown-menu block'
                : 'hidden'
            }
          >
            <ul
              className={
                ' pt-1 pb-1 pl-4 pr-4  bg-white rounded-lg shadow-menu  md:z-50 '
              }
            >
              {winApp && (
                <li className="block px-4 py-3 whitespace-nowrap">
                  <a
                    href={winApp}
                    className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline cursor-pointer whitespace-nowrap text-navlink-default hover:text-navlink-hover"
                  >
                    <img
                      className="opacity-25"
                      src="/images/logos/windows.svg"
                    />
                    <p className="pl-2 m-0">Download Windows app</p>
                  </a>
                </li>
              )}
              {macApp && (
                <li className="block px-4 py-3 whitespace-nowrap">
                  <a
                    href={macApp}
                    className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline cursor-pointer whitespace-nowrap text-navlink-default hover:text-navlink-hover"
                  >
                    <img className="opacity-25" src="/images/logos/macos.svg" />
                    <p className="pl-2 m-0">Download Mac app</p>
                  </a>
                </li>
              )}
              {linuxApp && (
                <li className="block px-4 py-3 whitespace-nowrap">
                  <a
                    href={linuxApp}
                    className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline cursor-pointer whitespace-nowrap text-navlink-default hover:text-navlink-hover"
                  >
                    <img className="opacity-25" src="/images/logos/linux.svg" />
                    <p className="pl-2 m-0">Download Linux app</p>
                  </a>
                </li>
              )}
              {armApp && (
                <li className="block px-4 py-3 whitespace-nowrap">
                  <a
                    href={armApp}
                    className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline cursor-pointer whitespace-nowrap text-navlink-default hover:text-navlink-hover"
                  >
                    <img className="opacity-25" src="/images/logos/linux.svg" />
                    <p className="pl-2 m-0">Download Linux ARM app</p>
                  </a>
                </li>
              )}
              <li className="block px-4 py-3 whitespace-nowrap">
                <a
                  href="https://wiki.verus.io/#!how-to%5Chow-to_bootstrap.md"
                  target="_blank"
                  className="flex flex-row items-center flex-shrink-0 py-2 space-x-2 no-underline cursor-pointer whitespace-nowrap text-navlink-default hover:text-navlink-hover"
                >
                  <p className="pl-2 m-0">Download Bootstrap</p>
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-6">
            Latest version: {name} <br />
            Latest release: {formatDateFromString(published_at)}{' '}
            {date_diff_indays(published_at) < 14 ? (
              <span className="px-2 py-1 mx-1 font-bold text-red-600 whitespace-nowrap">
                New Update
              </span>
            ) : null}
          </p>
        </div>
        <div className="flex justify-center max-w-3xl">
          <img
            src="/images/icons/VerusDesktopImg3.png"
            srcSet="/images/icons/VerusDesktopImg3-p-500.png 500w, /images/icons/VerusDesktopImg3-p-800.png 800w, /images/icons/VerusDesktopImg3-p-1080.png 1080w, /images/icons/VerusDesktopImg3.png 1600w"
            sizes="(max-width: 479px) 43vw, (max-width: 767px) 51vw, (max-width: 991px) 54vw, 56vw"
            alt=""
          />
        </div>
        <div className="max-w-4xl mt-16 space-y-24 text-left sm:text-left">
          <div className="max-w-2xl space-y-16">
            <div className="flex flex-row items-center space-x-8">
              <img
                src="/images/icons/safe-icon.svg"
                alt="Safe Icon"
                width="50"
              />
              <div className="">
                <h2 className="mb-2 text-2xl font-normal">Easy & Secure</h2>
                <p className="leading-relaxed text-md">
                  Verus Desktop is created for beginners and experts in mind.
                  Easy to use yet advanced in capabilities. Security has highest
                  priority that's why all Verus software is open-source.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-8">
              <img
                src="/images/icons/verusid-icon.svg"
                alt="VerusID Icon"
                width="50"
              />
              <div>
                <h2 className="mb-2 text-2xl font-normal">
                  VerusID Capabilities
                </h2>
                <p className="leading-relaxed text-md">
                  Create and manage self-sovereign identities on the blockchain.
                  Use VerusID as friendly crypto name, sign and verify files and
                  message and many more features.
                </p>
              </div>
            </div>
          </div>
          <div className="grid items-start grid-cols-1 p-12 bg-center bg-cover rounded gap-y-12 gap-x-12 bg-features-bg sm:grid-cols-2">
            <div className="flex flex-row items-center flex-shrink-0 space-x-6">
              <img
                src="/images/icons/bitcoin-icon.svg"
                alt="BTC icon"
                width="25"
              />
              <div className="ml-2">
                <h3 className="mb-0 text-lg font-semibold text-white font-p">
                  Multi-Currency Wallet
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                  Store hundreds of coins and tokens!
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center flex-shrink-0 space-x-6">
              <img
                src="/images/icons/mining-staking-icon.svg"
                alt="Mining and Staking icon"
                width="25"
              />
              <div className="ml-2">
                <h3 className="mb-0 text-lg font-semibold text-white font-p">
                  Mining & Staking
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                  Earn VRSC with Verus Desktop. Mine and stake easily from
                  within your wallet.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center flex-shrink-0 space-x-6">
              <img
                src="/images/icons/converting-icon.svg"
                alt="Converting icon"
                width="25"
              />
              <div className="ml-2">
                <h3 className="mb-0 text-lg font-semibold text-white font-p ">
                  Converting{' '}
                  <span className="text-green-500">TESTNET ONLY</span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                  Convert from one currency to another through multi-reserve
                  currencies.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center flex-shrink-0 space-x-6">
              <img
                src="/images/icons/currencies-icon.svg"
                alt="Currencies icon"
                width="25"
              />
              <div className="ml-2">
                <h3 className="mb-0 text-lg font-semibold text-white font-p">
                  Currencies{' '}
                  <span className="text-green-500">TESTNET ONLY</span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-theme-feature">
                  Create multi-reserve and fractional currencies with a few
                  clicks.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="flex justify-center max-w-xl space-x-8">
              <img
                src="/images/icons/time-icon.svg"
                alt="time-icon"
                width="30"
              />
              <p className="text-xl ">
                Jumpstart your native Verus wallet and save hours on
                synchronizing.{' '}
                <a
                  href="https://wiki.verus.io/#!how-to%5Chow-to_bootstrap.md"
                  target="_blank"
                  className="underline external font-p text-bluebutton-default"
                >
                  Download Bootstrap
                </a>
              </p>
            </div>
          </div>
          <div className="p-8 space-y-8 bg-gray-100">
            <p className="text-sm text-gray-500">
              This is experimental and unfinished software. Use at your own
              risk! No warranty for any kind of damage! Permission is hereby
              granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software"), to
              deal in the Software without restriction, including without
              limitation the rights to use, copy, modify, merge, publish,
              distribute, sublicense, and/or sell copies of the Software, and to
              permit persons to whom the Software is furnished to do so, subject
              to the following conditions:The enclosed copyright notice and this
              permission notice shall be included in all copies or substantial
              portions of the Software.
            </p>
            <p className="text-sm text-gray-500">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>
      </SubjectPage>
    </>
  )
}

export default DesktopWallet

export async function getServerSideProps(context) {
  let result = await fetch(
    'https://api.github.com/repos/VerusCoin/Verus-Desktop/releases/latest'
  )
  let latestDesktop = await result.json()
  let linuxApp,
    winApp,
    macApp,
    armApp,
    name,
    published_at = ''

  name = latestDesktop.name
  published_at = latestDesktop.published_at
  latestDesktop.assets.map((asset) => {
    if (asset.name.includes('arm64')) {
      armApp = asset.browser_download_url
    }

    if (asset.name.includes('Windows')) {
      winApp = asset.browser_download_url
    }

    if (asset.name.includes('MacOS')) {
      macApp = asset.browser_download_url
    }

    if (asset.name.includes('x86_64')) {
      linuxApp = asset.browser_download_url
    }
  })

  return {
    props: { name, published_at, linuxApp, winApp, macApp, armApp },
  }
}

{
  /* <br />
              <a
                href="https://github.com/VerusCoin/VerusCoin/releases/latest"
                target="_blank"
                className="no-underline external text-bluebutton-default"
              >
                Bootstrap Install Instruction
              </a> */
}
