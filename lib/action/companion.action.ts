'use server';

import { auth } from "@clerk/nextjs/server"
import { createsupabaseClient } from "../supabase";

export const createCompanion = async (FormData: CreateCompanion) => {
            const {userId: author} = await auth();
            const supabase = createsupabaseClient();

            const {data, error} = await supabase.from('companion').insert({...FormData,author}).select();

            if (error || !data) throw new Error(error?.message || "failed to create a companion");

            return data[0];
}


