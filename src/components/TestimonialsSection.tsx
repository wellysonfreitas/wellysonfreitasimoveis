import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Wellyson foi fundamental na compra do meu primeiro apartamento. Explicou cada detalhe do financiamento e cuidou de toda a burocracia. Recebi as chaves sem nenhuma dor de cabeça!",
    name: "Mariana Silva",
    role: "Compradora pelo MCMV",
  },
  {
    quote: "Profissionalismo e atenção excepcionais. Encontrou exatamente o que eu procurava para investir no litoral, dentro do meu orçamento e com todas as características que eu desejava.",
    name: "Paulo Roberto Mendes",
    role: "Investidor imobiliário",
  },
  {
    quote: "A experiência de comprar nosso apartamento de praia foi incrível. Wellyson conhece cada detalhe do litoral pernambucano e nos ajudou a fazer a melhor escolha.",
    name: "Ana e Carlos Ferreira",
    role: "Compradores em Porto de Galinhas",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-sans text-xs font-medium tracking-widest uppercase text-primary mb-4">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-4">
            O que dizem meus clientes
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            A satisfação dos meus clientes é minha maior conquista.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-lg p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              {/* Quote */}
              <p className="font-sans text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-lg font-medium text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-serif font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
