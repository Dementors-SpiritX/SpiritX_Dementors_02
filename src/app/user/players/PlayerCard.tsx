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
import { Info } from "lucide-react";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

interface PlayerCardProps {
	id: string;
	fname: string;
	lname: string;
	category: string;
	ratings: string;
	image?: string;
	isSelecting: boolean;
	isSelected: boolean;
	toggleSelection: (id: string) => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
	id,
	fname,
	lname,
	category,
	ratings,
	image = "https://github.com/shadcn.png",
	isSelecting,
	isSelected,
	toggleSelection,
}) => {
	const router = useRouter();

	const handleNavigate = () => {
		router.push(`/admin/player/${id}`);
	};

	const playerQuickView = () => {};

	return (
		<Card className="flex flex-col">
			<CardHeader className="flex flex-row items-center gap-4">
				<Avatar className="w-12 h-12">
					<AvatarImage src={image} />
					<AvatarFallback>...</AvatarFallback>
				</Avatar>
				<div className="w-[120px]">
					<CardTitle className="flex flex-col">
						<span>{fname}</span>
						<span>{lname}</span>
					</CardTitle>
					<CardDescription>{category}</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<span>Ratings: {ratings}</span>
			</CardContent>
			<CardFooter className="flex flex-row gap-2">
				{!isSelecting && (
					<>
						<Button
							variant="outline"
							className="cursor-pointer"
							onClick={handleNavigate}
						>
							View
						</Button>
						<Button
							variant="outline"
							className="cursor-pointer"
							onClick={playerQuickView}
						>
							Add
						</Button>
					</>
				)}

				{isSelecting && (
					<>
						<Drawer>
							<DrawerTrigger>
								<Button
									variant="ghost"
									className="cursor-pointer"
								>
									<Info />
								</Button>
							</DrawerTrigger>
							<DrawerContent>
								<DrawerHeader>
									<DrawerTitle>
										{fname} {lname}
									</DrawerTitle>
									<DrawerDescription>
										{category}
									</DrawerDescription>
								</DrawerHeader>
								<DrawerFooter>
									<DrawerClose>
										<Button
											variant="outline"
											className="cursor-pointer"
										>
											Close
										</Button>
									</DrawerClose>
								</DrawerFooter>
							</DrawerContent>
						</Drawer>

						<input
							type="checkbox"
							checked={isSelected}
							onChange={() => toggleSelection(id)}
							className="mr-2 cursor-pointer"
						/>
					</>
				)}
			</CardFooter>
		</Card>
	);
};

export default PlayerCard;
