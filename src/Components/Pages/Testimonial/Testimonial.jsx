import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const animation = { duration: 5000, easing: (t) => t }

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState()
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })

    useEffect(() => {
        Aos.init({
            duration: 400,
            offset: 300
        });
    }, []);

    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    const { user } = testimonial || {};
    const { testimonials } = user || {};
    // console.log(testimonials);

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-anchor-placement="top-center"
            className=' p-5 md:p-20 w-[80%] mx-auto'>
            {/* testimonials header section */}
            <h2 className='text-3xl font-bold border-b-[4px] border-[#ff714a] px-2 pb-2 text-white'>My testimonials</h2>
            <h4 className=" text-right text-[#aaaa] text-xl mt-1">My testimonials</h4>
            {/* my testimonials bode part */}
            <div>
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">1</div>
                    <div className="keen-slider__slide number-slide2">2</div>
                    <div className="keen-slider__slide number-slide3">3</div>
                    <div className="keen-slider__slide number-slide4">4</div>
                    <div className="keen-slider__slide number-slide5">5</div>
                    <div className="keen-slider__slide number-slide6">6</div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;