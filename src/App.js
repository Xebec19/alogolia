import React, {Component} from 'react'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight
} from 'react-instantsearch/dom'

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
<Highlight attributeName="name" hit="hit"/>
</div>
</div>
</div>

const Sidebar = () => 
<div className="sidebar">

</div>

const Content = () => 
<div className="content">
<Hits hitComponent={Hit}/>
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
