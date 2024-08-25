import { CreateForm } from '@/components/create-form';

export default function CreateContactPage() {
  return (
    <div className="w-full max-w-[500px] mx-auto px-4 py-16">
      <h1 className="text-2xl text-center mb-2">Add New Contact</h1>
      <CreateForm />
    </div>
  );
}
