interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSort: (sortType: string) => void;
}

const SortModal = ({ isOpen, onClose, onSort }: SortModalProps) => {
  if (!isOpen) return null;

  const sortOptions = [
    "Sort by Highest Rating",
    "Sort by Lowest Rating", 
    "Sort by A-Z",
    "Sort by Z-A"
  ];

  const handleSort = (option: string) => {
    onSort(option);
    onClose();
  };

  return (
    <div className="absolute top-full right-0 mt-2 z-50">
      <div
        className="flex flex-col justify-start items-end relative gap-4 p-4 rounded-2xl bg-white"
        style={{ boxShadow: "0px 8px 16px 0 rgba(88,60,49,0.2)" }}
      >
        {sortOptions.map((option, index) => (
          <p 
            key={index}
            className="self-stretch flex-grow-0 flex-shrink-0 w-52 text-xl font-medium text-left text-[#604926] cursor-pointer hover:text-[#746650] transition-colors"
            onClick={() => handleSort(option)}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SortModal;
