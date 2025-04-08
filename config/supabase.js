const { createClient } = require('@supabase/supabase-js')
const { supabaseUrl, supabaseKey } = process.env

exports.supabase = createClient(supabaseUrl, supabaseKey)