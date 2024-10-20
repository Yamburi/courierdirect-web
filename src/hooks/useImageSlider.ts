import { useEffect, useState } from 'react';

interface UseImageSliderProps {
    length: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const useImageSlider = ({ length, autoPlay = true, autoPlayInterval = 5000 }: UseImageSliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    useEffect(() => {
        if (autoPlay) {
            const intervalId = setInterval(handleNext, autoPlayInterval);

            return () => clearInterval(intervalId);
        }
    }, [autoPlay, autoPlayInterval, length]);

    return { currentSlide, handleNext, handlePrev };
};

export default useImageSlider;
