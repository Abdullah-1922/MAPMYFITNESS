import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../API/axiosPublic";

export const useGetAllClasses = () => {
    const { data:classes=[], refetch } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axiosPublic(`/getAllClasses`)
            return res.data;
        }


    })
    return { classes, refetch }
};

