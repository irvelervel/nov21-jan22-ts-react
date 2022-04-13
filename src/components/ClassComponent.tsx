import { Component } from 'react'

// how can we tell ClassComponent that a prop of title is expected to be received?
// well, we have to define the shape of its props object

// Array<string>

interface ClassComponentProps {
  title: string
}

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    )
  }
}

export default ClassComponent
