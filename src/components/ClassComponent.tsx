import { Component } from 'react'

// how can we tell ClassComponent that a prop of title is expected to be received?
// well, we have to define the shape of its props object

// Array<string>

interface ClassComponentProps {
  title: string
  subTitle?: string
}

interface ClassComponentState {
  counter: number
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state: ClassComponentState = {
    counter: 0,
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.state.counter}</p>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
        >
          +
        </button>
      </div>
    )
  }
}

export default ClassComponent
