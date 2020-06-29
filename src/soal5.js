import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.inputNama = React.createRef();
    this.inputGaji = React.createRef();
    this.inputTanggalMasuk = React.createRef();

    this.inputGender = React.createRef();
    this.inputSkills = React.createRef();
    this.inputAlamat = React.createRef();
    this.inputSlip = React.createRef();
  
  }
  onSubmit = (event)=>{
    event.preventDefault();
    event.stopPropagation();  
     console.log(`
      Nama : ${this.inputNama.current.value},
      Gaji : ${this.inputGaji.current.value},
      Gender : ${this.inputGender.current.value},
      Keahlian : ${this.inputSkills.current.value},
      Alamat : ${this.inputAlamat.current.value},
     `)
  }
 
  render(){
   

      return (
    <div className="App">
      <h1>Form Laporan</h1>
         <form onSubmit={this.onSubmit}>
          <label>
            Nama<br/>
          <input defaultValue="" type="text" ref={this.inputNama}/>
          </label>
          <label>  Gaji <br/>
       <input type="number" defaultValue="" ref={this.inputGaji}/>
       </label>
       <label>  Tanggal Masuk Kerja <br/>
       <input type="date" defaultValue="" ref={this.inputTanggalMasuk}/>
       </label>
       <label>  Gender  </label>
        <div>
          <label><input type="radio"  defaultChecked={true} name="gender" value="laki2" ref={this.inputGender}/>Laki2</label>
          <label><input type="radio"  name="gender"  value="perempuan" ref={this.inputGender}/>Perempuan</label>
        </div>

        <label>Skills<br/>
   

        <select multiple={true} ref={this.inputSkills} >
        <option value="petani">Petani</option>
          <option value="pedagang">Pedagang</option>
          <option value="makelar">Makelar</option>
          <option value="supir">Supir</option>
          </select>
        </label>

        <label>Alamat <br/>
       <textarea name="alamat" ref={this.inputAlamat} placeholde="Isikan alamat disini" defaultValue=""></textarea>

        </label>
        <button type="submit" onSubmit={this.onSubmit} >Kirimkan</button>
        </form>

        
    </div>
  );
  }
}

export default App;
