import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ztpawmghqnxkwdrsfqdn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0cGF3bWdocW54a3dkcnNmcWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NjM1MjIsImV4cCI6MjAxOTQzOTUyMn0.Z_xN6DPI4hax-aw-JfFuoCBwolyBIqLJL4sPJ56pYRI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
