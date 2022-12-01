import { createClient } from "@supabase/supabase-js";
import useAuthUser from "src/composables/UseAuthUser";

const supabaseUrl = "https://hevlkjihablyymksrdci.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldmxramloYWJseXlta3NyZGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MTc3NTIsImV4cCI6MTk4MDQ5Mzc1Mn0.AaH11L8HRMRUtbGJxzT433CVB41mD3qyrWLrCmkkCjo";
const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();

  user.value = session?.user || null;
});

export default function useSupabase() {
  return { supabase };
}
