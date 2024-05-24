import {Component} from 'react'

class EditableText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      isEditing: true,
    }

    // Binding event handlers
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  // Handler for the input change
  handleChange(event) {
    this.setState({text: event.target.value})
  }

  // Handler for the Save button click
  handleSave() {
    this.setState({isEditing: false})
  }

  // Handler for the Edit button click
  handleEdit() {
    this.setState({isEditing: true})
  }

  render() {
    const {isEditing, text} = this.state

    return (
      <div className="App">
        <h1>Editable Text Input</h1>
        {isEditing ? (
          <div>
            <input type="text" value={text} onChange={this.handleChange} />
            <button onClick={this.handleSave} type="button">
              Save
            </button>
          </div>
        ) : (
          <div>
            <p>{text}</p>
            <button onClick={this.handleEdit} type="button">
              Edit
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default EditableText
