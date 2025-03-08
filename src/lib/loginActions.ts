'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabaseServer';

export async function login(formData: FormData) {
	const supabase = await createClient();

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		// Encode error message in URL and redirect
		const errorMessage = encodeURIComponent(error.message);
		redirect(`/login/error?message=${errorMessage}`);
	}

	revalidatePath('/', 'layout');
	redirect('/dashboard');
}
