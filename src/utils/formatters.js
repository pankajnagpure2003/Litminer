/**
 * Format a number as currency (USD)
 * @param {number} value
 * @param {number} decimals
 */
export const formatCurrency = (value, decimals = 2) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

/**
 * Format a crypto amount with its symbol
 * @param {number} value
 * @param {string} symbol
 * @param {number} decimals
 */
export const formatCrypto = (value, symbol, decimals = 4) =>
  `${parseFloat(value).toFixed(decimals)} ${symbol}`;

/**
 * Shorten a wallet address for display
 * @param {string} address
 * @param {number} chars
 */
export const shortenAddress = (address, chars = 6) => {
  if (!address) return '';
  return `${address.slice(0, chars)}...${address.slice(-4)}`;
};

/**
 * Format a timestamp to a readable date/time string
 * @param {string|Date} date
 */
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

/**
 * Format a timestamp to time
 * @param {string|Date} date
 */
export const formatTime = (date) => {
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

/**
 * Format a timestamp to "Oct 24, 14:22" style
 * @param {string|Date} date
 */
export const formatDateTime = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) +
    ', ' +
    d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
};

/**
 * Format seconds to HH:MM:SS countdown string
 * @param {number} seconds
 */
export const formatCountdown = (seconds) => {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return { h, m, s };
};

/**
 * Format a large number with K/M/B suffix
 * @param {number} num
 */
export const formatCompact = (num) => {
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B`;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
};

/**
 * Format percentage with % suffix
 * @param {number} value
 */
export const formatPercent = (value) => `${value.toFixed(1)}%`;
