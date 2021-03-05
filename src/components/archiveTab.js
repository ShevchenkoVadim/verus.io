import { useState } from 'react'
import Link from 'next/link'

const VerusIDContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-2 mb-4 text-center md:flex-row md:text-right">
        <img
          src="/images/icons/tab/verusid-tab-icon.svg"
          width="181"
          alt="VerusID Icon"
        />
      </div>
      <div className="p-3 pt-0 text-left md:pl-20 md:col-span-2">
        <div className="max-w-xl">
          <h3 className="mt-0 mb-6 font-normal md:text-2xl">
            Self-Sovereign & Decentralized Identities
          </h3>
          <p className="leading-relaxed">
            Introducing VerusID; an identity protocol with advanced
            capabilities, including friendly, human-readable names to receive,
            send and secure all cryptocurrencies.
          </p>
          <Link href="/technology/verusID">
            <button className="px-12 py-5 mt-8 text-sm bg-transparent border border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default text-bluebutton-default">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

const DefiContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-2 mb-4 text-center md:text-right md:flex-row">
        <img
          src="/images/icons/tab/currencies-tab-icon.svg"
          width="181"
          alt="DeFi Icon"
        />
      </div>
      <div className="p-3 pt-0 text-left md:pl-20 md:col-span-2">
        <div className="max-w-xl">
          <h3 className="mt-0 mb-6 font-normal md:text-2xl">
            Redefining DeFi With Reserve Currencies
          </h3>
          <p className="leading-relaxed">
            Simultaneous parallel processing of DeFi transactions allows Verus
            to advance the technology underpinning automated market makers and
            community liquidity.
          </p>
          <Link href="/technology/currencies">
            <button className="px-12 py-5 mt-8 text-sm bg-transparent border border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default text-bluebutton-default">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

const PbaasContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-2 mb-4 text-center md:text-right md:flex-row">
        <img
          src="/images/icons/tab/pbaas-tab-icon.svg"
          width="181"
          alt="Pbaas Icon"
        />
      </div>
      <div className="p-3 pt-0 text-left md:pl-20 md:col-span-2">
        <div className="max-w-xl">
          <h3 className="mt-0 mb-6 font-normal md:text-2xl ">
            A Blockchain Launch Is Just a Few Clicks Away
          </h3>
          <p className="leading-relaxed">
            Launch your own blockchain with customizable specifications, while
            using Verus infrastructure for security and continuity. PBaaS
            provides a roadmap for practically unlimited scalability.
          </p>
          <Link href="/technology/PbaaS">
            <button className="px-12 py-5 mt-8 text-sm bg-transparent border border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default text-bluebutton-default">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

const ErcContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-2 mb-4 text-center md:text-right md:flex-row">
        <img
          src="/images/icons/tab/bridge-tab-icon.svg"
          width="181"
          alt="Bridge Icon"
        />
      </div>
      <div className="p-3 pt-0 text-left md:pl-20 md:col-span-2">
        <div className="max-w-xl">
          <h3 className="mt-0 mb-6 font-normal md:text-2xl ">
            Bridges to Other Cryptocurrencies
          </h3>
          <p className="leading-relaxed">
            Through decentralized bridges, other cryptocurrencies are
            represented as tokens on the Verus blockchain.
          </p>
          <Link href="/technology/bridges">
            <button className="px-12 py-5 mt-8 text-sm bg-transparent border border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default text-bluebutton-default">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

