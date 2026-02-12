export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  // Indian phone number: 10 digits starting with 6-9
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

export function isValidPinCode(pinCode: string): boolean {
  // Indian PIN code: 6 digits, first digit 1-9
  const pinCodeRegex = /^[1-9][0-9]{5}$/;
  return pinCodeRegex.test(pinCode);
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
