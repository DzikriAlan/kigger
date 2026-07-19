import Image from "next/image";

export default function PrinciplesShowcase() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-divider">
      <Image
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
        alt="Studio wall covered in product sketches and wireframes"
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover"
        priority
      />
    </div>
  );
}
