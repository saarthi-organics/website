export interface WhatsAppEnquiryData {
  contactPerson?: string;
  companyName?: string;
  requiredQuantity?: string;
  deliveryLocation?: string;
  message?: string;
}

const PHONE_NUMBER = '917055552535';
const STORAGE_KEY = 'saarthi_draft_enquiry';

/**
 * Saves partial enquiry form data to localStorage.
 */
export function saveWhatsAppDraft(data: Partial<WhatsAppEnquiryData>): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const existing: WhatsAppEnquiryData = raw ? JSON.parse(raw) : {};
    const updated = { ...existing, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    
    // Dispatch a custom event to notify other components of the update
    window.dispatchEvent(new CustomEvent('saarthi_whatsapp_draft_updated'));
  } catch (e) {
    console.error('Error saving whatsapp draft:', e);
  }
}

/**
 * Retrieves the stored enquiry form data.
 */
export function getWhatsAppDraft(): WhatsAppEnquiryData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('Error reading whatsapp draft:', e);
    return null;
  }
}

/**
 * Constructs the URL-encoded WhatsApp enquiry link.
 */
export function buildWhatsAppLink(sourcePage: string, customData?: WhatsAppEnquiryData | null): string {
  const data = customData !== undefined ? customData : getWhatsAppDraft();

  const hasDetails = data && (
    (data.contactPerson && data.contactPerson.trim()) ||
    (data.companyName && data.companyName.trim()) ||
    (data.requiredQuantity && data.requiredQuantity.trim()) ||
    (data.deliveryLocation && data.deliveryLocation.trim())
  );

  let message = '';

  if (hasDetails) {
    message = `Hello Saarthi Organics Sourcing Desk,\n\n` +
      `I would like to make a bulk molasses enquiry. Here are the details:\n\n` +
      `- Name: ${data.contactPerson?.trim() || 'Not provided'}\n` +
      `- Company Name: ${data.companyName?.trim() || 'Not provided'}\n` +
      `- Quantity Required: ${data.requiredQuantity?.trim() || 'Not provided'}\n` +
      `- Delivery Location: ${data.deliveryLocation?.trim() || 'Not provided'}\n` +
      `- Product: Bulk Molasses\n`;

    if (data.message && data.message.trim()) {
      message += `- Additional Requirements: ${data.message.trim()}\n`;
    } else {
      message += `- Additional Requirements: None\n`;
    }

    message += `\nEnquiry Source: ${sourcePage}`;
  } else {
    message = `Hello Saarthi Organics Sourcing Desk,\n\n` +
      `I would like to make a bulk molasses enquiry. Please find my requirements below:\n\n` +
      `Company Name: \n` +
      `Quantity Required: \n` +
      `Delivery Location: \n` +
      `\nEnquiry Source: ${sourcePage}`;
  }

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
