import { motion, useReducedMotion } from 'framer-motion';

const elements = { h2: motion.h2, div: motion.div, section: motion.section, article: motion.article, header: motion.header, figure: motion.figure, footer: motion.footer };

export default function Reveal({ as = 'div', delay = 0, children, ...props }) {
  const reducedMotion = useReducedMotion();
  const Component = elements[as];
  return <Component {...props} initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.08 }} transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</Component>;
}
