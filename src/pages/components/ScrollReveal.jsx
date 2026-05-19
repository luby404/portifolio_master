import { motion } from 'framer-motion';

export function ScrollReveal({ children, x=-100, y=0, time=0.6 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y:0, x:x }} // Estado inicial (invisível e 50px abaixo)
      whileInView={{ opacity: 1, y:0, x:0 }} // Animação quando entra na tela
      viewport={{ once: false, amount: 0.6 }} // Anima apenas uma vez, quando 20% do item aparece
      transition={{ duration: time, ease: 'easeOut' }} // Tempo e tipo da transição
    >
      {children}
    </motion.div>
  );
}