import Image from "next/image";

export function Pattern(){
    return (
        <div className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden">
            <Image
                src="/patterns/pattern1.png"
                alt="Pattern Background"
                fill
                className="object-cover opacity-20"
            />
        </div>
    );
} 