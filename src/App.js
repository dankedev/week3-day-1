import React from 'react';
// import logo from './logo.svg';
import './App.css';
import mobil from './images/mobil.svg';
import motor from './images/motor.svg';

class ProductInfo extends React.Component{

  render(){
    const product = this.props.product;
    const cardClass = product.ready?'ProductCard':'ProductCard kosong';
    const image = product.type ==='Motor' ? motor : mobil;

    return (
      <div className={cardClass} >
          <div className="inner">
            <img src={image}/>
            <div className="ProductInfo" >
              <span>{product.nama}</span>
              <span>{product.harga}</span>
            </div>
          </div>
      </div>
    )
  }
}


class ProductTypeRow extends React.Component{
  render(){
    const type = this.props.type;
    return(
    <div className="ProductCategory">{type}</div>
    )
  }
}

class ProductCards extends React.Component{

  render(){

    const filterText = this.props.filterText;
    const readyOnly = this.props.readyOnly;

    const cards = [];
    let lastType = null;
    
    this.props.products.forEach(product => {
      console.log(product.nama.indexOf(filterText));

      if(product.nama.indexOf(filterText) === -1){
        return;
      }
      if(readyOnly && !product.ready){
        return;
      }

      if (product.type !==lastType){
        cards.push(
          <ProductTypeRow type={product.type} key={product.type} />
        )
      }
      cards.push(
        <ProductInfo product={product} key={product.nama}/>
      )
     lastType = product.type;

    });
    
    return (
      <div className="CardRow">
        {cards}
      </div>
    )
  }
}

class FilterBar extends React.Component{


  handleTextFilter = e => this.props.onFilterTextChange(e.target.value);
  handleReadyChange = e => this.props.onReadyChange(e.target.checked);

  render(){
   
    return (
      <form className="FilterForm">
        <input type="text" placeholder="Search Here" 
        value={this.props.filterText} 
        onChange={this.handleTextFilter}/>
        <label>
        <input
            type="checkbox"
            checked={this.props.readyOnly}
            onChange={this.handleReadyChange}
          />
        {' '} In stock Only</label>
        <>
       
        </>
      </form>
    )
  }
}



class FilterableProductCards extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filterText :'',
      readyOnly : false,
    }
  }

  handleFilterTextChange = text => this.setState({filterText: text});

  handleReadyChange = ready => this.setState({readyOnly:ready});

  render(){
    return(
      <>
      <FilterBar  filterText={this.state.filterText} readyOnly={this.state.readyOnly}
      onFilterTextChange={this.handleFilterTextChange}
      onReadyChange={this.handleReadyChange}
      />
      <ProductCards products={this.props.products} filterText={this.state.filterText}
      readyOnly={this.state.readyOnly}
      />
      </>
    )
  }
}

class App extends React.Component{
  
  

  render(){

    const products =[
      {type: "Mobil", harga: "Rp 148.000.000", ready: true, nama: "Brio"},
      {type: "Mobil", harga: "Rp 205.500.000", ready: true, nama: "Mobilio"},
      {type: "Mobil", harga: "Rp 252.500.000", ready: false, nama: "Jazz"},
      {type: "Motor", harga: "Rp 16.000.000", ready: true, nama: "Beat"},
      {type: "Motor", harga: "Rp 29.000.000", ready: false, nama: "PCX"},
      {type: "Motor", harga: "Rp 35.000.000", ready: true, nama: "CBR150R"}
    ];
    return (
      <div className="App">
          <FilterableProductCards products={products}/>
      </div>
    )
  }
}

export default App;
