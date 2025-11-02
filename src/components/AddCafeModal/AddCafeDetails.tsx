import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useCafeForm } from "@/contexts/CafeFormContext";
import { Info } from "lucide-react";
import Price from "@/components/icons/Price";
import Food from "@/components/icons/Food";
import Seat from "@/components/icons/Seat";
import Wifi from "@/components/icons/Wifi";
import Speaker from "@/components/icons/Speaker";
import Electricity from "@/components/icons/Electricity";
import Lighting from "@/components/icons/Lighting";
import Pray from "@/components/icons/Pray";
import Smile from "@/components/icons/Smile";
import Park from "@/components/icons/Park";
import EmptyStar from "@/components/icons/EmptyStar";
import FilledYellowStar from "@/components/icons/FilledYellowStar";

interface AddCafeDetailsProps {
  onPrevious: () => void;
  onSubmit: () => void;
  loading: boolean;
}

const AddCafeDetails: React.FC<AddCafeDetailsProps> = ({ onPrevious, onSubmit, loading }) => {
  const { formData, updateFormData } = useCafeForm();

  const handleRatingChange = (field: keyof typeof formData, rating: number) => {
    updateFormData({ [field]: rating });
  };

  const isFormValid = () => {
    // Required fields: price, seat_comfort, wifi, electricity_socket
    return (
      formData.price > 0 &&
      formData.seat_comfort > 0 &&
      formData.wifi > 0 &&
      formData.electricity_socket > 0
    );
  };

  const renderStars = (field: keyof typeof formData, currentRating: number) => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => handleRatingChange(field, i)}
          className="transition-transform duration-200 hover:scale-110"
        >
          {i <= currentRating ? (
            <FilledYellowStar className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6" />
          ) : (
            <EmptyStar className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6" />
          )}
        </button>
      );
    }
    return stars;
  };

  const getRatingTooltip = (field: keyof typeof formData): string => {
    const tooltips: Record<string, string> = {
      price: "1 star = Expensive\n5 stars = Moderate\n10 stars = Affordable",
      seat_comfort: "1 star = Uncomfortable\n5 stars = Average\n10 stars = Very Comfortable",
      food_beverage: "1 star = Poor Quality\n5 stars = Decent\n10 stars = Excellent",
      hospitality: "1 star = Unfriendly\n5 stars = Friendly\n10 stars = Exceptional Service",
      parking: "1 star = No Parking\n5 stars = Limited Parking\n10 stars = Ample Parking",
      wifi: "1 star = No Wifi\n5 stars = Slow\n10 stars = Fast",
      electricity_socket: "1 star = No Sockets\n5 stars = Limited Sockets\n10 stars = Many Sockets",
      praying_room: "1 star = No Room\n5 stars = Basic Room\n10 stars = Well-Equipped Room",
      toilet: "1 star = No Toilet\n5 stars = Basic\n10 stars = Clean & Modern",
      noise: "1 star = Very Noisy\n5 stars = Moderate Noise\n10 stars = Quiet",
    };
    return tooltips[field] || "";
  };

  const renderRatingField = (
    field: keyof typeof formData,
    label: string,
    icon: React.ReactNode,
    isRequired: boolean = false
  ) => (
    <div className="space-y-2">
      <Label className="flex items-center gap-1 text-sm font-medium text-[#604926]">
        {icon}
        {label}
        {isRequired && <span>*</span>}
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="ml-1 text-[#746650] hover:text-[#604926] transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              <Info className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs whitespace-pre-line">
            <p className="text-sm">{getRatingTooltip(field)}</p>
          </TooltipContent>
        </Tooltip>
      </Label>
      <div className="flex gap-0.5 sm:gap-1 flex-wrap">
        {renderStars(field, formData[field] as number)}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {renderRatingField("price", "Price", <Price className="w-4 h-4 text-[#746650]" />, true)}
          {renderRatingField(
            "seat_comfort",
            "Seat Comfort",
            <Seat className="w-4 h-4 text-[#746650]" />,
            true
          )}
          {renderRatingField(
            "food_beverage",
            "Food and Beverage",
            <Food className="w-4 h-4 text-[#746650]" />
          )}
          {renderRatingField(
            "hospitality",
            "Hospitality",
            <Smile className="w-4 h-4 text-[#746650]" />
          )}
          {renderRatingField("parking", "Parking", <Park className="w-4 h-4 text-[#746650]" />)}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {renderRatingField("wifi", "Wifi", <Wifi className="w-4 h-4 text-[#746650]" />, true)}
          {renderRatingField(
            "electricity_socket",
            "Electric Socket",
            <Electricity className="w-4 h-4 text-[#746650]" />,
            true
          )}
          {renderRatingField(
            "praying_room",
            "Praying Room",
            <Pray className="w-4 h-4 text-[#746650]" />
          )}
          {renderRatingField("toilet", "Toilet", <Lighting className="w-4 h-4 text-[#746650]" />)}
          {renderRatingField("noise", "Noise", <Speaker className="w-4 h-4 text-[#746650]" />)}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button
          type="button"
          variant="cafe"
          onClick={onSubmit}
          disabled={!isFormValid() || loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default AddCafeDetails;
