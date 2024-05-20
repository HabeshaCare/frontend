import React from 'react';
import 'tailwindcss/tailwind.css';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ input: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input: ${this.state.input}`);
  }

  render() {
    const { placeholder } = this.props;

    return (
      <form className="flex items-center mt-12 w-full justify-center" onSubmit={this.handleSubmit}>
        <div className="w-3/5 flex">
          <input 
            type="text" 
            value={this.state.input} 
            onChange={this.handleChange} 
            placeholder={placeholder} 
            className="flex-grow px-6 py-2 text-lg border-2 border-blue-500 rounded-l focus:outline-none focus:border-blue-800 transition-all duration-300"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded-r text-lg hover:bg-blue-700 active:bg-blue-700 focus:outline-none transition-all duration-300"
          >
            view 
          </button>
        </div>
      </form>
    );
  }
}

// Usage example
const App = () => (
  <FormComponent placeholder="Enter patient id ..." />
);

export default App;
