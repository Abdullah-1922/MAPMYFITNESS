import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../API/axiosPublic";

export const useGetVerifiedTrainer = () => {
    const { data: trainers = [], refetch } = useQuery({
        queryKey: ['verifiedTrainer'],
        queryFn: async () => {
            const res = await axiosPublic(`getVerifiedTrainer`)
            return res.data;
        }


    })
    return { trainers, refetch }
};

