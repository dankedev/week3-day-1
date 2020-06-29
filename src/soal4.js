import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      nama:'',
      gaji:0,
      gender:'perempuan',
      skills:[],
      alamat:'',
      tanggal_masuk:''
    }
    this.onSubmit = this.onSubmit.bind(this);
  
  }
  onSubmit = (event)=>{
    event.preventDefault();  
      console.log(this.state);
  }
  onChange = (event) =>{
    const {name,value} = event.target;
    this.setState({[name]:value});
  }

  onSelect = (event) =>{
    let skills = [...this.state.skills];

    var options = event.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({skills: value});

  }

  render(){
    const {nama,gaji,gender,alamat,skills,tanggal_masuk} = this.state;

      return (
    <div className="App">
      <h1>Form Laporan</h1>
         <form onSubmit={this.onSubmit}>
          <label>
            Nama<br/>
          <input type="text" name="nama" value={nama} onChange={this.onChange}/>
          </label>
          <label>  Gaji <br/>
       <input type="number" name="gaji" value={gaji} onChange={this.onChange}/>
       </label>
       <label>  Tanggal Masuk Kerja <br/>
       <input type="date" name="tanggal_masuk" value={tanggal_masuk} onChange={this.onChange}/>
       </label>
       <label>  Gender  </label>
        <div>
          <label><input type="radio" name="gender" value="laki2" checked={gender ==='laki2'} onChange={this.onChange}/>Laki2</label>
          <label><input type="radio" name="gender"  value="perempuan" checked={gender ==='perempuan'} onChange={this.onChange}/>Perempuan</label>
        </div>

        <label>Skills<br/>
   

        <select multiple={true} value={skills} onChange={this.onSelect}>
        <option value="petani">Petani</option>
          <option value="pedagang">Pedagang</option>
          <option value="makelar">Makelar</option>
          <option value="supir">Supir</option>
          </select>
        </label>

        <label>Alamat <br/>
       <textarea name="alamat" onChange={this.onChange} value={alamat} placeholde="Isikan alamat disini"></textarea>

        </label>
        <button type="submit" onSubmit={this.onSubmit} >Kirimkan</button>
        </form>

        <div>
          <h1>Isian</h1>
        <ul>
          <li>Nama  :{nama}</li>
          <li>Gaji  :{gaji}</li>
          <li>Tanggal Masuk Kerja  :{tanggal_masuk}</li>
          <li>Gender  :{gender}</li>
          <li>Pekerjaan  :{skills.join(", ")}</li>
          <li>alamat  :{alamat}</li>
       

        </ul>
        </div>
    </div>
  );
  }
}

export default App;
