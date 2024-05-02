import { Suspense } from 'react'
import Plants from "../../components/Plants";
import FAQ from '../../components/FAQs';

export default function Home() {
  return (
    <main className='flex flex-row gap-3'>
      <Suspense fallback={<p>Loading plants...</p>}>
      <Plants />
      </Suspense>

      <Suspense fallback={<p>Loading faqs...</p>}>
      <FAQ />
      </Suspense>

    </main>
  );
}
