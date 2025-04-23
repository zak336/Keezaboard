import Image from 'next/image'
import cat from '../../../public/memeCat.png'
import dog from '../../../public/memeDog.png'

export default function Fill() {
    return (
        <div
            style={{
                display: 'grid',
                gridGap: '8px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))',
                justifyItems: 'center',
            }}
        >
            {/* Cat Image */}
            <div className='top-20' style={{ position: 'relative', width: '100%', maxWidth: '500px', height: '700px' }}>
                <Image
                    alt="memeCat"
                    src={cat}
                    fill
                    sizes="(min-width: 808px) 50vw, 100vw"
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </div>

            {/* Dog Image + "AAyoo sus" */}
            <div className='top-20 flex flex-col items-center'>
                <div style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '600px' }}>
                    <Image
                        alt="memeDog"
                        src={dog}
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                </div>

                {/* Only shows on desktop */}
                <p className="hidden md:block text-9xl font-extrabold text-amber-500 mt-4 animate-bounce tracking-wider drop-shadow-lg">
                    AAyoo sus
                </p>
            </div>
        </div>
    )
}
