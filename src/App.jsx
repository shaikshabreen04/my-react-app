import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './welcome.jsx'
import Hello from  './hello.jsx'
import Image from   './logo.jsx'
import Table from   './table.jsx'
import Page from   './page.jsx'
import Options from  './options.jsx'
import Hii     from   './hii.jsx'
import Greeting from './greeting.jsx'
//import Student from  './multiple.jsx'
import Greet from './greet.jsx'
import Welcome3 from './component.jsx'
import Welcomemsg from './prop.jsx' 
import Employee from './employee.jsx'
import ProductCard from './product.jsx'  
import GreetingMessage from './message.jsx' 
import Stud from './std.jsx'
import Welcome4 from './default.jsx'
import Counter from './counter.jsx'
import NameChanger from './namechanger.jsx' 
import NameInput from './nameinput.jsx' 
import Calculator from './addition.jsx' 
import Prime from './prime number.jsx' 
import EvenOdd from './evenodd.jsx' 
import Factorial from './factorial.jsx'
import CourseApp from './fees.jsx'  
import Dashboard from './components/DashBoardMain.jsx'  
import Student from './student.jsx'
import Students from './marks.jsx'  
import StudentCol from './studentcol.jsx' 
import StudentFile from './file.jsx'
import StudentAPI from './useeffect.jsx'  
import StudentOnline from './online.jsx'
import ApiErrorExample2 from './apierrorhandling.jsx'
import ScrollbarExample from './scrollbar.jsx'
function App() {
  const names = ["Phaneendra", "Kishore", "Suresh"];

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {names.map(name => (
<h2>{name}</h2>
))}
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Image /> */}
      </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Welcome />
      <Hello />
      <Table />
      <Page />
      <Options />
      <Hii />
      <Greeting name ="shabreen" />
      <Student name="Shabreen" course ="React" />
      <Greet name="sankalpai" />
      <Welcome3 />
      <Welcomemsg name="Shabreen" city="Bangalore" />
      <Employee name="shabreen" department="Engineering" salary="50000" />
      <ProductCard title="Samsung Galaxy S21" Brand="Samsung" price="30000" />
      <GreetingMessage timeOfDay="Morning" username="Shabreen" />
      <Stud name="Shabreen" course="React" m1={85} m2={90} m3={95} />
      <Welcome4 firstname="Shabreen" lastname="Shaik" />
      <Counter />
      <NameChanger />
      <NameInput />
      <Calculator />  
      <Prime />  
      <EvenOdd /> 
      <Factorial />
      <CourseApp /> */}
      {/* <Dashboard /> */}
      <Student />
      <Students />
      <StudentCol />
      <StudentFile />
      <StudentAPI />
      <StudentOnline />
      <ApiErrorExample2 />
      <ScrollbarExample />  
      
      </> 

  )
}


export default App
