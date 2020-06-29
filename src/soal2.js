import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  
  render(){
    const args = [
      { nama:"Hadie",pekerjaan:"Programmer",hobi:"Menulis"},
      { nama:"Arsy",pekerjaan:"Pelajar",hobi:"Membaca"},
      { nama:"Arsyad",pekerjaan:"Bermain",hobi:"Menangis"},
      { nama:"Abduh",pekerjaan:"Ngompol",hobi:"Makan"},
    ];
    
    const content = args.map((item,index) =>
    <div key={index}>
       <p>Nama : {item.nama}</p>
      <p>Pekerjaan: {item.pekerjaan}</p>
      <p>Hobi: {item.hobi}</p>
      <hr/>
    </div>
  );
      return (
    <div className="App">
      <h1>List Data Pribadi</h1>
      {content}
    </div>
  );
  }
}

export default App;
