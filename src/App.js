import Card from "./components/card";
import Navbar from "./components/Navbar";

function App() {
  let arr = [
    {name:'Poornima',
    id:101,
    qlfn:'BE'},

    {name:'Manosmita',
      id:102,
      qlfn:'BE'},

    {name:'Ashu',
      id:103,
      qlfn:'MCA'},

    {name:'Sweta',
      id:104,
      qlfn:'BE'}
  ]
  return (
   <>
   <Navbar/>
   <section className='container-fluid mt-4'>
      <div className='row mt-4'>
        {arr.map((ele)=>{
          return(<Card data={ele}/>)
        })}
      </div>
   </section>
   </>
  );
}
export default App;
