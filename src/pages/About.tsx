import React from "react";
import Nav from "../components/Nav";
import Counter from "../components/Counter";
import "../CSS/boxicons/css/boxicons.min.css";
 import Skill from "../components/skill";
const About = () => {
  return (
    <>
      <div className="bg-black">
        {/* Top title start */}
        <div className="container flex items-center mx-auto mt-auto 2xl:w-[1140px]">
          <h1 className="text-[36px] font-bold font-[Poppins,sans-serif] mr-auto p-[8px]">
            <a href="/" className="text-white">
              SongJuanJuan
            </a>
          </h1>
          <Nav />
        </div>
        {/* Top title end */}
      </div>
      {/* Section */}
      <div className="container mx-auto bg-black 2xl:w-[1140px] mt-[30px] p-[30px] pb-[30px]">
        <h2 className="text-[14px] font-medium text-[#aaaaaa] tracking-[2px] after:content-[''] after:w-[120px] after:h-[1px] after:inline-block after:bg-green-600 after:ml-[4px] after:mb-[3px]">
          ABOUT
        </h2>
        <p className="text-white text-[36px] font-bold mb-[15px]">
          LEARN MORE ABOUT ME
        </p>
        {/* Section Contants */}
        <div className="grid grid-cols-12 ">
          <div className="col-span-4 pr-[24px]">
            <img src="me.jpg" alt="not found" className="w-[100%]" />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-[26px] text-[#18d26e] font-[Raleway, sans-serif] mb-[8px]">
              Blockchain Specialist & Full Stack Expert
            </h2>
            <div className="flex grid grid-cols-2 ">
              <div className="col-span-1">
                <ul>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Birthday:</strong> 20 Jan
                    1991
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Website:</strong>{" "}
                    https://github.com/jeydev310
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Phone:</strong> +86 182 4255
                    0239
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">City:</strong> City :
                    Shenyang, LiaoNing, China
                  </li>
                </ul>
                <br />
              </div>
              <div className="col-span-1">
                <ul>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Age:</strong> 31
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Degree:</strong> Bachelor
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Email:</strong>{" "}
                    juanjs230@outlook.com
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Full time job:</strong>{" "}
                    Available
                  </li>
                </ul>
                <br></br>
              </div>
            </div>
            <p className="text-white">
              I have worked on many DeFi and Dapps based on several Blockchain
              platform and I have extensive 5+ years of experience in developing
              and writing Smart Contracts for Ethereum, Binance smart chain,
              Polygon, Solana, Avalanche, Fantom Blockchain.
              <br />
              I have also used Web3 to integrate several Smart contracts of
              different blockchain to frontend designs. I have 3+ years of
              experience using web3 With several blockchain networks I have
              developed several Defi and Dapps and written 30+ smart contracts
              including NFT and deployed it in blockchain networks.
              <br />
              I am expert in Uniswap, Sushiswap, Pancakeswap, Swapping tokens,
              Staking, Bridge, Yield Farming, Lottery Smart Contracts etc.
              <br />
              I have worked on multiple coding and business start-up projects
              related to blockchains and crypto assets/coins, gaining experience
              covering blockchain, consensus algorithms, Hyperledger, bitcoind,
              geth, ethminer, ethash, ERC20 tokens, JSON RPC, transactions,
              testnets, on-chain atomic swaps, cryptocurrency mining, coin
              trading, exchanges (both centralized and decentralized), and
              'crypto ecosystem' modelling. I run my own full nodes for BTC, ETH
              and ETC. I have contributed to multiple whitepapers, and been
              involved in several completed ICOs.
              <br />
              I have developed 20+ Crypto Exchange and ICO Platform and helped
              several clients raise and earn million of dollars worth of Crypto.
              <br />
              I have worked with all the popular blockchains like EOS, Stellar,
              Waves, Ripple, Bitcoin, NEO, Ethereum and Steem etc
              <br />
              <strong>PROFESSIONAL SUMMARY</strong>
              <br />
              ● 10+ years of software development experience in all phases of
              SDLC including Planning, Requirement Analysis, Design,
              Development, Testing, and Deployment
              <br />
              ● 10+ years of experience in front end development using
              HTML/HTML5, XHTML, CSS2/CSS3, JavaScript/Typescript, Bootstrap,
              jQuery, Ajax, JSON, and XML and IDE tools like VSCode, WebStorm,
              Sublime text, and Eclipse
              <br />
              ● 5 years of experience in back end development in PHP/Laravel and
              Dot Net (C#)
              <br />
              ● 5 years of experience in React, Redux, Redux-Thunk, and
              Redux-Saga
              <br />
              ● 5 years of experience in Vue.js, VueX, Vuetify.js, Nuxt.js, and
              Element UI Library
              <br />
              ● 5 years of experience in back end development in
              Node.js/Express/Nest
              <br />● 5 years of experience in developing Restful Web Services
              and Micro Services using Node/Golang
            </p>
          </div>
        </div>
        {/* Counter up */}
        <div className="grid grid-cols-12">
          <div className="col-span-3 text-white bg-white/[.08] text-center mr-[20px] rounded-[7px] p-[20px] relative mt-[35px]">
            <i className="icofont-simple-smile text-[#18d26e] absolute top-[-25px] left-[30%] translate-x-[50%] text-[24px] p-[12px] rounded-[50px] text-[#18d26e] bg-white/[.1]"></i>
            <Counter ed="23" index={1}></Counter>
            <p className="text-[20px] pb-[1rem]">Happy Client</p>
          </div>
          <div className="col-span-3 text-white bg-white/[.08] text-center mr-[20px] rounded-[7px] p-[20px] relative mt-[35px]">
            <i className="icofont-document-folder text-[#18d26e] absolute top-[-25px] left-[30%] translate-x-[50%] text-[24px] p-[12px] rounded-[50px] text-[#18d26e] bg-white/[.1]"></i>
            <Counter ed="42" index={2}></Counter>
            <p className="text-[20px] pb-[1rem]">Projects</p>
          </div>
          <div className="col-span-3 text-white bg-white/[.08] text-center mr-[20px] rounded-[7px] p-[20px] relative mt-[35px]">
            <i className="icofont-live-support text-[#18d26e] absolute top-[-25px] left-[30%] translate-x-[50%] text-[24px] p-[12px] rounded-[50px] text-[#18d26e] bg-white/[.1]"></i>
            <Counter ed="1463" index={3}></Counter>
            <p className="text-[20px] pb-[1rem]">Hours of Support</p>
          </div>
          <div className="col-span-3 text-white bg-white/[.08] text-center mr-[20px] rounded-[7px] p-[20px] relative mt-[35px]">
            <i className="icofont-users-alt-5 text-[#18d26e] absolute top-[-25px] left-[30%] translate-x-[50%] text-[24px] p-[12px] rounded-[50px] text-[#18d26e] bg-white/[.1]"></i>
            <Counter ed="3" index={4} />
            <p className="text-[20px] pb-[1rem]">Hard Workers</p>
          </div>
        </div>

        {/* counter up End */}
        <h2 className="text-[14px] font-medium text-[#aaaaaa] tracking-[2px] after:content-[''] after:w-[120px] after:h-[1px] after:inline-block after:bg-green-600 after:ml-[4px] after:m-[2px] m-[20px] ml-0">
          SKILLS
        </h2>
        <div className="grid grid-cols-12">
          <div className="col-span-6 p-[12px]">
            {" "}
            <Skill title="REACT JS" target="100" />
            <Skill title="VUE JS" target="100" />
            <Skill title="ANGULAR" target="95" />
            <Skill title="NODE JS" target="100" />
            <Skill title="PHP" target="100" />
            <Skill title="lARAVEL" target="100" />
            <Skill title="GOLANG" target="90" />
            <Skill title="AWS" target="90" />
            <Skill title="FIGMA" target="100" />
          </div>
          <div className="col-span-6 p-[12px]">
            {" "}
            <Skill title="REACT NATIVE" target="100" />
            <Skill title="JAVA/KOTLIN" target="80" />
            <Skill title="SWIFT" target="80" />
            <Skill title="C#" target="80" />
            <Skill title="QT" target="80" />
            <Skill title="MONGODB" target="100" />
            <Skill title="MYSQL" target="90" />
            <Skill title="DOCKER" target="90" />
            <Skill title="ADOBE XD" target="100" />
          </div>
        </div>
      </div>
      <div className="pb-[40px]"></div>
    </>
  );
};

export default About;
