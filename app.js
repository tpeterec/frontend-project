let $body = $("body");
let $results = $("#results");
// accessing the body of the document constantly. Will not change
const summary = {
  Bitcoin:
    " Market cap: $502.0 billion\nCreated in 2009 by Satoshi Nakamoto, Bitcoin (BTC) is the original cryptocurrency. As with most cryptocurrencies, BTC runs on a blockchain, or a ledger logging transactions distributed across a network of thousands of computers. Because additions to the distributed ledgers must be verified by solving a cryptographic puzzle, a process called proof of work, Bitcoin is kept secure and safe from fraudsters.\nBitcoin’s price has skyrocketed as it’s become a household name. In May 2016, you could buy one Bitcoin for about $500. As of Mar. 14, 2023, a single Bitcoin’s price was around $25,985. That’s a growth of 5,097%.",
  Ethereum:
    "Market cap: $213.7 billion\nBoth a cryptocurrency and a blockchain platform, Ethereum is a favorite of program developers because of its potential applications, like so-called smart contracts that automatically execute when conditions are met and non-fungible tokens (NFTs).\n\nEthereum has also experienced tremendous growth. From April 2016 to the end of March 2023, its price went from about $11 to around $1,746, increasing 15,773%.",
  Tether:
    "Market cap: $73.2 billion\nUnlike some other forms of cryptocurrency, Tether (USDT) is a stablecoin, meaning it’s backed by fiat currencies like U.S. dollars and the Euro and hypothetically keeps a value equal to one of those denominations. In theory, this means Tether’s value is supposed to be more consistent than other cryptocurrencies, and it’s favored by investors who are wary of the extreme volatility of other coins.",
  "USD Coin":
    "Market cap: $39.4 billion\nLike Tether, USD Coin (USDC) is a stablecoin, meaning it’s backed by U.S. dollars and aims for a 1 USD to 1 USDC ratio. USDC is powered by Ethereum, and you can use USD Coin to complete global transactions.",
  Cardano:
    "Market cap: $12.4 billion\nSomewhat later to the crypto scene, Cardano (ADA) is notable for its early embrace of proof-of-stake validation. This method expedites transaction time and decreases energy usage and environmental impact by removing the competitive, problem-solving aspect of transaction verification in platforms like Bitcoin. Cardano also works like Ethereum to enable smart contracts and decentralized applications, which ADA, its native coin, powers.\n\nCardano’s ADA token has had relatively modest growth compared to other major crypto coins. In 2017, ADA’s price was $0.02. As of Mar. 14, 2023, its price was at $0.36. This is an increase of 1,685%.",
  Polygon:
    "Market cap: $10.7 billion\nFounded in 2017, Polygon—formerly known as Matic Network—is a relatively popular crypto. It’s dubbed “Ethereum’s internet of blockchains.” Maybe that’s why MATIC supports more than 7,000 decentralized applications (dApps).\n\nPolygon has also experienced tremendous growth since its first launch. The initial price of MATIC when it first launched was $0.00263. Today MATIC trades at $1.22, a 46,291% gain.",
  Dogecoin:
    "Market cap: $10.0 billion\nDogecoin was famously started as a joke in 2013 but rapidly evolved into a prominent cryptocurrency thanks to a dedicated community and creative memes. Unlike many other cryptos, there is no limit on the number of Dogecoins that can be created, which leaves the currency susceptible to devaluation as supply increases.\n\nDogecoin’s price in 2017 was $0.0002. By March 2023, its price was at $0.08, up 37,500%.",
  "Binance USD":
    "Market cap: $8.4 billion\nBinance USD (BUSD) is a stablecoin that Paxos and Binance founded to create a cryptocurrency backed by the U.S. dollar. To maintain this value, Paxos holds an amount of U.S. dollars equal to the total supply of BUSD. As with other stablecoins, BUSD gives traders and crypto users the ability to engage in transactions with other crypto assets while minimizing the risk of volatility.",
};
// The summary object was created, because my info was obtained from Forbes.
// They do not have a n API. So, I manyally implemented the summaries for
// each currency and called on the object key down below to create my
// summary for each currency.

const topEightCode = [
  "BTC",
  "ETH",
  "USDT",
  "USDC",
  "ADA",
  "MATIC",
  "DOGE",
  "BUSD",
];
// This array of 8 currencies was obtained from the coinbase API and research
// from Forbes confirmed these as the top 8 currencies as of March 2023

$(document).ready(function () {
  $.get(`https://api.coinbase.com/v2/currencies/crypto/`, (nameData) => {
    parseData(nameData);
  });
});
//My name data function calls upon my parse data function to first call the api
// link that has the names of each currency. My function, 'parseData' will
// then use that filter to further only access the other link with the
// follow on .$get request to loop through the arrays and only further
// take that data of the spot price of each cryptocurrency
function parseData(data) {
  for (let i = 0; i < 253; i++) {
    for (let j = 0; j < topEightCode.length; j++) {
      if (topEightCode[j] === data.data[i].code) {
        $.get(
          `https://api.coinbase.com/v2/prices/${data.data[i].code}-USD/spot`,
          (priceData) => {
            let coin = data.data[i];
            let $resultcard = $('<div class ="resultcard" ></div>');
            let $h2 = $(`<h2 class = "Cryptocurrency_Name">${coin.name}</h2>`);
            let $h3 = $(
              `<h3 class = "Cryptocurrency Ticker">Ticker: ${coin.code}</h3>`
            );
            let $h4 = $(
              `<h4 class = "Crypto Price">Current Spot Price in USD: $${priceData.data.amount}</h4>`
            );
            let $summary = $(
              `<div class="card-summmary">About: ${
                summary[coin.name]
              } Below is the spot price of ${
                coin.name
              } for the past year.</div>`
            );
            $h4.append($summary);
            $resultcard.append($h2);
            $resultcard.append($h3);
            $resultcard.append($h4);
            $results.append($resultcard);
          }
        );
        // console.log(
        //   $.get(`https://api.coinbase.com/v2/prices/BTC-USD/historic?days=76`)
        // );
      }
    }
  }
}

$("#select").change(function () {
  $(".resultcard").show();
  let targetName = $(this).val();
  for (let k = 0; k < $results.children().length; k++) {
    //console.log($($results.children()[k]).find(".Cryptocurrency_Name").text());
    let cardName = $($results.children()[k])
      .find(".Cryptocurrency_Name")
      .text();
    if (targetName === cardName) {
      $("#title").empty();
      $("#title").append(`Current Currency: ${cardName}`);
    }
    if (targetName !== cardName) {
      $($results.children()[k]).hide();
    }
  }
});

