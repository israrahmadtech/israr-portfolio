"use client";
import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabaseClient";
import toast from "react-hot-toast";

export function useRealtimeData({ tableName, showToast = true }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [fullResponse, setFullResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch data from API
    async function fetchData() {
        try {
            setLoading(true);
            const res = await fetch(`/api/${tableName}?page=${currentPage}`);
            const body = await res.json();

            if (!res.ok) throw new Error(body.message);

            setData(body.data);
            setFullResponse(body);
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // Initial + pagination fetch
    useEffect(() => {
        fetchData();
    }, [currentPage]);

    // Realtime subscription
    useEffect(() => {
        const channel = supabaseClient
            .channel(`${tableName}-realtime`)
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: tableName },
                (payload) => {
                    fetchData();
                    if (showToast) toast.success(`New ${tableName.slice(0, -1)} received`);
                }
            )
            .subscribe();

        return () => supabaseClient.removeChannel(channel);
    }, []);

    return { data, fullResponse, loading, currentPage, setCurrentPage, refetch: fetchData };
}
