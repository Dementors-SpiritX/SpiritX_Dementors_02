"use client";

import { useRouter } from "next/navigation";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface PlayerCardProps {
	id: string;
	name: string;
	category: string;
	ratings: string;
	image?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
	id,
	name,
	category,
	ratings,
	image = "https://github.com/shadcn.png",
}) => {
	const router = useRouter();

	const handleNavigate = () => {
		router.push(`/user/player/${id}`);
	};

	return (
		<Card className="flex flex-col">
			<CardHeader className="flex flex-row items-center gap-4">
				<Avatar className="w-10 h-10">
					<AvatarImage src={image} />
					<AvatarFallback>...</AvatarFallback>
				</Avatar>
				<div className="w-[120px">
					<CardTitle>{name}</CardTitle>
					<CardDescription>{category}</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<span>Ratings: {ratings}</span>
			</CardContent>
			<CardFooter className="flex flex-row gap-2">
				<Button
					variant="outline"
					className="cursor-pointer"
					onClick={handleNavigate}
				>
					View
				</Button>
				<Button variant="outline" className="cursor-pointer">
					Add
				</Button>
			</CardFooter>
		</Card>
	);
};

export default PlayerCard;
