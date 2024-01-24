import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../API/axiosPublic";

export const useGetTrainerClass = (id) => {

    const { data: trainerClasses = [], refetch,isLoading } = useQuery({
        queryKey: ['TrainerClass',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getTrainerClasses/${id}`)
            return res.data;
        }
    })
    return { trainerClasses, refetch ,isLoading}
};

