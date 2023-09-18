import './App.css';

const ads_json = [{
  "ad_type": "sell",
  "text": "selling bike", "user": "bob", "date": "1/20/2023"
},
{
  "ad_type": "buy",
  "text": "buy car", "user": "eric", "date": "4/23/2023"
}]


function Filterable_Ads() {
  return (
    <div className='filterable_ads'>
      <AdType_Selector />
      <SearchBar />
      <AdsList ads={ads_json} />
    </div>
  )

}

function AdType_Selector() {
  return (
    <div className='adtype_selector'>
      <select>
        <option>Buy</option>
        <option>Sell</option>
      </select>
    </div>
  )

}

function SearchBar() {
  return (
    <div className='search_bar'>
      <label>Search:</label>
      <input type="text"></input>
    </div>
  )

}

function AdsList({ ads }) {
  function ad_json_unpacker(ad) {
    return ad.ad_type + ": " + ad.text + ". Posted by " + ad.user + " on " + ad.date
  }
  function ad_json_key(ad) {
    return ad.user + ad.text
  }
  let lis = ads.map((item) => <li key={ad_json_key(item)}>{ad_json_unpacker(item)}</li>)
  return (
    <div className='ads_list'>
      <ul>{lis}</ul>
    </div>
  )

}


function App() {
  return (
    <Filterable_Ads />
  );
}

export default App;
