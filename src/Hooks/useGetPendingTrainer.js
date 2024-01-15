import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../API/axiosPublic";

export const useGetPendingTrainer = () => {

    const { data: trainers = [], refetch } = useQuery({
        queryKey: ['pendingTrainer'],
        queryFn: async () => {
            const res = await axiosPublic(`/getPendingTrainer`)
            return res.data;
        }


    })
    return { trainers, refetch }
};

