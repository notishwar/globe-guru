import { useState, useEffect, useCallback, useRef } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window === 'undefined') return initialValue;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("LS Error:", error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("LS Error:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);
  const toggleTheme = useCallback(() => setTheme(prev => prev === 'dark' ? 'light' : 'dark'), [setTheme]);
  return { theme, toggleTheme };
};

export const useExchangeRates = (baseCurrency) => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(false);
  const cache = useRef({});

  useEffect(() => {
    if (!baseCurrency) return;
    if (cache.current[baseCurrency]) { setRates(cache.current[baseCurrency]); return; }

    const fetchRates = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`);
        const data = await response.json();
        cache.current[baseCurrency] = data.rates;
        setRates(data.rates);
      } catch (err) {
        setRates({ 'USD': 1, 'EUR': 0.92, 'GBP': 0.79, 'JPY': 148.5, 'AUD': 1.52, 'CAD': 1.35, 'INR': 83.12 });
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, [baseCurrency]);
  return { rates, loading };
};