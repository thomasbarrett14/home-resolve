
# Barrett’s Reporting Tool – Multi-Step Form Upgrade

This folder contains a refactor of the form into a true multi-page flow.

## 📄 Page Structure

- `CategorySelectPage.tsx`: Start screen – user selects main issue category
- `SubCategoryPage.tsx`: Shows available subcategories based on main category
- `FaultSelectPage.tsx`: Presents fault options (e.g. “No hot water”)
- `TroubleshootingPage.tsx`: Displays contextual help before proceeding
- `DetailsPage.tsx`: Lets the tenant describe the issue and fill in any specific questions
- `UploadPage.tsx`: Allows image/video uploads (max 10)
- `ContactPage.tsx`: Contact info, vulnerability toggle, availability checkbox
- `ConfirmationPage.tsx`: Submission success message or final review

## 🗂️ Category Config

Found in `src/data/categories.json`. This drives the entire form structure.

```json
[
  {
    "category": "Heating",
    "subcategories": [
      {
        "name": "Gas Boiler",
        "faults": [
          {
            "name": "No hot water",
            "troubleshooting": "Check boiler pressure and reset..."
          }
        ]
      }
    ]
  }
]
```

You can add or modify categories, subcategories, and faults here.

## 🛠 Next Steps

- Wire up navigation logic between pages
- Add shared global context or useReducer to carry form state
- Hook up final submission to Supabase `reports` + `media_uploads` tables
- Optional: Email confirmation logic (Supabase Edge Function or Resend)
