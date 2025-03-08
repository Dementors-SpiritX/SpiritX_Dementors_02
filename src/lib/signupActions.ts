'use server';

import { createClient } from '@/lib/supabaseServer';

export async function signup(formData: FormData) {
	const supabase = createClient();

	const email = formData.get('email') as string;
	const password = formData.get('password') as string;
	const fullname = formData.get('fullname') as string;
	const username = formData.get('username') as string;

	// Validate required fields
	if (!email || !password || !fullname || !username) {
		return { success: false, message: 'All fields are required.' };
	}

	// Sign up the user in Supabase Auth
	const { data, error } = await (await supabase).auth.signUp({
		email,
		password
	});

	// Check if auth signup failed
	if (error) {
		return { success: false, message: error.message };
	}

	// Extract the user ID from Auth response
	const userId = data.user?.id;
	if (!userId) {
		return { success: false, message: 'Failed to retrieve user ID' };
	}

	//Insert the user’s additional details into the `users` table
	const { error: dbError } = await (await supabase).from('users').insert([
		{
			id: userId, // Store the same ID from auth.users
			fullname,
			username,
			email
		}
	]);

	// If there's an error inserting into `users`, return it
	if (dbError) {
		return { success: false, message: dbError.message };
	}

	// Everything successful
	return { success: true, message: 'User registered successfully' };
}
