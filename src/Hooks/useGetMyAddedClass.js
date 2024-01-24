import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../API/axiosPublic";

export const useGetMyAddedClass = (email) => {

    const { data: MyAddedClasses = [], refetch,isLoading } = useQuery({
        queryKey: ['MyClass',email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getMyAddedClasses/${email}`)
            return res.data;
        }
    })
    return { MyAddedClasses, refetch ,isLoading}
};