const IndexTabWindow = () => {
  const [viewTab, setViewTab] = useState(0)
  const [radioTab, setRadioTab] = useState(null)

  const handleTabCheck = (tab) => {
    let element = document.getElementById(tab)
    let isOpen = element.checked
    if (isOpen) {
      element.checked = !isOpen
    }
    setRadioTab(tab)
  }
  const handleTabChange = (tab) => {
    setRadioTab(null)
  }
  return (
    <>
      <div className="flex-col justify-center hidden md:flex sm:flex-row">
        <a
          onClick={() => setViewTab(0)}
          className={
            'px-5 text-center text-lg p-1 border-2 border-solid border-t-0 border-r-0 border-l-0 ' +
            (viewTab === 0
              ? 'text-tablink-active border-tablink-active'
              : 'text-tablink-default border-tablink')
          }
        >
          VerusID
        </a>
        <a
          onClick={() => setViewTab(1)}
          className={
            'px-5 text-center text-lg p-1 flex-nowrap border-2 border-solid border-t-0 border-r-0 border-l-0  ' +
            (viewTab === 1
              ? 'text-tablink-active  border-tablink-active'
              : 'text-tablink-default border-tablink')
          }
        >
          Decentralized Finance
        </a>
        <a
          onClick={() => setViewTab(2)}
          className={
            'px-5 text-center cursor-pointer text-lg p-1 border-2 border-solid border-t-0 border-r-0 border-l-0 ' +
            (viewTab === 2
              ? 'text-tablink-active  border-tablink-active'
              : 'text-tablink-default border-tablink')
          }
        >
          Public Blockchains as a Service
        </a>
        <a
          onClick={() => setViewTab(3)}
          className={
            'px-5 text-center cursor-pointer text-lg p-1 border-2 border-solid border-t-0 border-r-0 border-l-0 ' +
            (viewTab === 3
              ? 'text-tablink-active  border-tablink-active'
              : 'text-tablink-default border-tablink')
          }
        >
          Bridges
        </a>
      </div>
      <div className="hidden pt-6 md:block tab-content sm:pt-24 ">
        <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-3 md:items-start">
          {viewTab === 0 && <VerusIDContent />}
          {viewTab === 1 && <DefiContent />}
          {viewTab === 2 && <PbaasContent />}
          {viewTab === 3 && <ErcContent />}
        </div>
      </div>
      <div className="md:hidden tab-content">
        <div className="w-full my-2 overflow-hidden tab b">
          <input
            className="absolute opacity-0"
            id="tab-single-one"
            type="radio"
            name="tabs2"
            value="tab-single-one"
            checked={radioTab === 'tab-single-one'}
            onChange={() => {
              handleTabChange('tab-single-one')
            }}
          />
          <label
            className="block p-5 leading-normal border-2 border-t-0 border-b-0 border-r-0 border-solid cursor-pointer border-tablink-default"
            htmlFor="tab-single-one"
            onClick={() => {
              handleTabCheck('tab-single-one')
            }}
          >
            VerusID
          </label>
          <div className="overflow-hidden leading-normal tab-content-accordion">
            <VerusIDContent />
          </div>
        </div>
        <div className="w-full my-2 overflow-hidden tab b">
          <input
            className="absolute opacity-0"
            id="tab-single-two"
            type="radio"
            name="tabs2"
            checked={radioTab === 'tab-single-two'}
            onChange={() => {
              handleTabChange('tab-single-two')
            }}
          />
          <label
            className="block p-5 leading-normal border-2 border-t-0 border-b-0 border-r-0 border-solid cursor-pointer border-tablink-default"
            htmlFor="tab-single-two"
            onClick={() => {
              handleTabCheck('tab-single-two')
            }}
          >
            Decentralized Finance
          </label>
          <div className="overflow-hidden leading-normal tab-content-accordion">
            <DefiContent />
          </div>
        </div>
        <div className="w-full my-2 overflow-hidden tab b">
          <input
            className="absolute opacity-0"
            id="tab-single-three"
            type="radio"
            name="tabs2"
            checked={radioTab === 'tab-single-three'}
            onChange={() => {
              handleTabChange('tab-single-three')
            }}
          />
          <label
            className="block p-5 leading-normal border-2 border-t-0 border-b-0 border-r-0 border-solid cursor-pointer border-tablink-default"
            htmlFor="tab-single-three"
            onClick={() => {
              handleTabCheck('tab-single-three')
            }}
          >
            Public Blockchains as a Service
          </label>
          <div className="overflow-hidden leading-normal tab-content-accordion">
            <PbaasContent />
          </div>
        </div>
        <div className="w-full my-2 overflow-hidden tab b">
          <input
            className="absolute opacity-0"
            id="tab-single-four"
            type="radio"
            name="tabs2"
            checked={radioTab === 'tab-single-four'}
            onChange={() => {
              handleTabChange('tab-single-four')
            }}
          />
          <label
            className="block p-5 leading-normal border-2 border-t-0 border-b-0 border-r-0 border-solid cursor-pointer border-tablink-default"
            htmlFor="tab-single-four"
            onClick={() => {
              handleTabCheck('tab-single-four')
            }}
          >
            Bridges
          </label>
          <div className="overflow-hidden leading-normal tab-content-accordion">
            <ErcContent />
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexTabWindow
