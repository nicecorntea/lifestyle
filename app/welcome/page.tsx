import { redirect } from 'next/navigation';

function Page() {
  return redirect('/welcome/introduce');
}

export default Page;
