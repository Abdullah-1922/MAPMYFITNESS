import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../API/axiosPublic";

export const useGetTrainerClass = (email) => {

    const { data: trainerClasses = [], refetch,isLoading } = useQuery({
        queryKey: ['TrainerClass'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getTrainerClasses/${email}`)
            return res.data;
        }


    })

    return { trainerClasses, refetch ,isLoading}
};

