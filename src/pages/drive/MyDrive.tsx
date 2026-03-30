/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useLoaderData } from 'react-router';

/**
 * Components
 */
import { FileCard } from '@/components/FileCard';

export const MyDrive = () => {
  const { files } = useLoaderData();

  return (
    <>
      <h1 className='text-2xl font-medium'>My Drive</h1>

      <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        {files.map((file, i: number) => (
          <FileCard
            file={file}
            key={i}
          />
        ))}
      </section>
    </>
  );
};
