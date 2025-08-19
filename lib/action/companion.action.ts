'use server';

import { auth } from "@clerk/nextjs/server"
import { createsupabaseClient } from "../supabase";

export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = createsupabaseClient();

    const { data, error } = await supabase.from('companion').insert({ ...formData, author }).select();

    if (error || !data) throw new Error(error?.message || "failed to create a companion");

    return data[0];
}

export const getAllCompanions = async({ limit = 10, page = 1, subject, topic }: GetAllCompanions) => {
    const supabase = createsupabaseClient();
    
    let query = supabase.from('companion').select('*'); // Add '*' to select all columns

    if (subject && topic) {
        query = query
            .eq('subject', subject) // Use exact match instead of ilike for subject
            .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
    }
    else if (subject) {
        query = query.eq('subject', subject); // Use exact match for subject
    }
    else if (topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
    }
    
    query = query.range((page - 1) * limit, page * limit - 1);
    
    const { data: companion, error } = await query;
    
    
    
    if (error) throw new Error(error.message);
    
    return companion || []; 
}

export const getcompanion = async(id: string) => {
    const supabse = createsupabaseClient()
   const {data, error} = await supabse
    .from('companion')
    .select()
    .eq('id',id)
    if(error) return console.log(error)
        return data[0]
}


export const addToSessionHistory = async (companion: string) => {
    const {userId} =await auth()
    const supabase =  createsupabaseClient()
    const{data, error} =await supabase.from('session_history')
    .insert({
        companion_id :companion,
        user_id :userId,

    })
    if(error) throw new Error(error.message);
    return data
}

export const getRecentSessions = async (limit = 10, p0: number) =>{
    const supabase = createsupabaseClient()
    const {data, error } = await supabase 
    .from ('session_history')
    .select(`companion:companion_id(*)`)
    .order('created_at',{ascending: false})
    .limit(limit)

    if(error) throw new Error(error.message)
        return data.map(({ companion })=> companion)

}

export const getUserSessions = async (userId: string, limit =10) =>{
    const supabase = createsupabaseClient()
    const {data, error } = await supabase 
    .from ('session_history')
    .select(`companion:companion_id(*)`)
    .eq('user_id',userId)
    .order('created_at',{ascending: false})
    .limit(limit)

    if(error) throw new Error(error.message)
        return data.map(({ companion })=> companion)

}

export const getUserCompanion = async (userId: string) =>{
    const supabase = createsupabaseClient()
    const {data, error } = await supabase 
    .from ('companion')
    .select()
    .eq('author',userId)
    

    if(error) throw new Error(error.message)
        return data.map(({ companion })=> companion)

}