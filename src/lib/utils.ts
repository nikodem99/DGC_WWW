export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString('pl-PL', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

export function getColumnClass(current: number, total: number): string {
  return `column-${current}_${total}`;
}

export function replaceCopyrightMacros(text: string): string {
  const year = new Date().getFullYear().toString();
  return text
    .replace(/\{\{Y\}\}/g, year)
    .replace(/\{Y\}/g, year);
}
