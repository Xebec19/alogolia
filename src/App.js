import React, {Component} from 'react'
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
} from 'react-instantsearch-dom'

const Hit = ({hit}) => 
<div className="hit">
<div className="hit-image">
<img src={hit.image}/>
</div>
<div className="hit-content">
<div className="hit-price">
${hit.price}
</div>

<div className="hit-name">
<Highlight attributeName="name" hit={hit}/>
</div>

<div className="hit-description">
<Highlight attributeName="description" hit={hit}/>
</div>

</div>
</div>

const Sidebar = () => 
<div className="sidebar">
<h5>Category</h5>
<RefinementList attributeName="categories"/>
<h5>Brand</h5>
<RefinementList attributeName="brand" withSearchBox/>
<h5>Type</h5>
<Menu attribute="type"/>
</div>

const Content = () => 
<div className="content">
<div className="Info">
<Stats/>
<SortBy
defaultRefinement="instant_search"
items={[
  {value:"instant_search", label:"Most Relevent"},
  {value:"instant-search_price_asc", label:"Lowest Price"},
  {value:"instant_search_price_desc", label:"Highest Price"}
]}
/>
</div>
<Hits hitComponent={Hit}/>
<div className="pagination">
<Pagination showList/>
</div>
</div>

class App extends Component{
  render(){
    return(
      <div>
      <InstantSearch
      apiKey="e1c15bc28fe91be13cacbeb82ca842bb"
      appId="L21XOR2WJ7"
      indexName="mysearch">
      <header>
      <img src=""/>
      <SearchBox translations={{placeholder:'Search for Products'}}/>
      </header>

      <main>
      <Sidebar/>
      <Content/>
      </main>

      </InstantSearch>
      </div>
      )
  }
}

export default App;
