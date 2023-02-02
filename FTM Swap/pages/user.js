import { getSession, signOut } from "next-auth/react";
import Moralis from "moralis";
import { useState } from "react";
import axios from "axios";
import { useSendTransaction } from "wagmi";

function User({ user, balance }) {
  const [fromToken] = useState("0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE");
  const [toToken, setToToken] = useState(
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
  ); //USDC ERC20 Contract
  const [value, setValue] = useState("1000000000000000000");
  const [valueExchanged, setValueExchanged] = useState("");
  const [valueExchangedDecimals, setValueExchangedDecimals] = useState(1e18);
  const [to, setTo] = useState("");
  const [txData, setTxData] = useState("");


  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
      request: {
          from: user.address,
          to: String(to),
          data: String(txData),
          value: String(value),
      },
})


  function changeToToken(e){
    setToToken(e.target.value);
    setValueExchanged("");
  }

  function changeValue(e){
    setValue(e.target.value * 1E18);
    setValueExchanged("");
  }

  //https://api.1inch.io/v5.0/250/quote?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0x04068da6c83afcfa0e13ba15a6696662335d5b75&amount=10000000000000000

  async function get1inchSwap(){
    const tx = await axios.get(`https://api.1inch.io/v5.0/250/swap?fromTokenAddress=${fromToken}&toTokenAddress=${toToken}&amount=${value}&fromAddress=${user.address}&slippage=5`);    
    console.log(tx.data)
    setTo(tx.data.tx.to);
    setTxData(tx.data.tx.data);
    setValueExchangedDecimals(Number(`1E${tx.data.toToken.decimals}`));
    setValueExchanged(tx.data.toTokenAmount);
    }



  return (
    <div>
      <div>User: {user.address}</div>
      <div>Your Fantom Balance: {(balance.balance / 1e18).toFixed(3)}</div>
      <select>
        <option value="0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE">
        FTM
        </option>
      </select>
      <input
        onChange={(e) => changeValue(e)}
        value={value / 1e18}
        type="number"
        min={0}
        max={balance.balance / 1e18}
      ></input>
      <br />
      <br />
      <select name="toToken" value={toToken} onChange={(e) => changeToToken(e)}>
        <option value="0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619">WETH</option>
        <option value="0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174">USDC</option>
      </select>
      <input
        value={
          !valueExchanged
            ? ""
            : (valueExchanged / valueExchangedDecimals).toFixed(5)
        }
        disabled={true}
      ></input>
      <br />
      <br />
      <button onClick={get1inchSwap}>Get Conversion</button>
      <button disabled={!valueExchanged} onClick={sendTransaction}>Swap Tokens</button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      <br />
      <br />
      <button onClick={() => signOut({ redirect: "/signin" })}>Sign out</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const response = await Moralis.EvmApi.account.getNativeBalance({
    address: session.user.address,
    chain: 0xFA,
  });

  return {
    props: { user: session.user, balance: response.raw },
  };
}

export default User;
