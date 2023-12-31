import Link from "next/link"


function NotFound() {
  return (
    <section className="flex h-screen justify-center items-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold">Not found</h1>
            <Link href="/" className="text-slate-200 text-2xl">Volver al inicio</Link>
        </div>
    </section>
  )
}

export default NotFound