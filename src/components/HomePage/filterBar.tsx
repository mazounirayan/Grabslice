import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icônes des flèches

interface FilterOption {
  id: string;
  label: string;
}

interface HorizontalScrollFilterProps {
  options: FilterOption[];
  selectedFilter: string;
  onFilterSelect: (selectedId: string) => void;
}


export default function FilterCarousel({
  options,
  selectedFilter,
  onFilterSelect,
} : HorizontalScrollFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth / 3, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth / 3, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center w-full py-4">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className=" top-1/2 p-2 rounded-full z-10"
      >
        <FaChevronLeft size={24} />
      </button>
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-4 py-4 overflow-x-auto snap-x snap-mandatory no-scrollbar w-[60%]"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => onFilterSelect(option.id)}
            className={`shrink-0 w-[32%] text-center px-5 py-2 rounded-full cursor-pointer transition-all 
              ${selectedFilter === option.id ? "bg-primary text-primary-content" : "bg-base-200 hover:bg-base-300"}`}
          >
            {option.label}
          </div>
        ))}
      </div>
      {/* Right Scroll Button */}
      <button
          onClick={scrollRight}
          className=" top-1/2 p-2 rounded-full z-10 flex-start"
        >
          <FaChevronRight size={24} />
        </button>
    </div>
  );
};