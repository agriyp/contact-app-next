'use client';

import { saveContact } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from './buttons';

export const CreateForm = () => {
  const [state, formAction] = useFormState(saveContact, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Inser your fullname ..."
          />
          <div id="name-errors" aria-live="polite" aria-atomic>
            <p className="mt-2 text-sm text-red-600">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
            Phone Number
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Inser your phone number ..."
          />
          <div id="phone-errors" aria-live="polite" aria-atomic>
            <p className="mt-2 text-sm text-red-600">{state?.Error?.phone}</p>
          </div>
        </div>
        <div id="message-errors" aria-live="polite" aria-atomic>
          <p className="mt-2 text-sm text-red-600">{state?.message}</p>
        </div>
        <SubmitButton label="save" />
      </form>
    </div>
  );
};
