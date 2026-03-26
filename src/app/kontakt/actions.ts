'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const OWNER_EMAIL = 'kontakt@niks-garage-nuernberg.de'
const FROM_EMAIL = 'Nik\'s Garage <noreply@niks-garage-nuernberg.de>'

interface SubmitFormData {
  brand: string
  model: string
  customBrand: string
  year: string
  selectedServices: string[]
  serviceNote: string
  selectedLocation: string
  locationCity: string
  name: string
  email: string
  phone: string
  preferredDate: string
  message: string
  serviceLabels: string[]
}

function buildOwnerHtml(data: SubmitFormData): string {
  const vehicle = data.brand === 'other'
    ? data.customBrand
    : `${data.brand.charAt(0).toUpperCase() + data.brand.slice(1)} ${data.model}`
  const yearStr = data.year ? ` (${data.year})` : ''

  return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#141414;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.06);">
        
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#e8c547 0%,#d4a843 100%);padding:32px 40px;">
          <h1 style="margin:0;font-size:22px;font-weight:700;color:#0a0a0a;letter-spacing:-0.5px;">Neue Serviceanfrage</h1>
          <p style="margin:6px 0 0;font-size:14px;color:rgba(0,0,0,0.6);">Eingegangen über niks-garage-nuernberg.de</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px 40px;">
          
          <!-- Customer -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr><td style="padding:16px 20px;background:#1a1a1a;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#e8c547;font-weight:600;">Kunde</p>
              <p style="margin:0;font-size:16px;color:#fff;font-weight:600;">${data.name}</p>
              ${data.email ? `<p style="margin:4px 0 0;font-size:14px;color:rgba(255,255,255,0.6);">${data.email}</p>` : ''}
              ${data.phone ? `<p style="margin:4px 0 0;font-size:14px;color:rgba(255,255,255,0.6);">${data.phone}</p>` : ''}
            </td></tr>
          </table>

          <!-- Details Grid -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr>
              <td width="50%" style="padding:16px 20px;background:#1a1a1a;border-radius:12px 0 0 12px;border:1px solid rgba(255,255,255,0.06);border-right:none;vertical-align:top;">
                <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#e8c547;font-weight:600;">Fahrzeug</p>
                <p style="margin:0;font-size:15px;color:#fff;font-weight:500;">${vehicle}${yearStr}</p>
              </td>
              <td width="50%" style="padding:16px 20px;background:#1a1a1a;border-radius:0 12px 12px 0;border:1px solid rgba(255,255,255,0.06);border-left:none;vertical-align:top;">
                <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#e8c547;font-weight:600;">Standort</p>
                <p style="margin:0;font-size:15px;color:#fff;font-weight:500;">${data.locationCity}</p>
              </td>
            </tr>
          </table>

          <!-- Services -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr><td style="padding:16px 20px;background:#1a1a1a;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#e8c547;font-weight:600;">Gewünschte Services</p>
              ${data.serviceLabels.map(s => `<span style="display:inline-block;margin:4px 6px 4px 0;padding:6px 14px;background:rgba(232,197,71,0.1);border:1px solid rgba(232,197,71,0.25);border-radius:980px;font-size:13px;color:#e8c547;font-weight:500;">${s}</span>`).join('')}
            </td></tr>
          </table>

          ${data.preferredDate ? `
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr><td style="padding:16px 20px;background:#1a1a1a;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#e8c547;font-weight:600;">Wunschtermin</p>
              <p style="margin:0;font-size:15px;color:#fff;font-weight:500;">${data.preferredDate}</p>
            </td></tr>
          </table>` : ''}

          ${data.serviceNote ? `
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr><td style="padding:16px 20px;background:#1a1a1a;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#e8c547;font-weight:600;">Hinweise</p>
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.8);line-height:1.6;">${data.serviceNote}</p>
            </td></tr>
          </table>` : ''}

          ${data.message ? `
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr><td style="padding:16px 20px;background:#1a1a1a;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#e8c547;font-weight:600;">Nachricht</p>
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.8);line-height:1.6;">${data.message}</p>
            </td></tr>
          </table>` : ''}

        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 40px 28px;border-top:1px solid rgba(255,255,255,0.06);">
          <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.3);">Diese Anfrage wurde automatisch über das Kontaktformular auf niks-garage-nuernberg.de gesendet.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function buildCustomerHtml(data: SubmitFormData): string {
  const vehicle = data.brand === 'other'
    ? data.customBrand
    : `${data.brand.charAt(0).toUpperCase() + data.brand.slice(1)} ${data.model}`
  const yearStr = data.year ? ` (${data.year})` : ''
  const firstName = data.name.split(' ')[0]

  return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#141414;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.06);">
        
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#e8c547 0%,#d4a843 100%);padding:32px 40px;text-align:center;">
          <h1 style="margin:0;font-size:24px;font-weight:700;color:#0a0a0a;letter-spacing:-0.5px;">NIK'S GARAGE</h1>
          <p style="margin:6px 0 0;font-size:13px;color:rgba(0,0,0,0.5);font-weight:500;letter-spacing:1px;text-transform:uppercase;">Electrified. Qualified.</p>
        </td></tr>

        <!-- Greeting -->
        <tr><td style="padding:36px 40px 0;">
          <h2 style="margin:0 0 12px;font-size:20px;color:#fff;font-weight:600;">Hallo ${firstName},</h2>
          <p style="margin:0 0 24px;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.7;">
            vielen Dank für Ihre Serviceanfrage! Wir haben Ihre Daten erhalten und melden uns in Kürze telefonisch bei Ihnen zur Terminabstimmung.
          </p>
        </td></tr>

        <!-- Summary -->
        <tr><td style="padding:0 40px 32px;">
          <p style="margin:0 0 16px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#e8c547;font-weight:600;">Ihre Anfrage im Überblick</p>
          
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:12px;border:1px solid rgba(255,255,255,0.06);overflow:hidden;">
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);">
                <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);">Fahrzeug</p>
                <p style="margin:4px 0 0;font-size:15px;color:#fff;font-weight:500;">${vehicle}${yearStr}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);">
                <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);">Services</p>
                <p style="margin:4px 0 0;font-size:15px;color:#fff;font-weight:500;">${data.serviceLabels.join(', ')}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;${data.preferredDate ? 'border-bottom:1px solid rgba(255,255,255,0.04);' : ''}">
                <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);">Standort</p>
                <p style="margin:4px 0 0;font-size:15px;color:#fff;font-weight:500;">${data.locationCity}</p>
              </td>
            </tr>
            ${data.preferredDate ? `<tr>
              <td style="padding:14px 20px;">
                <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);">Wunschtermin</p>
                <p style="margin:4px 0 0;font-size:15px;color:#fff;font-weight:500;">${data.preferredDate}</p>
              </td>
            </tr>` : ''}
          </table>
        </td></tr>

        <!-- CTA -->
        <tr><td style="padding:0 40px 32px;text-align:center;">
          <p style="margin:0 0 16px;font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;">
            Sie möchten uns vorab erreichen? Rufen Sie uns gerne an:
          </p>
          <a href="tel:017670037698" style="display:inline-block;padding:14px 36px;background:linear-gradient(135deg,#e8c547 0%,#d4a843 100%);color:#0a0a0a;font-size:15px;font-weight:700;text-decoration:none;border-radius:980px;letter-spacing:0.3px;">0176 / 700 376 98</a>
        </td></tr>

        <!-- Info -->
        <tr><td style="padding:0 40px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
            <tr>
              <td style="padding:20px;text-align:center;">
                <p style="margin:0 0 4px;font-size:13px;color:rgba(255,255,255,0.5);">Sprechzeiten</p>
                <p style="margin:0;font-size:14px;color:#fff;font-weight:500;">Mo–Do 08:00–17:00 · Fr 08:00–14:00</p>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
          <p style="margin:0 0 4px;font-size:13px;color:rgba(255,255,255,0.4);font-weight:500;">NIK'S GARAGE · EVINITY GmbH</p>
          <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.25);">Witschelstraße 60 · 90431 Nürnberg</p>
          <p style="margin:8px 0 0;font-size:11px;color:rgba(255,255,255,0.2);">Diese E-Mail wurde automatisch versendet. Bitte antworten Sie nicht direkt auf diese Nachricht.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function submitContactForm(data: SubmitFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Send notification to owner
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [OWNER_EMAIL],
      subject: `Neue Serviceanfrage: ${data.name} – ${data.brand === 'other' ? data.customBrand : `${data.brand.charAt(0).toUpperCase() + data.brand.slice(1)} ${data.model}`}`,
      html: buildOwnerHtml(data),
    })

    // Send confirmation to customer (only if email provided)
    if (data.email) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [data.email],
        subject: 'Ihre Serviceanfrage bei Nik\'s Garage – Bestätigung',
        html: buildCustomerHtml(data),
      })
    }

    return { success: true }
  } catch (err) {
    console.error('Resend error:', err)
    return { success: false, error: 'E-Mail konnte nicht gesendet werden.' }
  }
}
