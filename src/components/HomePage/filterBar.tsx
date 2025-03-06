import React, { useRef } from "react";
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

const FilterCarousel: React.FC<HorizontalScrollFilterProps> = ({
  options,
  selectedFilter,
  onFilterSelect,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fonction pour scroller vers la gauche
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth / 3, behavior: "smooth" });
    }
  };

  // Fonction pour scroller vers la droite
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth / 3, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Flèche gauche */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-3 py-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Espace vide pour centrer le premier élément */}
        <div className="shrink-0 w-[calc(33.33%-20px)]"></div>

        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => onFilterSelect(option.id)}
            className={`shrink-0 snap-center px-5 py-2 rounded-full cursor-pointer transition-all
              ${selectedFilter === option.id ? "bg-primary text-primary-content" : "bg-base-200 hover:bg-base-300"}`}
          >
            {option.label}
          </div>
        ))}

        {/* Espace vide pour centrer le dernier élément */}
        <div className="shrink-0 w-[calc(33.33%-20px)]"></div>
      </div>

      {/* Flèche droite */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default FilterCarousel;
