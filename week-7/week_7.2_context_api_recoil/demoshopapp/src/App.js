import react from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, isEvenSelector } from './store/atoms/count';

function App() {
  return (
   <div>
    {/* // put it in reoilRoot to use recoil */}
    <RecoilRoot>
      <Count/>
    </RecoilRoot>

   </div>
  );
}

function Count(){
  // to get only the value
  const count=useRecoilValue(countAtom)
  const isEven=useRecoilValue(isEvenSelector)
  return (
    <div>
      {count}
      {isEven ? <div>It is even</div>:<div>It is odd</div>}
      <Button/>
    </div>
  )
}

function Button(){
  // to get both the value and the state 
  const[count,setCount]=useRecoilState(countAtom)
  // to get just the state
  // const setCount=useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={()=>setCount(count=>count+1)}>Increase</button>
    </div>
  )
}

export default App;
