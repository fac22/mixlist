// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const user = supabase.auth.user();

    //Data stores the information from the 'profiles' table
    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    res.status(200).json(data.username);
  } catch (error) {
    alert(error.message);
  }
}
