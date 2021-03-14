import React,{Component} from 'react'
/*import ReactDOM from 'react-dom'*/
import algoliasearch from 'algoliasearch'
import './App.css'
import { 
  InstantSearch, 
  SearchBox, 
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination,
  RefinementList,
  Menu
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
  )
const Hit = ({hit}) => 
<div className="hit">
  <div className="hit-image">
  <img src={hit.image}/>
  </div>
  <div className="hit-content">
  <div className="hit-price">
  {console.log(hit)}
  ${hit.price}
  </div>
  <div className='hit-name'>
    {/*<Highlight attributeName="name" hit={hit.name}/>*/}
    {hit.name}
  </div>
  <div className="hit-description">
  {hit.shortDescription}
  </div>


  </div>
</div>

const Sidebar = () => 
<div className="sidebar">
<h5>Category</h5>
<RefinementList attribute="categories"/>
<h5>Brand</h5>
<RefinementList attribute="brand" withSearchBox/>
<h5>Type</h5>
<Menu attributeName="type"/>
</div>


const Content = () => 
<div className="content">
<div className="info">
<Stats/>
<SortBy
defaultRefinement="instant_search"
items={[
  {value:"instant_search", label:"Most Relevent"},
  {value:"instant_search_price_asc", label:"Lowest Price"},
  {value:"instant_search_price_desc", label:"Highest Price"}
  ]}
/>
</div>
<Hits hitComponent={Hit}/>
<div className="ais-Pagination__root" style={{display:"inline"}}>
<Pagination showLast className="ais-Pagination__itemLink" />
</div>
</div>


class App extends Component{
  render(){
  return(
    <InstantSearch
  className="ais-InstantSearch"
  indexName="bestbuy"
  searchClient={searchClient}
  >
  <header className="header">
  <SearchBox translations={{placeholder:'Search for Products'}} style={{padding:"5px"}}/>
  
  </header>
  <main>
  {/*<Sidebar/>*/}
  <Content/>
  </main>
  </InstantSearch>
  )
  }
  }

export default App;