import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sfxfaurftxkisobgkxxl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmeGZhdXJmdHhraXNvYmdreHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5Mzc2MDQsImV4cCI6MjAyMTUxMzYwNH0.PRraECR3b53RNr8oynsnomPXAVRFyFhYvV3KG6GKavk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
