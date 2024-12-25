import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Review = {
  id: string;
  productName: string;
  reviewerName: string;
  rating: number;
  imageUrl: string;
};

const recentReviews: Review[] = [
  {
    id: "1",
    productName: "Wireless Earbuds",
    reviewerName: "Reviewed by Muhammad Iqbal",
    rating: 4,
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    productName: "Smart Watch",
    reviewerName: "Reviewed by Fadli Hidayatullah",
    rating: 5,
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    productName: "Bluetooth Speaker",
    reviewerName: "Reviewed by Irvan Alfajri",
    rating: 3,
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
];

export default function RecentReviews() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold">Recent Reviews</h2>
      <div className="space-y-4">
        {recentReviews.map((review) => (
          <div
            key={review.id}
            className="flex items-center space-x-4 p-4 bg-background rounded-lg shadow"
          >
            <Avatar className="w-10 h-10">
              <AvatarImage src={review.imageUrl} alt={review.productName} />
              <AvatarFallback>{review.productName.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <h3 className="font-semibold">{review.productName}</h3>
              <p className="text-sm text-muted-foreground">
                {review.reviewerName}
              </p>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
