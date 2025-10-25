import supabase from "./supabaseClient";

export async function signUpUser(email, password) {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message || "Unexpected error" };
  }
}

export async function signOutUser() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message || "unexpected error" };
  }
}

export async function signInUser(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message || "Unexpected error" };
  }
}
