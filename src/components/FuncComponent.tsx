import { useState } from 'react'

interface FuncComponentProps {
  title: string
  subTitle?: string
}

type NullOrObject = null | { name: string }

const FuncComponent = ({ title, subTitle }: FuncComponentProps) => {
  const [counter, setCounter] = useState(0)
  const [obj, setObj] = useState<NullOrObject>(null)
  // we want obj to get null as its initial value, but we want it to also
  // accept an object like this: { name: string }

  return (
    <div>
      <h3>{title}</h3>
      <p>{subTitle?.toUpperCase()}</p>
      {/* <p>{subTitle!.toUpperCase()}</p> */}
      {/* the ! operator makes TS trust you and enforces the presence
      of the optional property 'subTitle' */}
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setObj({ name: 'Stefano' })}>
        ASSIGN OBJ A VALUE
      </button>
      {obj && <h2>OBJ GOT A TRUTHY VALUE!</h2>}
    </div>
  )
}

export default FuncComponent
