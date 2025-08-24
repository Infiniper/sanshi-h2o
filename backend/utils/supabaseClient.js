// backend/utils/supabaseClient.js

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Service Key are required.');
}

// Initialize the Supabase client for server-side operations
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;