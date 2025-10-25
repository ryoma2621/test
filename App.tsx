
import React, { useState, useCallback, useEffect } from 'react';
import slides from './constants';

const App: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                nextSlide();
            } else if (event.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [nextSlide, prevSlide]);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 font-sans select-none">
            <div className="w-full max-w-5xl aspect-[16/9] relative">
                <div className="w-full h-full bg-white rounded-xl shadow-2xl p-8 md:p-12 lg:p-16 flex items-center justify-center overflow-hidden">
                    {slides[currentSlide].content}
                </div>
                 {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="absolute top-1/2 -left-5 md:-left-7 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Previous Slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="absolute top-1/2 -right-5 md:-right-7 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Next Slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            
            <div className="flex justify-center items-center w-full max-w-5xl mt-4">
                 <span className="text-gray-600 font-medium">
                    {currentSlide + 1} / {slides.length}
                </span>
            </div>
            <footer className="text-center text-gray-500 text-sm mt-4">
                Use Arrow Keys to navigate
            </footer>
        </main>
    );
};

export default App;
