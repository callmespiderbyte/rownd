import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-center py-20 bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">ROWND</h1>
      <p className="text-xl mb-8">Your tagline goes here. Placeholder text for your amazing product.</p>
      <Link
        href="#"
        className="bg-[#F5E6D3] text-black font-semibold py-2 px-6 rounded-full text-lg hover:bg-[#E6D0B3] transition-colors"
      >
        ENQUIRE NOW
      </Link>
    </header>
  )
}

