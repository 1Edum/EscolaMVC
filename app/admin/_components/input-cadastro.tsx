'use client';

import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { useState, ChangeEvent, FormEvent } from 'react';

interface Field {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

interface InputCadastroProps {
  endpoint: string;
  fields: Field[];
}

const InputCadastro = ({ endpoint, fields }: InputCadastroProps) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {} as { [key: string]: string });

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    for (const field of fields) {
      if (field.required && !formData[field.name]) {
        return `Field ${field.name} is required`;
      }
    }
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      console.error(errorMessage);
      return;
    }

    console.log('Submitting form data:', formData);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', res.status);

      if (res.ok) {
        const data = await res.json();
        console.log('Response data:', data);
      } else {
        const errorData = await res.json();
        console.error('Failed to submit form:', errorData);
        setError(`Failed to submit form: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      setError('Network error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="md:grid md:grid-cols-2 flex flex-col gap-3">
        {fields.map((field) => (
          <div key={field.name}>
            <Input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
            />
          </div>
        ))}
        <Button type="submit" variant="outline" className='col-span-2 w-full hover:bg-red-700 hover:text-white'>
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default InputCadastro;
