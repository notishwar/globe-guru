export const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  if (!element) return;
  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
};