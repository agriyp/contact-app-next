import { UpdateForm } from '@/components/update-form';
import { getContactById } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function UpdateContactPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const contact = await getContactById(id);

  if (!contact) {
    notFound();
  }

  return (
    <div className="max-w-lg mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Contact</h1>
      <UpdateForm contact={contact} />
    </div>
  );
}
