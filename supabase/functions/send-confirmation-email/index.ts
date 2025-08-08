
// supabase/functions/send-confirmation-email/index.ts
import { serve } from 'https://deno.land/std@0.192.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { email, name, report_id } = await req.json()

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  if (!email || !report_id) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), {
      status: 400,
    })
  }

  const { error } = await supabase.functions.invoke('resend', {
    body: {
      from: 'noreply@barrettestates.com',
      to: email,
      subject: 'Report Received – Barrett’s Reporting Tool',
      html: `
        <h2>Thank you, ${name || 'Tenant'}</h2>
        <p>We’ve received your report (Ref: ${report_id}).</p>
        <p>Our team will review it and be in touch shortly.</p>
        <br />
        <p>Barrett’s Estate Agents</p>
      `
    }
  })

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200
  })
})
