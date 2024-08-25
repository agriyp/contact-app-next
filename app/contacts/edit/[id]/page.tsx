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
    <div className="w-full max-w-[500px] mx-auto px-4 py-16">
      <h1 className="text-2xl text-center mb-2">Update Contact</h1>
      <UpdateForm contact={contact} />
    </div>
  );
}
