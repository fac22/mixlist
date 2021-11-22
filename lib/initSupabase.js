import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://lziyckwaeqxibcefiidf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjk3MjU4NiwiZXhwIjoxOTUyNTQ4NTg2fQ.OQGi0cCg5j6uzEGr_7bPd4xCIcLK355zidOzNYkWsXQ'
  //   process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
