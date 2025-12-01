import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import Button from './Button'
import RoundedCorners from './RoundedCorners'

const Story = () => {
    const frameRef = useRef(null)

    const handleMouseEnter = (e) => {
        const element = frameRef.current
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX);
        const rotateX = ((y - centerY) / centerY);

        gsap.to(element, {
            duration: 0.2,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }

    const handleMouseLeave = () => {
        const element = frameRef.current
        gsap.to(element, {
            duration: 0.2,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }

    return (
        <section id="story" className='min-h-dvh w-screen bg-black text-blue-50'>
            <div className='flex size-full flex-col items-center py-10 pb-24'>
                <p className="font-general text-small uppercase md:text-[10px]">
                    The multiversal ip world
                </p>

                <div className="relative size-full" style={{ zIndex: 1 }}>
                    <AnimatedTitle
                        title="The St<b>o</b>ry of <br/> a hidden real<b>m</b>"
                        sectionID="#story"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />

                    <div className="story-img-container pointer-events-none" style={{ zIndex: 2 }}>
                        <div className="story-img-mask pointer-events-none">
                            <div className="story-img-content pointer-events-none">
                                <img
                                    ref={frameRef}
                                    src="/img/entrance.webp"
                                    alt=""
                                    className='object-contain pointer-events-auto'
                                    onMouseEnter={handleMouseEnter}
                                    onMouseUp={handleMouseLeave}
                                    onMouseMove={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                            </div>
                        </div>

                        <RoundedCorners />
                    </div>
                </div>

                {/* FIXED BUTTON BLOCK */}
                <div className="-mt-74 flex w-full justify-center md:-mt-32 md:me-44 md:justify-end relative pointer-events-auto" style={{ zIndex: 50 }}>
                    <div className="flex h-full w-fit flex-col items-center md:items-start pointer-events-auto">
                        <p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>
                            Where realms converge, lies Zentry and the boundless pillar. Disxover its secrets and shape your fate amidst infinite opportunities.
                        </p>

                        <Button
                            id="realm-button"
                            title="discover prologue"
                            containerClass="mt-5"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Story