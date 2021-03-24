import React, { useRef, useState } from "react";

export type FormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

const initialInputs = {
  name: "",
  description: "",
};

const Form = ({ onSubmit }: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputs, setInputs] = useState(initialInputs),
    { name, description } = inputs;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    onSubmit(inputs);
    setInputs(initialInputs);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={handleChange} ref={inputRef} />
        <input name="description" value={description} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
