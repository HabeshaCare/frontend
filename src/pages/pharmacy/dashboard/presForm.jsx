import React from 'react';
import 'tailwindcss/tailwind.css';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PrescriptionCard from "./prescription"
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
    // alert(`Input: ${this.state.input}`);
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
            className="flex-grow px-6 py-2 text-lg border-2 border-blue-500 rounded-l-3xl focus:outline-none focus:border-blue-800 transition-all duration-300"
          />
          <Dialog>
            <DialogTrigger>
              <button className="bg-blue-500 text-white px-4 py-2  mr-4 h-14 rounded-r-3xl">Search</button>
            </DialogTrigger>
            <DialogContent className="lg:w-1/2">
              <DialogHeader>
                {/* <DialogTitle>Result form</DialogTitle> */}
                <DialogDescription>
                  <PrescriptionCard />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog />

        </div>
      </form>
    );
  }
}



export default FormComponent;
