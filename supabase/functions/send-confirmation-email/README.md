
# Supabase Edge Function – send-confirmation-email

This Edge Function sends a confirmation email to the user once a report is submitted.

## 🔧 Environment Variables Required

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## 📨 Expected JSON Payload (POST)

```json
{
  "email": "tenant@example.com",
  "name": "Tenant Name",
  "report_id": "12345-abcde"
}
```

## 📤 Email Service (Optional)

This version assumes you're either:
- Using another Supabase Function called `resend`, or
- Want to plug into Resend.com, SMTP, or another mail handler

## 🚀 Deploy It

```bash
supabase functions deploy send-confirmation-email
```

Then you can call it from your client like this:

```ts
await fetch('/functions/v1/send-confirmation-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'someone@example.com',
    name: 'Jane Doe',
    report_id: 'xyz-123'
  })
})
```
