import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ExampleForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    Swal.fire({
      title: 'Form Submitted!',
      text: `Name: ${data.name}, Email: ${data.email}, Message: ${data.message}`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input
          {...register('name', { required: 'Name is required' })}
          id="name"
          className="w-full p-2 border rounded"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          id="email"
          className="w-full p-2 border rounded"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Message</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          id="message"
          className="w-full p-2 border rounded"
        ></textarea>
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default ExampleForm;