import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export const printRating = (rating) => {
    const numOfStars = [1, 2, 3, 4, 5];
    return numOfStars.map((star, index) => {
      if (index < rating) return <AiFillStar size={15} color="#FFC94D" />;
      else return <AiOutlineStar size={15} color="#FFC94D" />;
    });
  };